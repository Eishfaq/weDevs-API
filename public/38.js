(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/OngoingAction.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action/OngoingAction.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      visible: false,
      car_reg: "",
      car_price: "",
      total_paid: "",
      due: "",
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      view: ""
    };
  },
  mounted: function mounted() {
    this.view = "/auth/cars/ongoing/view/" + this.row.id + "?type=ongoing";
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
          instance.axiosGet('brands/delete/' + instance.row.id, function (response) {
            _app__WEBPACK_IMPORTED_MODULE_2__["bus"].$emit('refreshDatatable');
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    showModal: function showModal() {
      var instance = this;
      instance.axiosGet('payment/information/' + instance.row.id, function (response) {
        instance.visible = true;
        instance.car_reg = instance.row.registration_number;
        instance.car_price = instance.row.car_price;
        instance.total_paid = response.total;
        instance.due = response.due;
      }, function (error) {
        instance.errorNoti(error);
      });
    },
    handleOk: function handleOk(e) {
      this.visible = false;
    },
    save: function save() {
      var _this2 = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this2;
          instance.axiosPost('payment/update/' + instance.row.id, {
            amount: values.amount
          }, function (response) {
            instance.form.resetFields();
            instance.showModal();
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/OngoingAction.vue?vue&type=template&id=01f66623&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action/OngoingAction.vue?vue&type=template&id=01f66623&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        { staticClass: "center-align", attrs: { href: "javascript:" } },
        [
          _c(
            "router-link",
            { attrs: { to: _vm.view } },
            [
              _c(
                "a-tooltip",
                [
                  _c("template", { slot: "title" }, [
                    _vm._v(
                      "\n                        View\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("a-icon", { attrs: { type: "zoom-in" } })
                ],
                2
              )
            ],
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
          on: { click: _vm.showModal }
        },
        [
          _c(
            "a-tooltip",
            [
              _c("template", { slot: "title" }, [
                _vm._v("\n                    Payment\n                ")
              ]),
              _vm._v(" "),
              _c("a-icon", { attrs: { type: "dollar" } })
            ],
            2
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
            { attrs: { to: "" } },
            [
              _c(
                "a-tooltip",
                [
                  _c("template", { slot: "title" }, [
                    _vm._v(
                      "\n                        Invoice\n                    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("a-icon", { attrs: { type: "snippets" } })
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-modal",
        {
          attrs: { title: _vm.car_reg },
          on: { ok: _vm.handleOk },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c("p", [
            _c("b", [_vm._v("Car Price: ")]),
            _vm._v(_vm._s(_vm.car_price))
          ]),
          _vm._v(" "),
          _c("p", [
            _c("b", [_vm._v("Total Paid: ")]),
            _vm._v(_vm._s(_vm.total_paid))
          ]),
          _vm._v(" "),
          _c("p", [_c("b", [_vm._v("Due: ")]), _vm._v(_vm._s(_vm.due))]),
          _vm._v(" "),
          _c(
            "a-card",
            [
              _c("h1", [_vm._v("Pay Now")]),
              _vm._v(" "),
              _c(
                "a-form",
                { attrs: { form: _vm.form } },
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
                            { attrs: { label: "Payment Amount" } },
                            [
                              _c("a-input", {
                                directives: [
                                  {
                                    name: "decorator",
                                    rawName: "v-decorator",
                                    value: [
                                      "amount",
                                      {
                                        rules: [
                                          {
                                            required: true,
                                            message: "Amount is required!"
                                          }
                                        ]
                                      }
                                    ],
                                    expression:
                                      "['amount',{rules: [{ required: true, message: 'Amount is required!'}]}]"
                                  }
                                ],
                                attrs: { type: "number" }
                              })
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
                  _c("br"),
                  _vm._v(" "),
                  _c(
                    "a-form-item",
                    [
                      _c(
                        "a-button",
                        { attrs: { type: "primary" }, on: { click: _vm.save } },
                        [_vm._v("Next")]
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

/***/ "./resources/js/components/action/OngoingAction.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/action/OngoingAction.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OngoingAction_vue_vue_type_template_id_01f66623_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OngoingAction.vue?vue&type=template&id=01f66623&scoped=true& */ "./resources/js/components/action/OngoingAction.vue?vue&type=template&id=01f66623&scoped=true&");
/* harmony import */ var _OngoingAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OngoingAction.vue?vue&type=script&lang=js& */ "./resources/js/components/action/OngoingAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OngoingAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OngoingAction_vue_vue_type_template_id_01f66623_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OngoingAction_vue_vue_type_template_id_01f66623_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "01f66623",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/action/OngoingAction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/action/OngoingAction.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/action/OngoingAction.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OngoingAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./OngoingAction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/OngoingAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OngoingAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/action/OngoingAction.vue?vue&type=template&id=01f66623&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/action/OngoingAction.vue?vue&type=template&id=01f66623&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OngoingAction_vue_vue_type_template_id_01f66623_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./OngoingAction.vue?vue&type=template&id=01f66623&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/OngoingAction.vue?vue&type=template&id=01f66623&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OngoingAction_vue_vue_type_template_id_01f66623_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OngoingAction_vue_vue_type_template_id_01f66623_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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