///<reference path="../../../headers/common.d.ts" />

import _ from 'lodash';
import $ from 'jquery';
import coreModule from '../../core_module';
import Drop from 'tether-drop';

export function popoverDirective() {
  return {
    restrict: 'E',
    transclude: true,
    link: function(scope, elem, attrs, ctrl, transclude) {
      var inputElem = elem.prev();
      if (inputElem.length === 0) {
        console.log('Failed to find input element for popover');
        return;
      }

      var offset = attrs.offset || '0 -10px';

      transclude(function(clone, newScope) {
        var content = document.createElement("div");
        _.each(clone, (node) => {
          content.appendChild(node);
        });

        var drop = new Drop({
          target: inputElem[0],
          content: content,
          position: 'right middle',
          classes: 'drop-help',
          openOn: 'click',
          tetherOptions: {
            offset: offset
          }
        });

      // inputElem.on('focus.popover', function() {
      //   drop.open();
      // });
      //
      // inputElem.on('blur.popover', function() {
      //   close();
      // });

        scope.$on('$destroy', function() {
          drop.destroy();
        });

      });
    }
  };
}

coreModule.directive('gfPopover', popoverDirective);
