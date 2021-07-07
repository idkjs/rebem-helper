'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var ReBemHelper = require("../src/ReBemHelper.js");

Jest.describe("BEM helper", (function (param) {
        Jest.test("it should create a className for block", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, undefined, undefined, undefined);
                return Jest.Expect.toBe("my-block", Jest.Expect.expect(myBemClassNames));
              }));
        Jest.test("it should create a className for element", (function (param) {
                var myBemClassNames = ReBemHelper.bem(undefined, "my-element", undefined, undefined, undefined);
                return Jest.Expect.toBe("my-element", Jest.Expect.expect(myBemClassNames));
              }));
        Jest.test("it should create classNames for block and element", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", "element", undefined, undefined, undefined);
                return Jest.Expect.toBe("my-block__element", Jest.Expect.expect(myBemClassNames));
              }));
        Jest.test("it should create classNames for block and modifier with truthly boolean modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, {
                      hd: {
                        TAG: /* Boolean */1,
                        _0: "active",
                        _1: true
                      },
                      tl: /* [] */0
                    }, undefined, undefined);
                return Jest.Expect.toBe("my-block my-block--active", Jest.Expect.expect(myBemClassNames));
              }));
        Jest.test("it should create classNames for block and modifier with falsy boolean modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, {
                      hd: {
                        TAG: /* Boolean */1,
                        _0: "active",
                        _1: false
                      },
                      tl: /* [] */0
                    }, undefined, undefined);
                return Jest.Expect.toBe("my-block", Jest.Expect.expect(myBemClassNames));
              }));
        Jest.test("it should create classNames for block and modifier with string modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, {
                      hd: {
                        TAG: /* String */0,
                        _0: "big"
                      },
                      tl: /* [] */0
                    }, undefined, undefined);
                return Jest.Expect.toBe("my-block my-block--big", Jest.Expect.expect(myBemClassNames));
              }));
        Jest.test("it should create classNames for block and modifier with switch modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, {
                      hd: {
                        TAG: /* Switch */2,
                        _0: "active",
                        _1: "inactive",
                        _2: false
                      },
                      tl: /* [] */0
                    }, undefined, undefined);
                return Jest.Expect.toBe("my-block my-block--inactive", Jest.Expect.expect(myBemClassNames));
              }));
        Jest.test("it should create classNames for block and modifier with string modifier and boolean modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", undefined, {
                      hd: {
                        TAG: /* String */0,
                        _0: "big"
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
                return Jest.Expect.toBe("my-block my-block--big my-block--active", Jest.Expect.expect(myBemClassNames));
              }));
        Jest.test("it should create classNames for block element and modifier with string modifier and boolean modifier", (function (param) {
                var myBemClassNames = ReBemHelper.bem("my-block", "element", {
                      hd: {
                        TAG: /* String */0,
                        _0: "big"
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
                return Jest.Expect.toBe("my-block__element my-block__element--big my-block__element--active my-block__element--disable", Jest.Expect.expect(myBemClassNames));
              }));
        return Jest.test("it should create classNames for block and modifier with string modifier and others CSS", (function (param) {
                      var myBemClassNames = ReBemHelper.bem("my-block", undefined, {
                            hd: {
                              TAG: /* String */0,
                              _0: "big"
                            },
                            tl: /* [] */0
                          }, "my-super-other-class", undefined);
                      return Jest.Expect.toBe("my-block my-block--big my-super-other-class", Jest.Expect.expect(myBemClassNames));
                    }));
      }));

/*  Not a pure module */
