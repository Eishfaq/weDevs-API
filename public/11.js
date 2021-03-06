(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/car/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      brand: "",
      model: "",
      asking_price: "",
      present_color: "",
      past_color: "",
      category: "",
      cc: "",
      model_year: "",
      registration_year: "",
      registration_number: "",
      engine_no_paper: "",
      engine_no_car: "",
      chassis_number: "",
      insurance_date: "",
      fitness_date: "",
      registration_date: "",
      tyre_size: "",
      octane_capacity: "",
      fuel_type: "",
      specialization: "",
      route_permit: "",
      engine_type: "",
      cng_capacity: "",
      battery_size: "",
      body_type: "",
      transmission: "",
      miles_before: "",
      miles_after: "",
      description: "",
      bread: {
        active: {
          name: "Edit Car"
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
    this.getData();
  },
  methods: {
    getData: function getData() {
      var instance = this;
      instance.axiosGet('cars/edit/' + instance.id, function (response) {
        instance.brand = response.data.brand;
        instance.model = response.data.model;
        instance.asking_price = response.data.asking_price;
        instance.present_color = response.data.present_color;
        instance.past_color = response.data.past_color;
        instance.category = response.data.category;
        instance.cc = response.data.cc;
        instance.model_year = response.data.model_year;
        instance.registration_year = response.data.registration_year;
        instance.registration_number = response.data.registration_number;
        instance.engine_no_paper = response.data.engine_no_paper;
        instance.engine_no_car = response.data.engine_no_car;
        instance.chassis_number = response.data.chassis_number;
        instance.insurance_date = response.data.insurance_date;
        instance.fitness_date = response.data.fitness_date;
        instance.registration_date = response.data.registration_date;
        instance.tyre_size = response.data.tyre_size;
        instance.octane_capacity = response.data.octane_capacity;
        instance.fuel_type = response.data.fuel_type;
        instance.specialization = response.data.specialization;
        instance.route_permit = response.data.route_permit;
        instance.engine_type = response.data.engine_type;
        instance.cng_capacity = response.data.cng_capacity;
        instance.battery_size = response.data.battery_size;
        instance.body_type = response.data.body_type;
        instance.transmission = response.data.transmission;
        instance.miles_before = response.data.miles_before;
        instance.miles_after = response.data.miles_after;
        instance.description = response.data.description;
        instance.image = response.data.image_one;
        instance.image2 = response.data.image_two;
        instance.image3 = response.data.image_three;
        instance.image4 = response.data.image_four;
        instance.image5 = response.data.image_five;
        instance.image6 = response.data.image_six;
        instance.imageUrl = "".concat(instance.mainPath, "images/uploads/").concat(response.data.image_one);
        instance.imageUrl2 = "".concat(instance.mainPath, "images/uploads/").concat(response.data.image_two);
        instance.imageUrl3 = "".concat(instance.mainPath, "images/uploads/").concat(response.data.image_three);
        instance.imageUrl4 = "".concat(instance.mainPath, "images/uploads/").concat(response.data.image_four);
        instance.imageUrl5 = "".concat(instance.mainPath, "images/uploads/").concat(response.data.image_five);
        instance.imageUrl6 = "".concat(instance.mainPath, "images/uploads/").concat(response.data.image_six);
      }, function (error) {
        instance.errorNoti(error);
      });
    },
    save: function save() {
      var _this = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this;
          instance.axiosPost("cars/update/" + instance.id, {
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
    },
    deleteImage: function deleteImage(imagedata) {
      var _this8 = this;

      var instance = this;
      sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
        title: "Want to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Delete Now"
      }).then(function (result) {
        var instance = _this8;

        if (result.value) {
          instance.axiosGet('cars/image/delete/' + instance.id + '/' + imagedata, function (response) {
            if (imagedata === "one") {
              instance.imageUrl = "";
              instance.image = "";
            }

            if (imagedata === "two") {
              instance.imageUrl2 = "";
              instance.image2 = "";
            }

            if (imagedata === "three") {
              instance.imageUrl3 = "";
              instance.image3 = "";
            }

            if (imagedata === "four") {
              instance.imageUrl4 = "";
              instance.image4 = "";
            }

            if (imagedata === "five") {
              instance.imageUrl5 = "";
              instance.image5 = "";
            }

            if (imagedata === "six") {
              instance.imageUrl6 = "";
              instance.image6 = "";
            }

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/car/Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title[data-v-4d4a2360] {\n  padding: 10px 10px 0px;\n  background: #fff;\n  margin: 5px 0;\n}\n.profile .layout .picture[data-v-4d4a2360],\n.profile .layout .info[data-v-4d4a2360] {\n  background: #fff;\n  padding: 24px;\n}\n.profile .layout .ant-upload[data-v-4d4a2360] {\n  border-radius: unset !important;\n}\n.profile .layout .picture[data-v-4d4a2360] {\n  text-align: center;\n  padding-top: 40px;\n}\n.profile .layout .picture .text-msg[data-v-4d4a2360] {\n  color: white;\n  font-size: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n}\n.profile .layout .picture img[data-v-4d4a2360] {\n  width: 200px;\n  height: 200px;\n  border: 5px solid #1d8efa;\n}\n.profile .layout .picture .text h1[data-v-4d4a2360] {\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding-top: 1rem;\n  text-transform: capitalize;\n}\n.profile .layout .picture .text p[data-v-4d4a2360] {\n  font-size: 14px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/car/Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Edit.vue?vue&type=template&id=4d4a2360&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/car/Edit.vue?vue&type=template&id=4d4a2360&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
            _c("h1", [_vm._v("Edit Car")])
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
                    _vm.image
                      ? [
                          _c("img", {
                            attrs: {
                              src: _vm.imageUrl,
                              alt: "avatar",
                              width: "100",
                              height: "100"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteImage("one")
                                }
                              }
                            },
                            [_c("a-icon", { attrs: { type: "delete" } })],
                            1
                          )
                        ]
                      : [
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
                    _vm.image2
                      ? [
                          _c("img", {
                            attrs: {
                              src: _vm.imageUrl2,
                              alt: "avatar",
                              width: "100",
                              height: "100"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteImage("two")
                                }
                              }
                            },
                            [_c("a-icon", { attrs: { type: "delete" } })],
                            1
                          )
                        ]
                      : [
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
                                          type: _vm.loading2
                                            ? "loading"
                                            : "plus"
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
                    _vm.image3
                      ? [
                          _c("img", {
                            attrs: {
                              src: _vm.imageUrl3,
                              alt: "avatar",
                              width: "100",
                              height: "100"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteImage("three")
                                }
                              }
                            },
                            [_c("a-icon", { attrs: { type: "delete" } })],
                            1
                          )
                        ]
                      : [
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
                                          type: _vm.loading3
                                            ? "loading"
                                            : "plus"
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
                    _vm.image4
                      ? [
                          _c("img", {
                            attrs: {
                              src: _vm.imageUrl4,
                              alt: "avatar",
                              width: "100",
                              height: "100"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteImage("four")
                                }
                              }
                            },
                            [_c("a-icon", { attrs: { type: "delete" } })],
                            1
                          )
                        ]
                      : [
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
                                          type: _vm.loading4
                                            ? "loading"
                                            : "plus"
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
                    _vm.image5
                      ? [
                          _c("img", {
                            attrs: {
                              src: _vm.imageUrl5,
                              alt: "avatar",
                              width: "100",
                              height: "100"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteImage("five")
                                }
                              }
                            },
                            [_c("a-icon", { attrs: { type: "delete" } })],
                            1
                          )
                        ]
                      : [
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
                                          type: _vm.loading5
                                            ? "loading"
                                            : "plus"
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
                    _vm.image6
                      ? [
                          _c("img", {
                            attrs: {
                              src: _vm.imageUrl6,
                              alt: "avatar",
                              width: "100",
                              height: "100"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              attrs: { href: "javascript:" },
                              on: {
                                click: function($event) {
                                  return _vm.deleteImage("six")
                                }
                              }
                            },
                            [_c("a-icon", { attrs: { type: "delete" } })],
                            1
                          )
                        ]
                      : [
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
                                          type: _vm.loading6
                                            ? "loading"
                                            : "plus"
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
                                                  initialValue: _vm.model,
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
                                                "['model',{initialValue:model,rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a model!'\n                                        }\n                                    ]}]"
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
                                                initialValue: _vm.asking_price,
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
                                              "['asking_price',{initialValue:asking_price,rules: [\n                                            {\n                                                required: true,\n                                                message: 'Car price is required!'\n                                            }\n                                        ]}]"
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
                                                initialValue:
                                                  _vm.registration_year,
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
                                              "['registration_year',{initialValue:registration_year,rules: [\n                                            {\n                                                required: true,\n                                                message: 'Registration year is required!'\n                                            }\n                                        ]}]"
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
                                                initialValue: _vm.present_color,
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
                                              "['present_color',{initialValue:present_color,rules: [\n                                            {\n                                                required: true,\n                                                message: 'Present color is required!'\n                                            }\n                                        ]}]"
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
                                                initialValue: _vm.past_color,
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
                                              "['past_color',{initialValue:past_color,rules: [{ required: true, message: 'Past color is required!'}]}]"
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
                                                  initialValue: _vm.category,
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
                                                "['category',{initialValue:category,rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a category!'\n                                        }\n                                    ]}]"
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
                                                initialValue: _vm.cc,
                                                rules: [
                                                  {
                                                    required: true,
                                                    message: "CC is required!"
                                                  }
                                                ]
                                              }
                                            ],
                                            expression:
                                              "['cc',{initialValue:cc,rules: [{ required: true, message: 'CC is required!'}]}]"
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
                                                initialValue: _vm.model_year,
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
                                              "['model_year',{initialValue:model_year,rules: [{ required: true, message: 'Model year is required!'}]}]"
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
                                                initialValue:
                                                  _vm.registration_number,
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
                                              "['registration_number',{initialValue:registration_number,rules: [{ required: true, message: 'Registration number is required!'}]}]"
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
                                                initialValue:
                                                  _vm.engine_no_paper,
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
                                              "['engine_no_paper',{initialValue:engine_no_paper,rules: [{ required: true, message: 'Engine number is required!'}]}]"
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
                                                initialValue: _vm.engine_no_car,
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
                                              "['engine_no_car',{initialValue:engine_no_car,rules: [{ required: true, message: 'Engine number is required!'}]}]"
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
                                                initialValue:
                                                  _vm.chassis_number,
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
                                              "['chassis_number',{initialValue:chassis_number,rules: [{ required: true, message: 'Chassis number is required!'}]}]"
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
                                                initialValue:
                                                  _vm.insurance_date,
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
                                              "['insurance_date',{initialValue:insurance_date,rules: [{ required: true, message: 'Insurance date is required!'}]}]"
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
                                                initialValue: _vm.fitness_date,
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
                                              "['fitness_date',{initialValue:fitness_date,rules: [{ required: true, message: 'Fitness date is required!'}]}]"
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
                                                initialValue:
                                                  _vm.registration_date,
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
                                              "['registration_date',{initialValue:registration_date,rules: [{ required: true, message: 'Registration date is required!'}]}]"
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
                                                initialValue: _vm.tyre_size,
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
                                              "['tyre_size',{initialValue:tyre_size,rules: [{ required: true, message: 'Tyre size is required!'}]}]"
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
                                                initialValue:
                                                  _vm.octane_capacity,
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
                                              "['octane_capacity',{initialValue:octane_capacity,rules: [{ required: true, message: 'Octane capacity is required!'}]}]"
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
                                                initialValue: _vm.fuel_type,
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
                                              "['fuel_type',{initialValue:fuel_type,rules: [{ required: true, message: 'Fuel type is required!'}]}]"
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
                                                initialValue:
                                                  _vm.specialization,
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
                                              "['specialization',{initialValue:specialization,rules: [{ required: true, message: 'Specialization is required!'}]}]"
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
                                                initialValue: _vm.route_permit,
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
                                              "['route_permit',{initialValue:route_permit,rules: [{ required: true, message: 'Route permit is required!'}]}]"
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
                                                initialValue: _vm.engine_type,
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
                                              "['engine_type',{initialValue:engine_type,rules: [{ required: true, message: 'Engine type is required!'}]}]"
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
                                                initialValue: _vm.cng_capacity,
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
                                              "['cng_capacity',{initialValue:cng_capacity,rules: [{ required: true, message: 'CNG capacity is required!'}]}]"
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
                                                initialValue: _vm.battery_size,
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
                                              "['battery_size',{initialValue:battery_size,rules: [{ required: true, message: 'Battery size is required!'}]}]"
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
                                                initialValue: _vm.body_type,
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
                                              "['body_type',{initialValue:body_type,rules: [{ required: true, message: 'Body type is required!'}]}]"
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
                                                  initialValue:
                                                    _vm.transmission,
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
                                                "['transmission',{initialValue:transmission,rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a Transmission!'\n                                        }\n                                    ]}]"
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
                                                initialValue: _vm.miles_before,
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
                                              "['miles_before',{initialValue:miles_before,rules: [{ required: true, message: 'Miles before is required!'}]}]"
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
                                                initialValue: _vm.miles_after,
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
                                              "['miles_after',{initialValue:miles_after,rules: [{ required: true, message: 'Miles after is required!'}]}]"
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
                                                initialValue: _vm.description,
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
                                              "['description',{initialValue:description,rules: [{ required: true, message: 'Description is required!'}]}]"
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

/***/ "./resources/js/components/car/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/car/Edit.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_4d4a2360_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=4d4a2360&scoped=true& */ "./resources/js/components/car/Edit.vue?vue&type=template&id=4d4a2360&scoped=true&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/components/car/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Edit_vue_vue_type_style_index_0_id_4d4a2360_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true& */ "./resources/js/components/car/Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_4d4a2360_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_4d4a2360_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4d4a2360",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/car/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/car/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/car/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/car/Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/car/Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4d4a2360_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Edit.vue?vue&type=style&index=0&id=4d4a2360&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4d4a2360_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4d4a2360_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4d4a2360_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_style_index_0_id_4d4a2360_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/car/Edit.vue?vue&type=template&id=4d4a2360&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/car/Edit.vue?vue&type=template&id=4d4a2360&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4d4a2360_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=4d4a2360&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/car/Edit.vue?vue&type=template&id=4d4a2360&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4d4a2360_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_4d4a2360_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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