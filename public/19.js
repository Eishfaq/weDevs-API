(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/model/Edit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/model/Edit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
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
  mixins: [_mixin_Helper__WEBPACK_IMPORTED_MODULE_0__["Common"]],
  props: ["id"],
  data: function data() {
    return {
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      hideRequiredMark: true,
      formLayout: "vertical",
      headers: {
        authorization: "authorization-text"
      },
      loading: false,
      name: "",
      brand: "",
      brands: [],
      bread: {
        active: {
          name: "Edit Model"
        },
        child: {
          name: "Models",
          link: "/auth/models"
        }
      }
    };
  },
  created: function created() {
    this.getBrands();
    this.getProfile();
  },
  methods: {
    save: function save() {
      var _this = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this;
          instance.axiosPost("models/update/" + instance.id, {
            name: values.name,
            brand: values.brand
          }, function (response) {
            instance.successNoti(response.message);
            instance.getProfile();
          }, function (error) {
            if (error.response.data.errors.name) {
              instance.errorNoti(error.response.data.errors.name[0]);
            } else {
              instance.errorNoti(error);
            }
          });
        }
      });
    },
    getProfile: function getProfile() {
      var instance = this;
      instance.axiosGet('models/edit/' + instance.id, function (response) {
        instance.name = response.data.name;
        instance.brand = response.data.brand_slug;
      }, function (error) {
        instance.errorNoti(error);
      });
    },
    getBrands: function getBrands() {
      var instance = this;
      instance.axiosGet('brands/all', function (response) {
        instance.brands = response.data;
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/model/Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/model/Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title[data-v-6fc6fc4a] {\n  padding: 10px 10px 0px;\n  background: #fff;\n  margin: 5px 0;\n}\n.profile .layout .picture[data-v-6fc6fc4a],\n.profile .layout .info[data-v-6fc6fc4a] {\n  background: #fff;\n  padding: 24px;\n}\n.profile .layout .ant-upload-select-picture-card:hover .overlay[data-v-6fc6fc4a] {\n  opacity: 0.8;\n}\n.profile .layout .picture[data-v-6fc6fc4a] {\n  text-align: center;\n  padding-top: 40px;\n}\n.profile .layout .picture .overlay[data-v-6fc6fc4a] {\n  position: absolute;\n  top: 50px;\n  opacity: 0;\n  transition: 0.5s ease;\n  background-color: #008cba;\n  width: 200px !important;\n  height: 200px !important;\n  border-radius: 50% !important;\n  margin: 0 auto;\n  border: unset;\n}\n.profile .layout .picture .text-msg[data-v-6fc6fc4a] {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.profile .layout .picture img[data-v-6fc6fc4a] {\n  width: 200px;\n  border-radius: 50%;\n  height: 200px;\n  border: 5px solid #1d8efa;\n}\n.profile .layout .picture .text h1[data-v-6fc6fc4a] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding-top: 1rem;\n  text-transform: capitalize;\n}\n.profile .layout .picture .text p[data-v-6fc6fc4a] {\n  font-size: 14px;\n}\n@media (max-width: 991px) {\n.small-screen-padding[data-v-6fc6fc4a] {\n    margin-top: 24px;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/model/Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/model/Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/model/Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/model/Edit.vue?vue&type=template&id=6fc6fc4a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/model/Edit.vue?vue&type=template&id=6fc6fc4a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "profile profile-pic" },
    [
      _c("bread-crumb", { attrs: { bread: _vm.bread } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "layout" },
        [
          _c("a-row", { staticClass: "title" }, [
            _c("h1", [_vm._v("Edit Model")])
          ]),
          _vm._v(" "),
          _c(
            "a-row",
            { attrs: { gutter: 16 } },
            [
              _c(
                "a-col",
                {
                  staticClass: "small-screen-padding",
                  attrs: { md: { span: 24 }, lg: { span: 18 } }
                },
                [
                  _c(
                    "div",
                    { staticClass: "info" },
                    [
                      _c(
                        "a-form",
                        {
                          attrs: {
                            form: _vm.form,
                            layout: _vm.formLayout,
                            hideRequiredMark: _vm.hideRequiredMark
                          }
                        },
                        [
                          _c(
                            "a-row",
                            { attrs: { gutter: 16 } },
                            [
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Model" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "name",
                                              {
                                                initialValue: _vm.name,
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Brand is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "[ 'name',{initialValue:name,rules: [\n                                            {\n                                                required: true,\n                                                message: 'Brand is required!'\n                                            }\n                                        ]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Brand" } },
                                    [
                                      _c(
                                        "a-select",
                                        {
                                          directives: [
                                            {
                                              name: "decorator",
                                              rawName: "v-decorator",
                                              value: [
                                                "brand",
                                                {
                                                  initialValue: _vm.brand,
                                                  rules: [
                                                    {
                                                      required: true,
                                                      message:
                                                        "Must have to select a brand!"
                                                    }
                                                  ]
                                                }
                                              ],
                                              expression:
                                                "['brand',{initialValue:brand,rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a brand!'\n                                        }\n                                    ]}]"
                                            }
                                          ],
                                          attrs: {
                                            optionFilterProp: "children",
                                            showSearch: ""
                                          }
                                        },
                                        [
                                          _c(
                                            "a-select-option",
                                            {
                                              key: "",
                                              attrs: {
                                                selected: "",
                                                disabled: ""
                                              }
                                            },
                                            [_vm._v("Select")]
                                          ),
                                          _vm._v(" "),
                                          _vm._l(_vm.brands, function(
                                            item,
                                            index
                                          ) {
                                            return _c(
                                              "a-select-option",
                                              {
                                                key: item.id,
                                                attrs: { value: item.slug }
                                              },
                                              [_vm._v(_vm._s(item.name))]
                                            )
                                          })
                                        ],
                                        2
                                      )
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
                            "a-form-item",
                            [
                              _c(
                                "a-button",
                                {
                                  attrs: { type: "primary" },
                                  on: { click: _vm.save }
                                },
                                [_vm._v("Update")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
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

/***/ "./resources/js/components/model/Edit.vue":
/*!************************************************!*\
  !*** ./resources/js/components/model/Edit.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_6fc6fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=6fc6fc4a&scoped=true& */ "./resources/js/components/model/Edit.vue?vue&type=template&id=6fc6fc4a&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/model/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_id_6fc6fc4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true& */ "./resources/js/components/model/Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_6fc6fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_6fc6fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6fc6fc4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/model/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/model/Edit.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/model/Edit.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/model/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/model/Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/model/Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_6fc6fc4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/model/Edit.vue?vue&type=style&index=0&id=6fc6fc4a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_6fc6fc4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_6fc6fc4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_6fc6fc4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_6fc6fc4a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/model/Edit.vue?vue&type=template&id=6fc6fc4a&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/model/Edit.vue?vue&type=template&id=6fc6fc4a&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6fc6fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=6fc6fc4a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/model/Edit.vue?vue&type=template&id=6fc6fc4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6fc6fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_6fc6fc4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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