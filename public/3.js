(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SellerAction.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action/SellerAction.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-barcode */ "./node_modules/vue-barcode/index.js");
/* harmony import */ var vue_barcode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_barcode__WEBPACK_IMPORTED_MODULE_3__);
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
  mixins: [_mixin_Helper__WEBPACK_IMPORTED_MODULE_0__["Common"]],
  props: ["row"],
  components: {
    barcode: vue_barcode__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      edit: "",
      view: "",
      car: "",
      visible: false
    };
  },
  mounted: function mounted() {
    this.edit = '/auth/seller/edit/' + this.row.id;
    this.view = '/auth/seller/edit/' + this.row.id;
    this.car = '/auth/seller/car/' + this.row.id;
  },
  methods: {
    deleteData: function deleteData() {
      var _this = this;

      var instance = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
        title: "Want to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete Now"
      }).then(function (result) {
        var instance = _this;

        if (result.value) {
          instance.axiosGet('sellers/delete/' + instance.row.id, function (response) {
            _app__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('refreshDatatable');
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    showModal: function showModal() {
      this.visible = true;
    },
    handleOk: function handleOk(e) {
      $('#print_area').printThis({
        importCSS: false,
        importStyle: true,
        loadCSS: ""
      });
    },
    handleCancel: function handleCancel(e) {
      this.visible = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action/SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.container-car[data-v-b93be61a] {\n    /*width: 1140px;*/\n    margin: auto;\n}\n.voucher[data-v-b93be61a] {\n    width: 100%;\n    padding: 15px;\n    display: block;\n}\n.header[data-v-b93be61a] {\n    display: inline-block;\n    padding: 5px;\n    width: 100%;\n    background: #133675;\n}\n.logo-car[data-v-b93be61a] {\n    float: left;\n    background: #ffffff;\n    padding:7px;\n}\n.contact[data-v-b93be61a] {\n    float: right;\n    display: inline-grid;\n    margin-right: 30px;\n    font-weight: bold;\n    color: #ffffff;\n}\n.container-car h3[data-v-b93be61a] {\n    text-transform: uppercase;\n}\n.content[data-v-b93be61a] {\n    display: inline-block;\n    width: 100%;\n}\n.left-panel[data-v-b93be61a] {\n    float: left;\n    padding: 30px;\n}\n.right-panel[data-v-b93be61a] {\n    float: right;\n    padding: 30px;\n}\n.left-panel h5[data-v-b93be61a],img[data-v-b93be61a] {\n    margin-bottom: 5px;\n    margin-left: 30px;\n}\n.right-panel h5[data-v-b93be61a] {\n    margin-bottom: 5px;\n    margin-right: 100px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action/SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SellerAction.vue?vue&type=template&id=b93be61a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action/SellerAction.vue?vue&type=template&id=b93be61a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "action-icon" },
    [
      _c(
        "a",
        {
          staticClass: "center-align",
          attrs: { href: "javascript:" },
          on: { click: _vm.showModal }
        },
        [_c("a-icon", { attrs: { type: "eye" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "center-align", attrs: { href: "javascript:" } },
        [
          _c(
            "router-link",
            { attrs: { to: _vm.edit } },
            [_c("a-icon", { attrs: { type: "edit" } })],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a",
        { staticClass: "center-align", attrs: { href: "javascript:" } },
        [
          _c(
            "router-link",
            { attrs: { to: _vm.car } },
            [_c("a-icon", { attrs: { type: "car" } })],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "center-align",
          attrs: { href: "javascript:" },
          on: { click: _vm.deleteData }
        },
        [_c("a-icon", { attrs: { type: "delete" } })],
        1
      ),
      _vm._v(" "),
      _c(
        "a-modal",
        {
          attrs: { title: "Press (OK) to Print Token", visible: _vm.visible },
          on: { ok: _vm.handleOk, cancel: _vm.handleCancel }
        },
        [
          _vm.visible
            ? _c("div", { attrs: { id: "print_area" } }, [
                _c("div", { staticClass: "container-car" }, [
                  _c("div", { staticClass: "voucher" }, [
                    _c("div", { staticClass: "header" }, [
                      _c("div", { staticClass: "logo-car" }, [
                        _c("img", {
                          attrs: {
                            src: _vm.mainPath + "images/logo.png",
                            alt: ""
                          }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "contact" }, [
                        _c("span", [_vm._v("www.carhaat.com.bd")]),
                        _vm._v(" "),
                        _c("h3", [_vm._v("Seller ID")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "content" }, [
                      _c("div", { staticClass: "left-panel" }, [
                        _c("img", {
                          attrs: {
                            src:
                              _vm.mainPath + "images/uploads/" + _vm.row.image,
                            alt: "seller",
                            width: "100",
                            height: "100"
                          }
                        }),
                        _vm._v(" "),
                        _c("h5", [
                          _vm._v("Name: "),
                          _c("span", [
                            _vm._v(
                              _vm._s(
                                _vm.row.first_name + " " + _vm.row.last_name
                              )
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("h5", [
                          _vm._v("Mobile: "),
                          _c("span", [_vm._v(_vm._s(_vm.row.phone))])
                        ]),
                        _vm._v(" "),
                        _c("h5", [
                          _vm._v("Expiry Date: "),
                          _c("span", [_vm._v(_vm._s(_vm.row.expiry_date))])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "right-panel" },
                        [
                          _c("h5", [
                            _vm._v("Seller ID: "),
                            _c("span", [_vm._v(_vm._s(_vm.row.seller_id))])
                          ]),
                          _vm._v(" "),
                          _c("h5", [
                            _vm._v("Date: "),
                            _c("span", [_vm._v(_vm._s(_vm.row.created_at))])
                          ]),
                          _vm._v(" "),
                          _c("barcode", { attrs: { value: _vm.row.seller_id } })
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            : _vm._e()
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/action/SellerAction.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/action/SellerAction.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SellerAction_vue_vue_type_template_id_b93be61a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SellerAction.vue?vue&type=template&id=b93be61a&scoped=true& */ "./resources/js/components/action/SellerAction.vue?vue&type=template&id=b93be61a&scoped=true&");
/* harmony import */ var _SellerAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SellerAction.vue?vue&type=script&lang=js& */ "./resources/js/components/action/SellerAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SellerAction_vue_vue_type_style_index_0_id_b93be61a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css& */ "./resources/js/components/action/SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SellerAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SellerAction_vue_vue_type_template_id_b93be61a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SellerAction_vue_vue_type_template_id_b93be61a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b93be61a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/action/SellerAction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/action/SellerAction.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/action/SellerAction.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SellerAction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SellerAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/action/SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/action/SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerAction_vue_vue_type_style_index_0_id_b93be61a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SellerAction.vue?vue&type=style&index=0&id=b93be61a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerAction_vue_vue_type_style_index_0_id_b93be61a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerAction_vue_vue_type_style_index_0_id_b93be61a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerAction_vue_vue_type_style_index_0_id_b93be61a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerAction_vue_vue_type_style_index_0_id_b93be61a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/action/SellerAction.vue?vue&type=template&id=b93be61a&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/action/SellerAction.vue?vue&type=template&id=b93be61a&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerAction_vue_vue_type_template_id_b93be61a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SellerAction.vue?vue&type=template&id=b93be61a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SellerAction.vue?vue&type=template&id=b93be61a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerAction_vue_vue_type_template_id_b93be61a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SellerAction_vue_vue_type_template_id_b93be61a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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