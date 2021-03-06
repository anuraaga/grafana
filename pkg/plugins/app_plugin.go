package plugins

import (
	"encoding/json"
	"strings"

	"github.com/gosimple/slug"
	"github.com/grafana/grafana/pkg/models"
)

type AppPluginPage struct {
	Name      string          `json:"name"`
	Slug      string          `json:"slug"`
	Component string          `json:"component"`
	Role      models.RoleType `json:"role"`
}

type AppPluginCss struct {
	Light string `json:"light"`
	Dark  string `json:"dark"`
}

type AppIncludeInfo struct {
	Name string `json:"name"`
	Type string `json:"type"`
	Id   string `json:"id"`
}

type AppPlugin struct {
	FrontendPluginBase
	Pages    []*AppPluginPage  `json:"pages"`
	Routes   []*AppPluginRoute `json:"routes"`
	Includes []*AppIncludeInfo `json:"-"`

	Pinned  bool `json:"-"`
	Enabled bool `json:"-"`
}

type AppPluginRoute struct {
	Path            string                 `json:"path"`
	Method          string                 `json:"method"`
	ReqGrafanaAdmin bool                   `json:"reqGrafanaAdmin"`
	ReqRole         models.RoleType        `json:"reqRole"`
	Url             string                 `json:"url"`
	Headers         []AppPluginRouteHeader `json:"headers"`
}

type AppPluginRouteHeader struct {
	Name    string `json:"name"`
	Content string `json:"content"`
}

func (app *AppPlugin) Load(decoder *json.Decoder, pluginDir string) error {
	if err := decoder.Decode(&app); err != nil {
		return err
	}

	if err := app.registerPlugin(pluginDir); err != nil {
		return err
	}

	Apps[app.Id] = app
	return nil
}

func (app *AppPlugin) initApp() {
	app.initFrontendPlugin()

	// check if we have child panels
	for _, panel := range Panels {
		if strings.HasPrefix(panel.PluginDir, app.PluginDir) {
			panel.setPathsBasedOnApp(app)
			app.Includes = append(app.Includes, &AppIncludeInfo{
				Name: panel.Name,
				Id:   panel.Id,
				Type: panel.Type,
			})
		}
	}

	// check if we have child datasources
	for _, ds := range DataSources {
		if strings.HasPrefix(ds.PluginDir, app.PluginDir) {
			ds.setPathsBasedOnApp(app)
			app.Includes = append(app.Includes, &AppIncludeInfo{
				Name: ds.Name,
				Id:   ds.Id,
				Type: ds.Type,
			})
		}
	}

	// slugify pages
	for _, page := range app.Pages {
		if page.Slug == "" {
			page.Slug = slug.Make(page.Name)
		}
	}
}
