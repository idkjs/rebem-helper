'use strict';

var ReBemHelper = require("../src/ReBemHelper.js");

var myActiveBemClassNames = ReBemHelper.bem("my-block", undefined, {
      hd: {
        TAG: /* Boolean */1,
        _0: "active",
        _1: true
      },
      tl: /* [] */0
    }, undefined, undefined);

ReBemHelper.bem("my-block", undefined, {
      hd: {
        TAG: /* String */0,
        _0: "small"
      },
      tl: /* [] */0
    }, undefined, undefined);

ReBemHelper.bem("my-block", undefined, {
      hd: {
        TAG: /* String */0,
        _0: "small"
      },
      tl: {
        hd: {
          TAG: /* Boolean */1,
          _0: "active",
          _1: true
        },
        tl: /* [] */0
      }
    }, undefined, undefined);

ReBemHelper.bem("my-block", "element", {
      hd: {
        TAG: /* String */0,
        _0: "small"
      },
      tl: /* [] */0
    }, undefined, undefined);

ReBemHelper.bem("my-block", undefined, {
      hd: {
        TAG: /* String */0,
        _0: "small"
      },
      tl: {
        hd: {
          TAG: /* Boolean */1,
          _0: "active",
          _1: true
        },
        tl: {
          hd: {
            TAG: /* Switch */2,
            _0: "enable",
            _1: "disable",
            _2: false
          },
          tl: /* [] */0
        }
      }
    }, undefined, undefined);

var mySizeBemClassNames = ReBemHelper.bem("my-block", "element", {
      hd: {
        TAG: /* String */0,
        _0: "small"
      },
      tl: /* [] */0
    }, "some-other-class", undefined);

var isActive = true;

exports.isActive = isActive;
exports.myActiveBemClassNames = myActiveBemClassNames;
exports.mySizeBemClassNames = mySizeBemClassNames;
/* myActiveBemClassNames Not a pure module */
