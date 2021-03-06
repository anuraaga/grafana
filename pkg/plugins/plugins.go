package plugins

import (
	"encoding/json"
	"errors"
	"os"
	"path"
	"path/filepath"
	"reflect"
	"strings"

	"github.com/grafana/grafana/pkg/log"
	"github.com/grafana/grafana/pkg/setting"
	"github.com/grafana/grafana/pkg/util"
)

var (
	DataSources  map[string]*DataSourcePlugin
	Panels       map[string]*PanelPlugin
	StaticRoutes []*PluginStaticRoute
	Apps         map[string]*AppPlugin
	Plugins      map[string]*PluginBase
	PluginTypes  map[string]interface{}
)

type PluginScanner struct {
	pluginPath string
	errors     []error
}

func Init() error {
	DataSources = make(map[string]*DataSourcePlugin)
	StaticRoutes = make([]*PluginStaticRoute, 0)
	Panels = make(map[string]*PanelPlugin)
	Apps = make(map[string]*AppPlugin)
	Plugins = make(map[string]*PluginBase)
	PluginTypes = map[string]interface{}{
		"panel":      PanelPlugin{},
		"datasource": DataSourcePlugin{},
		"app":        AppPlugin{},
	}

	log.Info("Plugins: Scan starting")
	scan(path.Join(setting.StaticRootPath, "app/plugins"))

	// check if plugins dir exists
	if _, err := os.Stat(setting.PluginsPath); os.IsNotExist(err) {
		log.Warn("Plugins: Plugin dir %v does not exist", setting.PluginsPath)
		if err = os.MkdirAll(setting.PluginsPath, os.ModePerm); err != nil {
			log.Warn("Plugins: Failed to create plugin dir: %v, error: %v", setting.PluginsPath, err)
		} else {
			log.Info("Plugins: Plugin dir %v created", setting.PluginsPath)
			scan(setting.PluginsPath)
		}
	} else {
		scan(setting.PluginsPath)
	}

	// check plugin paths defined in config
	checkPluginPaths()

	for _, panel := range Panels {
		panel.initFrontendPlugin()
	}
	for _, panel := range DataSources {
		panel.initFrontendPlugin()
	}
	for _, app := range Apps {
		app.initApp()
	}

	return nil
}

func checkPluginPaths() error {
	for _, section := range setting.Cfg.Sections() {
		if strings.HasPrefix(section.Name(), "plugin.") {
			path := section.Key("path").String()
			if path != "" {
				scan(path)
			}
		}
	}
	return nil
}

func scan(pluginDir string) error {
	scanner := &PluginScanner{
		pluginPath: pluginDir,
	}

	log.Info("Plugins: Scaning dir %s", pluginDir)

	if err := util.Walk(pluginDir, true, true, scanner.walker); err != nil {
		if pluginDir != "data/plugins" {
			log.Warn("Could not scan dir \"%v\" error: %s", pluginDir, err)
		}
		return err
	}

	if len(scanner.errors) > 0 {
		return errors.New("Some plugins failed to load")
	}

	return nil
}

func (scanner *PluginScanner) walker(currentPath string, f os.FileInfo, err error) error {
	if err != nil {
		return err
	}

	if f.Name() == "node_modules" {
		return util.WalkSkipDir
	}

	if f.IsDir() {
		return nil
	}

	if f.Name() == "plugin.json" {
		err := scanner.loadPluginJson(currentPath)
		if err != nil {
			log.Error(3, "Plugins: Failed to load plugin json file: %v,  err: %v", currentPath, err)
			scanner.errors = append(scanner.errors, err)
		}
	}
	return nil
}

func (scanner *PluginScanner) loadPluginJson(pluginJsonFilePath string) error {
	currentDir := filepath.Dir(pluginJsonFilePath)
	reader, err := os.Open(pluginJsonFilePath)
	if err != nil {
		return err
	}

	defer reader.Close()

	jsonParser := json.NewDecoder(reader)
	pluginCommon := PluginBase{}
	if err := jsonParser.Decode(&pluginCommon); err != nil {
		return err
	}

	if pluginCommon.Id == "" || pluginCommon.Type == "" {
		return errors.New("Did not find type and id property in plugin.json")
	}

	var loader PluginLoader
	if pluginGoType, exists := PluginTypes[pluginCommon.Type]; !exists {
		return errors.New("Unknown plugin type " + pluginCommon.Type)
	} else {
		loader = reflect.New(reflect.TypeOf(pluginGoType)).Interface().(PluginLoader)
	}

	reader.Seek(0, 0)
	return loader.Load(jsonParser, currentDir)
}
