(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Sidebar",
  mixins: [_mixin_Helper__WEBPACK_IMPORTED_MODULE_1__["Common"]],
  data: function data() {
    return {
      collapsed: false,
      menuVisibility: true,
      visible: false,
      pathname: [],
      rootSubmenuKeys: [],
      openKeys: [""]
    };
  },
  watch: {
    $route: function $route() {
      this.pathname.pop();
      this.highLightMenu();
    },
    collapse: function collapse(val) {
      this.collapsed = val;
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(["collapse", "authUser"])),
  mounted: function mounted() {
    this.smallMenu();
    var instance = this;
    $(window).resize(function () {
      instance.smallMenu();
    });
  },
  methods: {
    onOpenChange: function onOpenChange(openKeys) {
      var _this = this;

      var latestOpenKey = openKeys.find(function (key) {
        return _this.openKeys.indexOf(key) === -1;
      });

      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
    highLightMenu: function highLightMenu() {
      var urlArray = window.location.pathname;

      if (urlArray === "/auth/dashboard") {
        this.pathname.push("/auth/dashboard");
      } else {
        var url = urlArray.split("/");
        this.pathname.push(url[1]);
      }
    },
    onClose: function onClose() {
      this.collapsed = false;
    },
    smallMenu: function smallMenu() {
      var size = $(window).width();

      if (size < 768) {
        this.menuVisibility = false;
      } else if (size < 992) {
        this.collapsed = false;
        this.menuVisibility = true;
      } else {
        this.menuVisibility = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".member-plan[data-v-54bfa98a] {\n  position: fixed;\n  bottom: 0;\n  padding: 10px;\n  text-align: center;\n  margin: 0 auto;\n  background: #1d8efa;\n  color: #fff;\n  font-weight: 600;\n  z-index: 100;\n}\n.member-plan-2[data-v-54bfa98a] {\n  bottom: 0;\n  padding: 10px;\n  text-align: center;\n  margin: 0 auto;\n  background: #1d8efa;\n  color: #fff;\n  font-weight: 600;\n  z-index: 100;\n}\n.member-plan-large[data-v-54bfa98a] {\n  width: 200px;\n}\n.member-plan-large-2[data-v-54bfa98a] {\n  width: 256px;\n}\n.member-plan-mini[data-v-54bfa98a] {\n  width: 80px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticStyle: { background: "#ffffff" } },
    [
      _vm.menuVisibility
        ? _c(
            "a-layout-sider",
            {
              attrs: { trigger: null, collapsible: "" },
              model: {
                value: _vm.collapsed,
                callback: function($$v) {
                  _vm.collapsed = $$v
                },
                expression: "collapsed"
              }
            },
            [
              _c("div", { staticClass: "logo main-sidebar" }, [
                _c("img", {
                  staticClass: "full-logo",
                  attrs: { src: _vm.mainPath + "images/logo.png" }
                })
              ]),
              _vm._v(" "),
              _c(
                "a-menu",
                {
                  attrs: {
                    theme: "light",
                    mode: "inline",
                    "open-keys": _vm.openKeys,
                    selectedKeys: _vm.pathname
                  },
                  on: { openChange: _vm.onOpenChange }
                },
                [
                  _c(
                    "a-menu-item",
                    { key: "dashboard" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/auth/dashboard" } },
                        [
                          _c("a-icon", { attrs: { type: "desktop" } }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Dashboard")])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-sub-menu",
                    { key: "sub1" },
                    [
                      _c(
                        "span",
                        { attrs: { slot: "title" }, slot: "title" },
                        [
                          _c("a-icon", { attrs: { type: "team" } }),
                          _c("span", [_vm._v("Clients")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "1" },
                        [
                          _c("router-link", { attrs: { to: "/auth/buyers" } }, [
                            _c("span", [_vm._v("Buyers")])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "2" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/auth/sellers" } },
                            [_c("span", [_vm._v("Sellers")])]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "3" },
                        [
                          _c("router-link", { attrs: { to: "/auth/owners" } }, [
                            _c("span", [_vm._v("Owners")])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-sub-menu",
                    { key: "sub2" },
                    [
                      _c(
                        "span",
                        { attrs: { slot: "title" }, slot: "title" },
                        [
                          _c("a-icon", { attrs: { type: "home" } }),
                          _c("span", [_vm._v("Car Haat")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "1" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/auth/analysis" } },
                            [_c("span", [_vm._v("Analysis")])]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "2" },
                        [
                          _c("router-link", { attrs: { to: "/auth/token" } }, [
                            _c("span", [_vm._v("Token")])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "3" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/auth/haat/cars" } },
                            [_c("span", [_vm._v("Haat Cars")])]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "4" },
                        [
                          _c("router-link", { attrs: { to: "/auth/maps" } }, [
                            _c("span", [_vm._v("Manage Map")])
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-menu-item",
                    { key: "rapid-sell" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/auth/rapid" } },
                        [
                          _c("a-icon", { attrs: { type: "diff" } }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Rapid Sell")])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-sub-menu",
                    { key: "sub3" },
                    [
                      _c(
                        "span",
                        { attrs: { slot: "title" }, slot: "title" },
                        [
                          _c("a-icon", { attrs: { type: "car" } }),
                          _c("span", [_vm._v("Cars")])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "1" },
                        [
                          _c("router-link", { attrs: { to: "/auth/brands" } }, [
                            _c("span", [_vm._v("Brand")])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "2" },
                        [
                          _c("router-link", { attrs: { to: "/auth/models" } }, [
                            _c("span", [_vm._v("Model")])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "3" },
                        [
                          _c("router-link", { attrs: { to: "/auth/cars" } }, [
                            _c("span", [_vm._v("Car")])
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "4" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/auth/cars/available" } },
                            [_c("span", [_vm._v("Available Cars")])]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "5" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/auth/cars/sold" } },
                            [_c("span", [_vm._v("Sold Cars")])]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "6" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: "/auth/cars/ongoing" } },
                            [_c("span", [_vm._v("Ongoing Sell")])]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("a-menu-item", { key: "brta" }, [
                    _c(
                      "a",
                      {
                        attrs: {
                          target: "_blank",
                          href:
                            "http://inventory.tahmidszone.com/Ownerships/index"
                        }
                      },
                      [
                        _c("a-icon", { attrs: { type: "desktop" } }),
                        _vm._v(" "),
                        _c("span", [_vm._v("BRTA")])
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "member-plan member-plan-large capitalize-letter"
                },
                [_vm._v("\n                Admin\n            ")]
              )
            ],
            1
          )
        : _c(
            "a-drawer",
            {
              attrs: {
                placement: "left",
                closable: false,
                visible: _vm.collapsed
              },
              on: { close: _vm.onClose }
            },
            [
              _c(
                "div",
                {
                  staticClass: "logo main-sidebar",
                  staticStyle: { margin: "10px" }
                },
                [
                  _c("img", {
                    staticClass: "full-logo",
                    attrs: { src: _vm.mainPath + "images/logo.png" }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "a-menu",
                {
                  attrs: {
                    theme: "light",
                    mode: "inline",
                    "open-keys": _vm.openKeys,
                    selectedKeys: _vm.pathname
                  },
                  on: { openChange: _vm.onOpenChange }
                },
                [
                  _c(
                    "a-menu-item",
                    { key: "dashboard" },
                    [
                      _c(
                        "router-link",
                        { attrs: { to: "/auth/dashboard" } },
                        [
                          _c("a-icon", { attrs: { type: "desktop" } }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Dashboard")])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "member-plan member-plan-large-2 capitalize-letter"
                },
                [_vm._v("\n                Admin\n            ")]
              )
            ],
            1
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/layouts/Sidebar.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/layouts/Sidebar.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_54bfa98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=54bfa98a&scoped=true& */ "./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&scoped=true&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Sidebar_vue_vue_type_style_index_0_id_54bfa98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true& */ "./resources/js/components/layouts/Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_54bfa98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_54bfa98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "54bfa98a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layouts/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layouts/Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/layouts/Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_54bfa98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=style&index=0&id=54bfa98a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_54bfa98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_54bfa98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_54bfa98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_style_index_0_id_54bfa98a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_54bfa98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=54bfa98a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/layouts/Sidebar.vue?vue&type=template&id=54bfa98a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_54bfa98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_54bfa98a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixin/Helper.js":
/*!**************************************!*\
  !*** ./resources/js/mixin/Helper.js ***!
  \**************************************/
/*! exports provided: Common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Common", function() { return Common; });
var Common = {
  data: function data() {
    return {
      data: {},
      // publicPath: 'http://api.carhaat.local/api/',
      // mainPath: 'http://api.carhaat.local/',
      publicPath: 'http://haat.tahmidszone.com/api/',
      mainPath: 'http://haat.tahmidszone.com/'
    };
  },
  methods: {
    config: function config() {
      var token = localStorage.getItem('token');
      return {
        headers: {
          Authorization: "bearer ".concat(token)
        }
      };
    },
    axiosGet: function axiosGet(route, success, error) {
      var instance = this;
      axios.get(instance.publicPath + route, instance.config()).then(function (response) {
        success(response.data);
      })["catch"](function (err) {
        if (err.response.status == 401) {
          localStorage.setItem('token', '');
          instance.redirect('/auth/login');
        } else {
          error(err);
        }
      });
    },
    axiosGetWithoutToken: function axiosGetWithoutToken(route, success, error) {
      axios.get(this.publicPath + route).then(function (response) {
        console.log(response);
        success(response.data);
      })["catch"](function (err) {
        error(err);
      });
    },
    axiosPost: function axiosPost(route, data, success, error) {
      var instance = this;
      axios.post(this.publicPath + route, data, this.config()).then(function (response) {
        success(response.data);
      }.bind())["catch"](function (err) {
        if (err.response.status == 401) {
          localStorage.setItem('token', '');
          instance.redirect('/auth/login');
        } else {
          error(err);
        }
      });
    },
    axiosPostWithoutToken: function axiosPostWithoutToken(route, data, success, error) {
      axios.post(this.publicPath + route, data).then(function (response) {
        success(response.data);
      }.bind())["catch"](function (err) {
        error(err);
      });
    },
    redirect: function redirect(route) {
      window.location.href = route;
    },
    successNoti: function successNoti(msg) {
      this.$toaster.success(msg);
    },
    errorNoti: function errorNoti(msg) {
      if (msg.response === undefined) {
        this.$toaster.error(msg);
      } else if (msg.response.data.message === undefined) {
        this.$toaster.error(msg);
      } else {
        this.$toaster.error(msg.response.data.message);
      }
    }
  }
};

/***/ })

}]);