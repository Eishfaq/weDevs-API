(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Add.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/car/Add.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




function getBase64(img, callback) {
  var reader = new FileReader();
  reader.addEventListener("load", function () {
    return callback(reader.result);
  });
  reader.readAsDataURL(img);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [_mixin_Helper__WEBPACK_IMPORTED_MODULE_0__["Common"]],
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
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
      loading6: false,
      imageUrl: "",
      imageUrl2: "",
      imageUrl3: "",
      imageUrl4: "",
      imageUrl5: "",
      imageUrl6: "",
      image: "",
      image2: "",
      image3: "",
      image4: "",
      image5: "",
      image6: "",
      demo: "",
      brands: [],
      models: [],
      bread: {
        active: {
          name: "New Car"
        },
        child: {
          name: "Cars",
          link: "/auth/cars"
        }
      }
    };
  },
  created: function created() {
    this.demo = this.publicPath + 'demo';
    this.getBrands();
  },
  methods: {
    save: function save() {
      var _this = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this;
          instance.axiosPost("cars/store", {
            brand: values.brand,
            model: values.model,
            asking_price: values.asking_price,
            present_color: values.present_color,
            past_color: values.past_color,
            category: values.category,
            cc: values.cc,
            model_year: values.model_year,
            registration_year: values.registration_year,
            registration_number: values.registration_number,
            engine_no_paper: values.engine_no_paper,
            engine_no_car: values.engine_no_car,
            chassis_number: values.chassis_number,
            insurance_date: values.insurance_date,
            fitness_date: values.fitness_date,
            registration_date: values.registration_date,
            tyre_size: values.tyre_size,
            octane_capacity: values.octane_capacity,
            fuel_type: values.fuel_type,
            specialization: values.specialization,
            route_permit: values.route_permit,
            engine_type: values.engine_type,
            cng_capacity: values.cng_capacity,
            battery_size: values.battery_size,
            body_type: values.body_type,
            transmission: values.transmission,
            miles_before: values.miles_before,
            miles_after: values.miles_after,
            description: values.description,
            image: instance.images,
            image2: instance.images2,
            image3: instance.images3,
            image4: instance.images4,
            image5: instance.images5,
            image6: instance.images6
          }, function (response) {
            instance.brand = "";
            instance.model = "";
            instance.asking_price = "";
            instance.present_color = "";
            instance.past_color = "";
            instance.category = "";
            instance.cc = "";
            instance.model_year = "";
            instance.registration_year = "";
            instance.registration_number = "";
            instance.engine_no_paper = "";
            instance.engine_no_car = "";
            instance.chassis_number = "";
            instance.insurance_date = "";
            instance.fitness_date = "";
            instance.registration_date = "";
            instance.tyre_size = "";
            instance.octance_capacity = "";
            instance.fuel_type = "";
            instance.specialization = "";
            instance.route_permit = "";
            instance.engine_type = "";
            instance.cng_capacity = "";
            instance.battery_size = "";
            instance.body_type = "";
            instance.transmission = "";
            instance.miles_before = "";
            instance.miles_after = "";
            instance.description = "";
            instance.images = "";
            instance.images2 = "";
            instance.images3 = "";
            instance.images4 = "";
            instance.images5 = "";
            instance.images6 = "";
            instance.imageUrl = "";
            instance.imageUrl2 = "";
            instance.imageUrl3 = "";
            instance.imageUrl4 = "";
            instance.imageUrl5 = "";
            instance.imageUrl6 = "";
            instance.form.resetFields();
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    getBrands: function getBrands() {
      var instance = this;
      instance.axiosGet('brands/all', function (response) {
        instance.brands = response.data;
      }, function (error) {
        instance.errorNoti(error);
      });
    },
    loadCarModels: function loadCarModels(value) {
      var instance = this;
      instance.axiosGet('get-models-by-brand/' + value, function (response) {
        instance.models = response.data;
      }, function (error) {
        instance.errorNoti(error);
      });
    },
    handleChange: function handleChange(info) {
      var _this2 = this;

      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this2.imageUrl = imageUrl;
          _this2.images = imageUrl;
          _this2.loading = false;
        });
      }
    },
    handleChange2: function handleChange2(info) {
      var _this3 = this;

      if (info.file.status === "uploading") {
        this.loading2 = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this3.imageUrl2 = imageUrl;
          _this3.images2 = imageUrl;
          _this3.loading2 = false;
        });
      }
    },
    handleChange3: function handleChange3(info) {
      var _this4 = this;

      if (info.file.status === "uploading") {
        this.loading3 = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this4.imageUrl3 = imageUrl;
          _this4.images3 = imageUrl;
          _this4.loading3 = false;
        });
      }
    },
    handleChange4: function handleChange4(info) {
      var _this5 = this;

      if (info.file.status === "uploading") {
        this.loading4 = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this5.imageUrl4 = imageUrl;
          _this5.images4 = imageUrl;
          _this5.loading4 = false;
        });
      }
    },
    handleChange5: function handleChange5(info) {
      var _this6 = this;

      if (info.file.status === "uploading") {
        this.loading5 = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this6.imageUrl5 = imageUrl;
          _this6.images5 = imageUrl;
          _this6.loading5 = false;
        });
      }
    },
    handleChange6: function handleChange6(info) {
      var _this7 = this;

      if (info.file.status === "uploading") {
        this.loading6 = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this7.imageUrl6 = imageUrl;
          _this7.images6 = imageUrl;
          _this7.loading6 = false;
        });
      }
    },
    beforeUpload: function beforeUpload(file) {
      var isJPG = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg";

      if (!isJPG) {
        this.$message.error("You can only upload JPG or file!");
      }

      var isLt2M = file.size / 1024 <= 1000;

      if (!isLt2M) {
        this.$message.error("Image must equal or smaller than 1MB!");
      }

      return isJPG && isLt2M;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/car/Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title[data-v-6027fb6a] {\n  padding: 10px 10px 0px;\n  background: #fff;\n  margin: 5px 0;\n}\n.profile .layout .picture[data-v-6027fb6a],\n.profile .layout .info[data-v-6027fb6a] {\n  background: #fff;\n  padding: 24px;\n}\n.profile .layout .ant-upload[data-v-6027fb6a] {\n  border-radius: unset !important;\n}\n.profile .layout .picture[data-v-6027fb6a] {\n  text-align: center;\n  padding-top: 40px;\n}\n.profile .layout .picture .text-msg[data-v-6027fb6a] {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.profile .layout .picture img[data-v-6027fb6a] {\n  width: 200px;\n  height: 200px;\n  border: 5px solid #1d8efa;\n}\n.profile .layout .picture .text h1[data-v-6027fb6a] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding-top: 1rem;\n  text-transform: capitalize;\n}\n.profile .layout .picture .text p[data-v-6027fb6a] {\n  font-size: 14px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/car/Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Add.vue?vue&type=template&id=6027fb6a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/car/Add.vue?vue&type=template&id=6027fb6a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
            _c("h1", [_vm._v("Create Car")])
          ]),
          _vm._v(" "),
          _c(
            "a-row",
            { attrs: { gutter: 16 } },
            [
              _c("a-col", { attrs: { md: { span: 12 }, lg: { span: 4 } } }, [
                _c(
                  "div",
                  { staticClass: "pro" },
                  [
                    [
                      _c(
                        "a-upload",
                        {
                          staticClass: "avatar-uploader",
                          attrs: {
                            name: "image",
                            listType: "picture-card",
                            showUploadList: false,
                            action: _vm.demo,
                            beforeUpload: _vm.beforeUpload
                          },
                          on: { change: _vm.handleChange }
                        },
                        [
                          _vm.imageUrl
                            ? _c("img", {
                                attrs: {
                                  src: _vm.imageUrl,
                                  alt: "avatar",
                                  width: "100",
                                  height: "100"
                                }
                              })
                            : _c(
                                "div",
                                [
                                  _c("a-icon", {
                                    attrs: {
                                      type: _vm.loading ? "loading" : "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "ant-upload-text" },
                                    [_vm._v("Upload")]
                                  )
                                ],
                                1
                              ),
                          _vm._v(" "),
                          _c("div", { staticClass: "overlay" }, [
                            _c("div", { staticClass: "text-msg" }, [
                              _vm._v("Upload")
                            ])
                          ])
                        ]
                      )
                    ]
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("a-col", { attrs: { md: { span: 12 }, lg: { span: 4 } } }, [
                _c(
                  "div",
                  { staticClass: "pro" },
                  [
                    [
                      _c(
                        "a-upload",
                        {
                          staticClass: "avatar-uploader",
                          attrs: {
                            name: "image2",
                            listType: "picture-card",
                            showUploadList: false,
                            action: _vm.demo,
                            beforeUpload: _vm.beforeUpload
                          },
                          on: { change: _vm.handleChange2 }
                        },
                        [
                          _vm.imageUrl2
                            ? _c("img", {
                                attrs: {
                                  src: _vm.imageUrl2,
                                  alt: "avatar",
                                  width: "100",
                                  height: "100"
                                }
                              })
                            : _c(
                                "div",
                                [
                                  _c("a-icon", {
                                    attrs: {
                                      type: _vm.loading2 ? "loading" : "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "ant-upload-text" },
                                    [_vm._v("Upload")]
                                  )
                                ],
                                1
                              ),
                          _vm._v(" "),
                          _c("div", { staticClass: "overlay" }, [
                            _c("div", { staticClass: "text-msg" }, [
                              _vm._v("Upload")
                            ])
                          ])
                        ]
                      )
                    ]
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("a-col", { attrs: { md: { span: 12 }, lg: { span: 4 } } }, [
                _c(
                  "div",
                  { staticClass: "pro" },
                  [
                    [
                      _c(
                        "a-upload",
                        {
                          staticClass: "avatar-uploader",
                          attrs: {
                            name: "image3",
                            listType: "picture-card",
                            showUploadList: false,
                            action: _vm.demo,
                            beforeUpload: _vm.beforeUpload
                          },
                          on: { change: _vm.handleChange3 }
                        },
                        [
                          _vm.imageUrl3
                            ? _c("img", {
                                attrs: {
                                  src: _vm.imageUrl3,
                                  alt: "avatar",
                                  width: "100",
                                  height: "100"
                                }
                              })
                            : _c(
                                "div",
                                [
                                  _c("a-icon", {
                                    attrs: {
                                      type: _vm.loading3 ? "loading" : "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "ant-upload-text" },
                                    [_vm._v("Upload")]
                                  )
                                ],
                                1
                              ),
                          _vm._v(" "),
                          _c("div", { staticClass: "overlay" }, [
                            _c("div", { staticClass: "text-msg" }, [
                              _vm._v("Upload")
                            ])
                          ])
                        ]
                      )
                    ]
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("a-col", { attrs: { md: { span: 12 }, lg: { span: 4 } } }, [
                _c(
                  "div",
                  { staticClass: "pro" },
                  [
                    [
                      _c(
                        "a-upload",
                        {
                          staticClass: "avatar-uploader",
                          attrs: {
                            name: "image4",
                            listType: "picture-card",
                            showUploadList: false,
                            action: _vm.demo,
                            beforeUpload: _vm.beforeUpload
                          },
                          on: { change: _vm.handleChange4 }
                        },
                        [
                          _vm.imageUrl4
                            ? _c("img", {
                                attrs: {
                                  src: _vm.imageUrl4,
                                  alt: "avatar",
                                  width: "100",
                                  height: "100"
                                }
                              })
                            : _c(
                                "div",
                                [
                                  _c("a-icon", {
                                    attrs: {
                                      type: _vm.loading4 ? "loading" : "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "ant-upload-text" },
                                    [_vm._v("Upload")]
                                  )
                                ],
                                1
                              ),
                          _vm._v(" "),
                          _c("div", { staticClass: "overlay" }, [
                            _c("div", { staticClass: "text-msg" }, [
                              _vm._v("Upload")
                            ])
                          ])
                        ]
                      )
                    ]
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("a-col", { attrs: { md: { span: 12 }, lg: { span: 4 } } }, [
                _c(
                  "div",
                  { staticClass: "pro" },
                  [
                    [
                      _c(
                        "a-upload",
                        {
                          staticClass: "avatar-uploader",
                          attrs: {
                            name: "image5",
                            listType: "picture-card",
                            showUploadList: false,
                            action: _vm.demo,
                            beforeUpload: _vm.beforeUpload
                          },
                          on: { change: _vm.handleChange5 }
                        },
                        [
                          _vm.imageUrl5
                            ? _c("img", {
                                attrs: {
                                  src: _vm.imageUrl5,
                                  alt: "avatar",
                                  width: "100",
                                  height: "100"
                                }
                              })
                            : _c(
                                "div",
                                [
                                  _c("a-icon", {
                                    attrs: {
                                      type: _vm.loading5 ? "loading" : "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "ant-upload-text" },
                                    [_vm._v("Upload")]
                                  )
                                ],
                                1
                              ),
                          _vm._v(" "),
                          _c("div", { staticClass: "overlay" }, [
                            _c("div", { staticClass: "text-msg" }, [
                              _vm._v("Upload")
                            ])
                          ])
                        ]
                      )
                    ]
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c("a-col", { attrs: { md: { span: 12 }, lg: { span: 4 } } }, [
                _c(
                  "div",
                  { staticClass: "pro" },
                  [
                    [
                      _c(
                        "a-upload",
                        {
                          staticClass: "avatar-uploader",
                          attrs: {
                            name: "image6",
                            listType: "picture-card",
                            showUploadList: false,
                            action: _vm.demo,
                            beforeUpload: _vm.beforeUpload
                          },
                          on: { change: _vm.handleChange6 }
                        },
                        [
                          _vm.imageUrl6
                            ? _c("img", {
                                attrs: {
                                  src: _vm.imageUrl6,
                                  alt: "avatar",
                                  width: "100",
                                  height: "100"
                                }
                              })
                            : _c(
                                "div",
                                [
                                  _c("a-icon", {
                                    attrs: {
                                      type: _vm.loading6 ? "loading" : "plus"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "ant-upload-text" },
                                    [_vm._v("Upload")]
                                  )
                                ],
                                1
                              ),
                          _vm._v(" "),
                          _c("div", { staticClass: "overlay" }, [
                            _c("div", { staticClass: "text-msg" }, [
                              _vm._v("Upload")
                            ])
                          ])
                        ]
                      )
                    ]
                  ],
                  2
                )
              ]),
              _vm._v(" "),
              _c(
                "a-col",
                {
                  staticClass: "small-screen-padding",
                  attrs: { md: { span: 24 }, lg: { span: 24 } }
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
                                                "['brand',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a brand!'\n                                        }\n                                    ]}]"
                                            }
                                          ],
                                          attrs: {
                                            optionFilterProp: "children",
                                            showSearch: ""
                                          },
                                          on: { change: _vm.loadCarModels }
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
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Model" } },
                                    [
                                      _c(
                                        "a-select",
                                        {
                                          directives: [
                                            {
                                              name: "decorator",
                                              rawName: "v-decorator",
                                              value: [
                                                "model",
                                                {
                                                  rules: [
                                                    {
                                                      required: true,
                                                      message:
                                                        "Must have to select a model!"
                                                    }
                                                  ]
                                                }
                                              ],
                                              expression:
                                                "['model',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a model!'\n                                        }\n                                    ]}]"
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
                                          _vm._l(_vm.models, function(
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
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Car Price" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "asking_price",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Car price is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['asking_price',{rules: [\n                                            {\n                                                required: true,\n                                                message: 'Car price is required!'\n                                            }\n                                        ]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Registration Year" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "registration_year",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Registration year is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['registration_year',{rules: [\n                                            {\n                                                required: true,\n                                                message: 'Registration year is required!'\n                                            }\n                                        ]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Present Color" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "present_color",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Present color is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['present_color',{rules: [\n                                            {\n                                                required: true,\n                                                message: 'Present color is required!'\n                                            }\n                                        ]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Past Color" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "past_color",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Past color is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['past_color',{rules: [{ required: true, message: 'Past color is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Category" } },
                                    [
                                      _c(
                                        "a-select",
                                        {
                                          directives: [
                                            {
                                              name: "decorator",
                                              rawName: "v-decorator",
                                              value: [
                                                "category",
                                                {
                                                  rules: [
                                                    {
                                                      required: true,
                                                      message:
                                                        "Must have to select a category!"
                                                    }
                                                  ]
                                                }
                                              ],
                                              expression:
                                                "['category',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a category!'\n                                        }\n                                    ]}]"
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
                                          _c(
                                            "a-select-option",
                                            { attrs: { value: "sedan" } },
                                            [_vm._v("Sedan")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a-select-option",
                                            { attrs: { value: "suv" } },
                                            [_vm._v("SUV")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a-select-option",
                                            { attrs: { value: "truck" } },
                                            [_vm._v("Truck")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a-select-option",
                                            { attrs: { value: "sports-car" } },
                                            [_vm._v("Sports Car")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a-select-option",
                                            { attrs: { value: "van" } },
                                            [_vm._v("Van")]
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
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "CC" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "cc",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message: "CC is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['cc',{rules: [{ required: true, message: 'CC is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Model Year" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "model_year",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Model year is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['model_year',{rules: [{ required: true, message: 'Model year is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Registration Number" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "registration_number",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Registration number is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['registration_number',{rules: [{ required: true, message: 'Registration number is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Engine No. Paper" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "engine_no_paper",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Engine number is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['engine_no_paper',{rules: [{ required: true, message: 'Engine number is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Engine No. Car" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "engine_no_car",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Engine number is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['engine_no_car',{rules: [{ required: true, message: 'Engine number is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Chassis Number" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "chassis_number",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Chassis number is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['chassis_number',{rules: [{ required: true, message: 'Chassis number is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Insurance Date" } },
                                    [
                                      _c("a-date-picker", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "insurance_date",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Insurance date is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['insurance_date',{rules: [{ required: true, message: 'Insurance date is required!'}]}]"
                                          }
                                        ]
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Fitness Date" } },
                                    [
                                      _c("a-date-picker", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "fitness_date",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Fitness date is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['fitness_date',{rules: [{ required: true, message: 'Fitness date is required!'}]}]"
                                          }
                                        ]
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Registration Date" } },
                                    [
                                      _c("a-date-picker", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "registration_date",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Registration date is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['registration_date',{rules: [{ required: true, message: 'Registration date is required!'}]}]"
                                          }
                                        ]
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Tyre Size" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "tyre_size",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Tyre size is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['tyre_size',{rules: [{ required: true, message: 'Tyre size is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Octane Capacity" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "octane_capacity",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Octane capacity is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['octane_capacity',{rules: [{ required: true, message: 'Octane capacity is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Fuel Type" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "fuel_type",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Fuel type is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['fuel_type',{rules: [{ required: true, message: 'Fuel type is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
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
                                    { attrs: { label: "Specialization" } },
                                    [
                                      _c("a-textarea", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "specialization",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Specialization is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['specialization',{rules: [{ required: true, message: 'Specialization is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Route Permit" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "route_permit",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Route permit is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['route_permit',{rules: [{ required: true, message: 'Route permit is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Engine Type" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "engine_type",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Engine type is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['engine_type',{rules: [{ required: true, message: 'Engine type is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "CNG Capacity" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "cng_capacity",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "CNG capacity is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['cng_capacity',{rules: [{ required: true, message: 'CNG capacity is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Battery Size" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "battery_size",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Battery size is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['battery_size',{rules: [{ required: true, message: 'Battery size is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Body Type" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "body_type",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Body type is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['body_type',{rules: [{ required: true, message: 'Body type is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Transmission" } },
                                    [
                                      _c(
                                        "a-select",
                                        {
                                          directives: [
                                            {
                                              name: "decorator",
                                              rawName: "v-decorator",
                                              value: [
                                                "transmission",
                                                {
                                                  rules: [
                                                    {
                                                      required: true,
                                                      message:
                                                        "Must have to select a Transmission!"
                                                    }
                                                  ]
                                                }
                                              ],
                                              expression:
                                                "['transmission',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a Transmission!'\n                                        }\n                                    ]}]"
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
                                          _c(
                                            "a-select-option",
                                            { attrs: { value: "auto" } },
                                            [_vm._v("Auto")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "a-select-option",
                                            { attrs: { value: "manual" } },
                                            [_vm._v("Manual")]
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
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Miles Before" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "miles_before",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Miles before is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['miles_before',{rules: [{ required: true, message: 'Miles before is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "a-col",
                                { attrs: { md: 12 } },
                                [
                                  _c(
                                    "a-form-item",
                                    { attrs: { label: "Miles After" } },
                                    [
                                      _c("a-input", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "miles_after",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Miles after is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['miles_after',{rules: [{ required: true, message: 'Miles after is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
                                      })
                                    ],
                                    1
                                  )
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
                                    { attrs: { label: "Description" } },
                                    [
                                      _c("a-textarea", {
                                        directives: [
                                          {
                                            name: "decorator",
                                            rawName: "v-decorator",
                                            value: [
                                              "description",
                                              {
                                                rules: [
                                                  {
                                                    required: true,
                                                    message:
                                                      "Description is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['description',{rules: [{ required: true, message: 'Description is required!'}]}]"
                                          }
                                        ],
                                        attrs: { type: "text" }
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
                          _c(
                            "a-form-item",
                            [
                              _c(
                                "a-button",
                                {
                                  attrs: { type: "primary" },
                                  on: { click: _vm.save }
                                },
                                [_vm._v("Save")]
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

/***/ "./resources/js/components/car/Add.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/car/Add.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Add_vue_vue_type_template_id_6027fb6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Add.vue?vue&type=template&id=6027fb6a&scoped=true& */ "./resources/js/components/car/Add.vue?vue&type=template&id=6027fb6a&scoped=true&");
/* harmony import */ var _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Add.vue?vue&type=script&lang=js& */ "./resources/js/components/car/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Add_vue_vue_type_style_index_0_id_6027fb6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true& */ "./resources/js/components/car/Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Add_vue_vue_type_template_id_6027fb6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Add_vue_vue_type_template_id_6027fb6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6027fb6a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/car/Add.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/car/Add.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/components/car/Add.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Add.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/car/Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/car/Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_6027fb6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Add.vue?vue&type=style&index=0&id=6027fb6a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_6027fb6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_6027fb6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_6027fb6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_style_index_0_id_6027fb6a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/car/Add.vue?vue&type=template&id=6027fb6a&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/car/Add.vue?vue&type=template&id=6027fb6a&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_6027fb6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Add.vue?vue&type=template&id=6027fb6a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Add.vue?vue&type=template&id=6027fb6a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_6027fb6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Add_vue_vue_type_template_id_6027fb6a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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