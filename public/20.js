(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ongoing/View.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ongoing/View.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['soldId'],
  data: function data() {
    return {
      bread: {
        active: {
          name: "View"
        },
        child: ""
      },
      carData: {},
      paymentHistory: [],
      totalPayment: 0,
      duePayment: 0,
      car_id: "",
      image1: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
      setChild: {},
      paper: false
    };
  },
  created: function created() {
    this.getCarData();
  },
  mounted: function mounted() {
    if (this.$route.query.type === "ongoing") {
      this.setChild.name = "Ongoing Sell";
      this.setChild.link = "/auth/cars/ongoing";
    } else if (this.$route.query.type === "sold") {
      this.setChild.name = "Sold Cars";
      this.setChild.link = "/auth/cars/sold";
    }

    this.bread.child = this.setChild;
  },
  methods: {
    callback: function callback(key) {
      console.log(key);
    },
    getCarData: function getCarData() {
      var instance = this;
      instance.axiosGet('cars/sold/view/' + instance.soldId, function (response) {
        instance.carData = response.soldCar;
        instance.car_id = response.soldCar.car_id;
        instance.paymentHistory = response.paymentHistory;
        instance.totalPayment = response.totalPayment;
        instance.duePayment = response.soldCar.car_price - response.totalPayment;
        instance.image1 = instance.mainPath + 'images/uploads/' + response.soldCar.image_one;
        instance.paper = response.paper;
        console.log(response.paper);

        if (response.soldCar.image_two) {
          instance.image2 = instance.mainPath + 'images/uploads/' + response.soldCar.image_two;
        }

        if (response.soldCar.image_three) {
          instance.image3 = instance.mainPath + 'images/uploads/' + response.soldCar.image_three;
        }

        if (response.soldCar.image_four) {
          instance.image4 = instance.mainPath + 'images/uploads/' + response.soldCar.image_four;
        }

        if (response.soldCar.image_five) {
          instance.image5 = instance.mainPath + 'images/uploads/' + response.soldCar.image_five;
        }

        if (response.soldCar.image_six) {
          instance.image6 = instance.mainPath + 'images/uploads/' + response.soldCar.image_six;
        }
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ongoing/View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ongoing/View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title[data-v-41fa4824] {\n  padding: 10px 10px 0px;\n  background: #fff;\n  margin: 5px 0;\n}\n.profile .layout .picture[data-v-41fa4824],\n.profile .layout .info[data-v-41fa4824] {\n  background: #fff;\n  padding: 24px;\n}\n.profile .layout .ant-upload[data-v-41fa4824] {\n  border-radius: unset !important;\n}\n.profile .layout .picture[data-v-41fa4824] {\n  text-align: center;\n  padding-top: 40px;\n}\n.profile .layout .picture .text-msg[data-v-41fa4824] {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.profile .layout .picture img[data-v-41fa4824] {\n  width: 200px;\n  height: 200px;\n  border: 5px solid #1d8efa;\n}\n.profile .layout .picture .text h1[data-v-41fa4824] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding-top: 1rem;\n  text-transform: capitalize;\n}\n.profile .layout .picture .text p[data-v-41fa4824] {\n  font-size: 14px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ongoing/View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ongoing/View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ongoing/View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ongoing/View.vue?vue&type=template&id=41fa4824&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ongoing/View.vue?vue&type=template&id=41fa4824&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
            _c("h1", [_vm._v("Sale Details")])
          ]),
          _vm._v(" "),
          _c(
            "a-card",
            [
              _c(
                "a-row",
                { attrs: { gutter: 16 } },
                [
                  _c(
                    "a-tabs",
                    {
                      attrs: { "default-active-key": "1" },
                      on: { change: _vm.callback }
                    },
                    [
                      _c(
                        "a-tab-pane",
                        { key: "1", attrs: { tab: "Car Basic Info" } },
                        [
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Present Color:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.present_color) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Past Color:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.past_color) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Category:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.category) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Model Year:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.model_year) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Registration Number:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.registration_number) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Chassis Number:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.chassis_number) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Engine Number (Paper):")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.engine_no_paper) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Engine Number (Car):")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.engine_no_car) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Registration Date:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.registration_date) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Registration Year:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.registration_year) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Engine Type:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.engine_type) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Tyre Size:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.tyre_size) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Battery Size:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.battery_size) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("CNG Capacity:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.cng_capacity) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Octan Capacity:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.octane_capacity) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Transmission:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.transmission) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Body Type:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.body_type) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Fuel Type:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.fuel_type) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Miles Before:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.miles_before) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Miles After:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.miles_after) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "24" } }, [
                            _c("b", [_vm._v("Specialization:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.specialization) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "24" } }, [
                            _c("b", [_vm._v("Description:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.description) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Created At:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.created_at) +
                                "\n                        "
                            )
                          ]),
                          _vm._v(" "),
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("b", [_vm._v("Updated At:")]),
                            _vm._v(
                              " " +
                                _vm._s(_vm.carData.updated_at) +
                                "\n                        "
                            )
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-tab-pane",
                        { key: "2", attrs: { tab: "Car Photos" } },
                        [
                          _c("a-col", { attrs: { span: "8" } }, [
                            _c("img", {
                              attrs: {
                                src: _vm.image1,
                                alt: "one",
                                width: "200",
                                height: "200"
                              }
                            })
                          ]),
                          _vm._v(" "),
                          _vm.image2
                            ? _c("a-col", { attrs: { span: "8" } }, [
                                _c("img", {
                                  attrs: {
                                    src: _vm.image2,
                                    alt: "two",
                                    width: "200",
                                    height: "200"
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.image3
                            ? _c("a-col", { attrs: { span: "8" } }, [
                                _c("img", {
                                  attrs: {
                                    src: _vm.image3,
                                    alt: "three",
                                    width: "200",
                                    height: "200"
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.image4
                            ? _c("a-col", { attrs: { span: "8" } }, [
                                _c("img", {
                                  attrs: {
                                    src: _vm.image4,
                                    alt: "four",
                                    width: "200",
                                    height: "200"
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.image5
                            ? _c("a-col", { attrs: { span: "8" } }, [
                                _c("img", {
                                  attrs: {
                                    src: _vm.image5,
                                    alt: "five",
                                    width: "200",
                                    height: "200"
                                  }
                                })
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.image6
                            ? _c("a-col", { attrs: { span: "8" } }, [
                                _c("img", {
                                  attrs: {
                                    src: _vm.image6,
                                    alt: "six",
                                    width: "200",
                                    height: "200"
                                  }
                                })
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-tab-pane",
                        { key: "3", attrs: { tab: "Price Details" } },
                        [
                          _c(
                            "a-row",
                            [
                              _c("h3", [_vm._v("Car Payment Details")]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "24" } }, [
                                _c("b", [_vm._v("Car Price:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.car_price) +
                                    " BDT\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "24" } }, [
                                _c("b", [_vm._v("Total Paid:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.totalPayment) +
                                    " BDT\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "24" } }, [
                                _c("b", [_vm._v("Due Payment:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.duePayment) +
                                    " BDT\n                            "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("br"),
                          _vm._v(" "),
                          _c(
                            "a-row",
                            [
                              _c("h3", [_vm._v("Payment History")]),
                              _vm._v(" "),
                              _vm._l(_vm.paymentHistory, function(
                                history,
                                index
                              ) {
                                return _c(
                                  "div",
                                  { key: index, staticClass: "each-payment" },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s((index += 1)) +
                                        " )\n                                "
                                    ),
                                    _c("b", [_vm._v("Amount:")]),
                                    _vm._v(
                                      " " +
                                        _vm._s(history.amount) +
                                        " BDT, Paid on\n                                "
                                    ),
                                    _c("b", [_vm._v(_vm._s(history.created))])
                                  ]
                                )
                              })
                            ],
                            2
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-tab-pane",
                        { key: "4", attrs: { tab: "Buyer Info" } },
                        [
                          _c(
                            "a-row",
                            [
                              _c("h3", [_vm._v("Buyer Information")]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Name:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.buyer_name) +
                                    "\n                           "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Gurdian:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.buyer_guardian) +
                                    "\n                           "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Phone:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.buyer_phone) +
                                    "\n                           "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Gender:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.buyer_gender) +
                                    "\n                           "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("NID:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.buyer_nid) +
                                    "\n                           "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Address:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.buyer_address) +
                                    "\n                           "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-tab-pane",
                        { key: "5", attrs: { tab: "Seller Info" } },
                        [
                          _c(
                            "a-row",
                            [
                              _c("h3", [_vm._v("Seller Information")]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Name:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.seller_name) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Gurdian:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.seller_guardian) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Phone:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.seller_phone) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Gender:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.seller_gender) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("NID:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.seller_nid) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Address:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.seller_address) +
                                    "\n                            "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-tab-pane",
                        { key: "6", attrs: { tab: "Owner Info" } },
                        [
                          _c(
                            "a-row",
                            [
                              _c("h3", [_vm._v("Owner Information")]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Name:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.owner_name) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Gurdian:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.owner_guardian) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Phone:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.owner_phone) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Gender:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.owner_gender) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("NID:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.owner_nid) +
                                    "\n                            "
                                )
                              ]),
                              _vm._v(" "),
                              _c("a-col", { attrs: { span: "8" } }, [
                                _c("b", [_vm._v("Address:")]),
                                _vm._v(
                                  " " +
                                    _vm._s(_vm.carData.owner_address) +
                                    "\n                            "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-tab-pane",
                        { key: "7", attrs: { tab: "Delivery Info" } },
                        [
                          _c(
                            "a-row",
                            [
                              _c("h3", [_vm._v("Delivery Date")]),
                              _vm._v(" "),
                              _c("a-col", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.carData.sale_date) +
                                    "\n                            "
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-tab-pane",
                        { key: "8", attrs: { tab: "Papers Info" } },
                        [
                          _c("paper-upload", {
                            attrs: { papers: _vm.paper, car_id: _vm.car_id }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-tab-pane",
                        { key: "9", attrs: { tab: "Haat Works" } },
                        [
                          _c(
                            "a-row",
                            [
                              _c("h3", [_vm._v("Haat Works")]),
                              _vm._v(" "),
                              _c("a-col", [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.carData.haat_works) +
                                    "\n                            "
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

/***/ "./resources/js/components/ongoing/View.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ongoing/View.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_41fa4824_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=41fa4824&scoped=true& */ "./resources/js/components/ongoing/View.vue?vue&type=template&id=41fa4824&scoped=true&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/ongoing/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _View_vue_vue_type_style_index_0_id_41fa4824_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true& */ "./resources/js/components/ongoing/View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_41fa4824_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_41fa4824_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "41fa4824",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ongoing/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ongoing/View.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ongoing/View.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ongoing/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ongoing/View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/ongoing/View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_41fa4824_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ongoing/View.vue?vue&type=style&index=0&id=41fa4824&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_41fa4824_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_41fa4824_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_41fa4824_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_style_index_0_id_41fa4824_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/ongoing/View.vue?vue&type=template&id=41fa4824&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/ongoing/View.vue?vue&type=template&id=41fa4824&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_41fa4824_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=41fa4824&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ongoing/View.vue?vue&type=template&id=41fa4824&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_41fa4824_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_41fa4824_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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