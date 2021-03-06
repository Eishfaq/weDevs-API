(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SoldAction.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action/SoldAction.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
    this.view = "/auth/cars/ongoing/view/" + this.row.id + "?type=sold";
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SoldAction.vue?vue&type=template&id=0beeb4f0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/action/SoldAction.vue?vue&type=template&id=0beeb4f0&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "action-icon" }, [
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
                  _vm._v("\n                        View\n                    ")
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
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/action/SoldAction.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/action/SoldAction.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SoldAction_vue_vue_type_template_id_0beeb4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SoldAction.vue?vue&type=template&id=0beeb4f0&scoped=true& */ "./resources/js/components/action/SoldAction.vue?vue&type=template&id=0beeb4f0&scoped=true&");
/* harmony import */ var _SoldAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SoldAction.vue?vue&type=script&lang=js& */ "./resources/js/components/action/SoldAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SoldAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SoldAction_vue_vue_type_template_id_0beeb4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SoldAction_vue_vue_type_template_id_0beeb4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0beeb4f0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/action/SoldAction.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/action/SoldAction.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/action/SoldAction.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoldAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SoldAction.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SoldAction.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SoldAction_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/action/SoldAction.vue?vue&type=template&id=0beeb4f0&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/action/SoldAction.vue?vue&type=template&id=0beeb4f0&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoldAction_vue_vue_type_template_id_0beeb4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SoldAction.vue?vue&type=template&id=0beeb4f0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/action/SoldAction.vue?vue&type=template&id=0beeb4f0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoldAction_vue_vue_type_template_id_0beeb4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SoldAction_vue_vue_type_template_id_0beeb4f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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