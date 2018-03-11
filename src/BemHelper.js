// Generated by BUCKLESCRIPT VERSION 2.2.2, PLEASE EDIT WITH CARE
'use strict';


function bem(block, element, _) {
  if (block) {
    var block$prime = block[0];
    if (element) {
      return block$prime + ("__" + element[0]);
    } else {
      return block$prime;
    }
  } else if (element) {
    return element[0];
  } else {
    return "";
  }
}

var $$default = bem;

exports.bem = bem;
exports.$$default = $$default;
exports.default = $$default;
exports.__esModule = true;
/* No side effect */
