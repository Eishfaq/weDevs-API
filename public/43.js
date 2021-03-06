(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
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
  data: function data() {
    return {
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      hideRequiredMark: true,
      formLayout: "vertical",
      isLoading: false,
      email: "",
      password: "",
      errMessage: ''
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          _this.isLoading = true;
          var instance = _this;
          instance.axiosPostWithoutToken('login', {
            email: values.email,
            password: values.password
          }, function (response) {
            localStorage.setItem("token", response.access_token);
            instance.redirect("/auth/dashboard");
          }, function (error) {
            instance.isLoading = false;
            instance.errorNoti('Wrong username or password!');
          }); // instance.axiosPostWithoutToken(
          //     "login",
          //     {
          //         phone: values.mobile,
          //         password: values.password,
          //     },
          //     function (response) {
          //         localStorage.setItem("token", response);
          //         instance.redirect("/dashboard");
          //     },
          //     function (error) {
          //         instance.isLoading = false;
          //         instance.errMessage = error.response.data.message;
          //     }
          // );
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e& ***!
  \********************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "login" }, [
    _c("div", { staticClass: "layout" }, [
      _c(
        "div",
        { staticClass: "layout-card" },
        [
          _c(
            "a-card",
            {
              staticClass: "auth-card-width",
              staticStyle: {
                "-webkit-box-shadow": "0 2px 16px -11px rgba(0, 0, 0, 0.5)"
              },
              attrs: { bordered: false }
            },
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
                    "a-col",
                    { attrs: { span: "24" } },
                    [
                      _c("a-form", [
                        _c("h1", [
                          _c("img", {
                            staticStyle: { width: "170px" },
                            attrs: {
                              src: _vm.mainPath + "images/logo.png",
                              alt: ""
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("Welcome to car haat")])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    {
                      staticStyle: { "margin-bottom": "12px" },
                      attrs: { span: "24" }
                    },
                    [
                      _vm.errMessage !== ""
                        ? _c("a-alert", {
                            attrs: { message: _vm.errMessage, type: "error" }
                          })
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { md: 24 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "Email" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "email",
                                  {
                                    initialValue: _vm.email,
                                    rules: [
                                      {
                                        required: true,
                                        message:
                                          "Please enter your email address"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['email', {initialValue:email,rules: [\n                                  {\n                                    required: true,\n                                    message: 'Please enter your email address',\n                                  }\n                                ]}]"
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
                        { attrs: { label: "Password" } },
                        [
                          _c("a-input", {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: [
                                  "password",
                                  {
                                    initialValue: _vm.password,
                                    rules: [
                                      {
                                        required: true,
                                        message: "Please enter your password"
                                      }
                                    ]
                                  }
                                ],
                                expression:
                                  "['password', {initialValue:password,rules: [ {\n                                    required: true,\n                                    message: 'Please enter your password',\n                                  },\n                                ]}]"
                              }
                            ],
                            attrs: { type: "password" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("a-col", { attrs: { span: "24" } }, [
                    _c(
                      "div",
                      { staticClass: "float-left login-submit-button" },
                      [
                        !_vm.isLoading
                          ? _c(
                              "a-button",
                              {
                                attrs: { type: "primary" },
                                on: { click: _vm.submit }
                              },
                              [_vm._v("Submit")]
                            )
                          : _c(
                              "a-button",
                              { attrs: { type: "primary", loading: "" } },
                              [_vm._v("Loading")]
                            )
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ }),

/***/ "./resources/js/views/auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/auth/Login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=46ec553e& */ "./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=46ec553e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/auth/Login.vue?vue&type=template&id=46ec553e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_46ec553e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);