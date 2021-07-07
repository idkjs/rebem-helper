'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$String = require("bs-platform/lib/js/string.js");

function getModifierClassNames(modifiers, base) {
  return List.map((function (item) {
                switch (item.TAG | 0) {
                  case /* String */0 :
                      return base + ("--" + item._0);
                  case /* Boolean */1 :
                      if (item._1) {
                        return base + ("--" + item._0);
                      } else {
                        return "";
                      }
                  case /* Switch */2 :
                      if (item._2) {
                        return base + ("--" + item._0);
                      } else {
                        return base + ("--" + item._1);
                      }
                  
                }
              }), modifiers);
}

function bem(block, element, modifiers, othersOpt, param) {
  var others = othersOpt !== undefined ? othersOpt : "";
  var classNames;
  if (block !== undefined) {
    if (element !== undefined) {
      if (modifiers !== undefined) {
        var className = block + ("__" + element);
        classNames = List.append({
              hd: className,
              tl: /* [] */0
            }, getModifierClassNames(modifiers, className));
      } else {
        classNames = {
          hd: block + ("__" + element),
          tl: /* [] */0
        };
      }
    } else {
      classNames = modifiers !== undefined ? List.append({
              hd: block,
              tl: /* [] */0
            }, getModifierClassNames(modifiers, block)) : ({
            hd: block,
            tl: /* [] */0
          });
    }
  } else {
    classNames = element !== undefined ? (
        modifiers !== undefined ? List.append({
                hd: element,
                tl: /* [] */0
              }, getModifierClassNames(modifiers, element)) : ({
              hd: element,
              tl: /* [] */0
            })
      ) : /* [] */0;
  }
  var bemClasses = List.append(classNames, {
        hd: others,
        tl: /* [] */0
      });
  return $$String.trim($$String.concat(" ", bemClasses));
}

var $$default = bem;

exports.bem = bem;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* No side effect */
