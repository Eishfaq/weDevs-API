(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/brta.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/brta.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["image", "value", "car_id"],
  data: function data() {
    return {
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      images: "",
      imageUrl: "",
      demo: "",
      loading: false
    };
  },
  created: function created() {
    this.demo = this.publicPath + 'demo';
  },
  methods: {
    handleChange: function handleChange(info) {
      var _this = this;

      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this.imageUrl = imageUrl;
          _this.images = imageUrl;
          _this.loading = false;
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
    save: function save() {
      var _this2 = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this2;
          instance.axiosPost('papers/create/brta', {
            car_id: instance.car_id,
            value: values.select_value,
            image: instance.images
          }, function (response) {
            _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    deleteImage: function deleteImage() {
      var instance = this;
      instance.axiosGet('papers/delete/brta/' + instance.car_id, function (response) {
        _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
        instance.images = "";
        instance.imageUrl = "";
        instance.successNoti(response.message);
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/fitness.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/fitness.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["image", "value", "car_id"],
  data: function data() {
    return {
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      images: "",
      imageUrl: "",
      demo: "",
      loading: false
    };
  },
  created: function created() {
    this.demo = this.publicPath + 'demo';
  },
  methods: {
    handleChange: function handleChange(info) {
      var _this = this;

      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this.imageUrl = imageUrl;
          _this.images = imageUrl;
          _this.loading = false;
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
    save: function save() {
      var _this2 = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this2;
          instance.axiosPost('papers/create/fitness', {
            car_id: instance.car_id,
            value: values.select_value,
            image: instance.images
          }, function (response) {
            _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    deleteImage: function deleteImage() {
      var instance = this;
      instance.axiosGet('papers/delete/fitness/' + instance.car_id, function (response) {
        _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
        instance.images = "";
        instance.imageUrl = "";
        instance.successNoti(response.message);
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/gd.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/gd.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["image", "value", "car_id"],
  data: function data() {
    return {
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      images: "",
      imageUrl: "",
      demo: "",
      loading: false
    };
  },
  created: function created() {
    this.demo = this.publicPath + 'demo';
  },
  methods: {
    handleChange: function handleChange(info) {
      var _this = this;

      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this.imageUrl = imageUrl;
          _this.images = imageUrl;
          _this.loading = false;
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
    save: function save() {
      var _this2 = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this2;
          instance.axiosPost('papers/create/gd', {
            car_id: instance.car_id,
            value: values.select_value,
            image: instance.images
          }, function (response) {
            _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    deleteImage: function deleteImage() {
      var instance = this;
      instance.axiosGet('papers/delete/gd/' + instance.car_id, function (response) {
        _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
        instance.images = "";
        instance.imageUrl = "";
        instance.successNoti(response.message);
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/insurance.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/insurance.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["image", "value", "car_id"],
  data: function data() {
    return {
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      images: "",
      imageUrl: "",
      demo: "",
      loading: false
    };
  },
  created: function created() {
    this.demo = this.publicPath + 'demo';
  },
  methods: {
    handleChange: function handleChange(info) {
      var _this = this;

      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this.imageUrl = imageUrl;
          _this.images = imageUrl;
          _this.loading = false;
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
    save: function save() {
      var _this2 = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this2;
          instance.axiosPost('papers/create/insurance', {
            car_id: instance.car_id,
            value: values.select_value,
            image: instance.images
          }, function (response) {
            _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    deleteImage: function deleteImage() {
      var instance = this;
      instance.axiosGet('papers/delete/insurance/' + instance.car_id, function (response) {
        _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
        instance.images = "";
        instance.imageUrl = "";
        instance.successNoti(response.message);
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/papers.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/papers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _brta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brta */ "./resources/js/components/papers/brta.vue");
/* harmony import */ var _registration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration */ "./resources/js/components/papers/registration.vue");
/* harmony import */ var _gd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gd */ "./resources/js/components/papers/gd.vue");
/* harmony import */ var _tax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tax */ "./resources/js/components/papers/tax.vue");
/* harmony import */ var _fitness__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fitness */ "./resources/js/components/papers/fitness.vue");
/* harmony import */ var _insurance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insurance */ "./resources/js/components/papers/insurance.vue");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route */ "./resources/js/components/papers/route.vue");
/* harmony import */ var _stamp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stamp */ "./resources/js/components/papers/stamp.vue");
/* harmony import */ var _seller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./seller */ "./resources/js/components/papers/seller.vue");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ['papers', 'car_id'],
  components: {
    brta: _brta__WEBPACK_IMPORTED_MODULE_1__["default"],
    registration: _registration__WEBPACK_IMPORTED_MODULE_2__["default"],
    gd: _gd__WEBPACK_IMPORTED_MODULE_3__["default"],
    tax: _tax__WEBPACK_IMPORTED_MODULE_4__["default"],
    fitness: _fitness__WEBPACK_IMPORTED_MODULE_5__["default"],
    insurance: _insurance__WEBPACK_IMPORTED_MODULE_6__["default"],
    route: _route__WEBPACK_IMPORTED_MODULE_7__["default"],
    stamp: _stamp__WEBPACK_IMPORTED_MODULE_8__["default"],
    seller: _seller__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      brta_image: "",
      brta_value: "",
      reg_image: "",
      reg_value: "",
      gd_image: "",
      gd_value: "",
      tax_image: "",
      tax_value: "",
      fitness_image: "",
      fitness_value: "",
      insurance_image: "",
      insurance_value: "",
      route_image: "",
      route_value: "",
      stamp_image: "",
      stamp_value: "",
      seller_image: "",
      seller_value: "",
      demo: "",
      images: ""
    };
  },
  created: function created() {
    this.getData();
    this.demo = this.publicPath + 'demo';
  },
  mounted: function mounted() {
    var instance = this;
    _app__WEBPACK_IMPORTED_MODULE_10__["bus"].$on('refreshGetData', function () {
      instance.getData();
    });
  },
  methods: {
    registerCar: function registerCar() {
      var instance = this;
      instance.axiosGet('papers/register/' + instance.car_id, function (response) {
        instance.paper = true;
        instance.successNoti(response.message);
      }, function (error) {
        instance.errorNoti(error);
      });
    },
    getData: function getData() {
      var instance = this;
      instance.axiosGet('papers/' + instance.car_id, function (response) {
        //brta
        if (response.data.brta) {
          var obj = JSON.parse(response.data.brta);
          instance.brta_image = obj.image;
          instance.brta_value = obj.value;
        } else {
          instance.brta_image = "";
          instance.brta_value = "";
        } //reg


        if (response.data.registration) {
          var reg = JSON.parse(response.data.registration);
          instance.reg_image = reg.image;
          instance.reg_value = reg.value;
        } else {
          instance.reg_image = "";
          instance.reg_value = "";
        } //gd


        if (response.data.gd_paper) {
          var gd = JSON.parse(response.data.gd_paper);
          instance.gd_image = gd.image;
          instance.gd_value = gd.value;
        } else {
          instance.gd_image = "";
          instance.gd_value = "";
        } //tax


        if (response.data.tax_token) {
          var tax = JSON.parse(response.data.tax_token);
          instance.tax_image = tax.image;
          instance.tax_value = tax.value;
        } else {
          instance.tax_image = "";
          instance.tax_value = "";
        } //fitness


        if (response.data.fitness) {
          var fit = JSON.parse(response.data.fitness);
          instance.fitness_image = fit.image;
          instance.fitness_value = fit.value;
        } else {
          instance.fitness_image = "";
          instance.fitness_value = "";
        } //insurance


        if (response.data.insurance) {
          var ins = JSON.parse(response.data.insurance);
          instance.insurance_image = ins.image;
          instance.insurance_value = ins.value;
        } else {
          instance.insurance_image = "";
          instance.insurance_value = "";
        } //route permit


        if (response.data.route_permit) {
          var route = JSON.parse(response.data.route_permit);
          instance.route_image = route.image;
          instance.route_value = route.value;
        } else {
          instance.route_image = "";
          instance.route_value = "";
        } //stamp


        if (response.data.stamp) {
          var stamp = JSON.parse(response.data.stamp);
          instance.stamp_image = stamp.image;
          instance.stamp_value = stamp.value;
        } else {
          instance.stamp_image = "";
          instance.stamp_value = "";
        } //seller


        if (response.data.seller_pic) {
          var seller = JSON.parse(response.data.seller_pic);
          instance.seller_image = seller.image;
          instance.seller_value = seller.value;
        } else {
          instance.seller_image = "";
          instance.seller_value = "";
        }
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/registration.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/registration.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["image", "value", "car_id"],
  data: function data() {
    return {
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      images: "",
      imageUrl: "",
      demo: "",
      loading: false
    };
  },
  created: function created() {
    this.demo = this.publicPath + 'demo';
  },
  methods: {
    handleChange: function handleChange(info) {
      var _this = this;

      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this.imageUrl = imageUrl;
          _this.images = imageUrl;
          _this.loading = false;
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
    save: function save() {
      var _this2 = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this2;
          instance.axiosPost('papers/create/registration', {
            car_id: instance.car_id,
            value: values.select_value,
            image: instance.images
          }, function (response) {
            _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    deleteImage: function deleteImage() {
      var instance = this;
      instance.axiosGet('papers/delete/registration/' + instance.car_id, function (response) {
        _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
        instance.images = "";
        instance.imageUrl = "";
        instance.successNoti(response.message);
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/route.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/route.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["image", "value", "car_id"],
  data: function data() {
    return {
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      images: "",
      imageUrl: "",
      demo: "",
      loading: false
    };
  },
  created: function created() {
    this.demo = this.publicPath + 'demo';
  },
  methods: {
    handleChange: function handleChange(info) {
      var _this = this;

      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this.imageUrl = imageUrl;
          _this.images = imageUrl;
          _this.loading = false;
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
    save: function save() {
      var _this2 = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this2;
          instance.axiosPost('papers/create/route', {
            car_id: instance.car_id,
            value: values.select_value,
            image: instance.images
          }, function (response) {
            _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    deleteImage: function deleteImage() {
      var instance = this;
      instance.axiosGet('papers/delete/route/' + instance.car_id, function (response) {
        _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
        instance.images = "";
        instance.imageUrl = "";
        instance.successNoti(response.message);
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/seller.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/seller.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["image", "value", "car_id"],
  data: function data() {
    return {
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      images: "",
      imageUrl: "",
      demo: "",
      loading: false
    };
  },
  created: function created() {
    this.demo = this.publicPath + 'demo';
  },
  methods: {
    handleChange: function handleChange(info) {
      var _this = this;

      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this.imageUrl = imageUrl;
          _this.images = imageUrl;
          _this.loading = false;
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
    save: function save() {
      var _this2 = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this2;
          instance.axiosPost('papers/create/seller', {
            car_id: instance.car_id,
            value: values.select_value,
            image: instance.images
          }, function (response) {
            _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    deleteImage: function deleteImage() {
      var instance = this;
      instance.axiosGet('papers/delete/seller/' + instance.car_id, function (response) {
        _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
        instance.images = "";
        instance.imageUrl = "";
        instance.successNoti(response.message);
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/stamp.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/stamp.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["image", "value", "car_id"],
  data: function data() {
    return {
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      images: "",
      imageUrl: "",
      demo: "",
      loading: false
    };
  },
  created: function created() {
    this.demo = this.publicPath + 'demo';
  },
  methods: {
    handleChange: function handleChange(info) {
      var _this = this;

      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this.imageUrl = imageUrl;
          _this.images = imageUrl;
          _this.loading = false;
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
    save: function save() {
      var _this2 = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this2;
          instance.axiosPost('papers/create/stamp', {
            car_id: instance.car_id,
            value: values.select_value,
            image: instance.images
          }, function (response) {
            _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    deleteImage: function deleteImage() {
      var instance = this;
      instance.axiosGet('papers/delete/stamp/' + instance.car_id, function (response) {
        _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
        instance.images = "";
        instance.imageUrl = "";
        instance.successNoti(response.message);
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/tax.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/tax.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_Helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixin/Helper */ "./resources/js/mixin/Helper.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app */ "./resources/js/app.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: ["image", "value", "car_id"],
  data: function data() {
    return {
      form: this.$form.createForm(this, {
        name: "dynamic_rule"
      }),
      images: "",
      imageUrl: "",
      demo: "",
      loading: false
    };
  },
  created: function created() {
    this.demo = this.publicPath + 'demo';
  },
  methods: {
    handleChange: function handleChange(info) {
      var _this = this;

      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }

      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, function (imageUrl) {
          _this.imageUrl = imageUrl;
          _this.images = imageUrl;
          _this.loading = false;
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
    save: function save() {
      var _this2 = this;

      this.form.validateFields(function (err, values) {
        if (!err) {
          var instance = _this2;
          instance.axiosPost('papers/create/tax', {
            car_id: instance.car_id,
            value: values.select_value,
            image: instance.images
          }, function (response) {
            _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
            instance.successNoti(response.message);
          }, function (error) {
            instance.errorNoti(error);
          });
        }
      });
    },
    deleteImage: function deleteImage() {
      var instance = this;
      instance.axiosGet('papers/delete/tax/' + instance.car_id, function (response) {
        _app__WEBPACK_IMPORTED_MODULE_1__["bus"].$emit('refreshGetData');
        instance.images = "";
        instance.imageUrl = "";
        instance.successNoti(response.message);
      }, function (error) {
        instance.errorNoti(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-61ecb02c] {\n    width: 200px;\n    height: 200px;\n    border: 5px solid #1d8efa;\n}\n.area[data-v-61ecb02c] {\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-df85896a] {\n    width: 200px;\n    height: 200px;\n    border: 5px solid #1d8efa;\n}\n.area[data-v-df85896a] {\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-39d0c16c] {\n    width: 200px;\n    height: 200px;\n    border: 5px solid #1d8efa;\n}\n.area[data-v-39d0c16c] {\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-0b80ec7d] {\n    width: 200px;\n    height: 200px;\n    border: 5px solid #1d8efa;\n}\n.area[data-v-0b80ec7d] {\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-ae03f234] {\n    width: 200px;\n    height: 200px;\n    border: 5px solid #1d8efa;\n}\n.area[data-v-ae03f234] {\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-770765ec] {\n    width: 200px;\n    height: 200px;\n    border: 5px solid #1d8efa;\n}\n.area[data-v-770765ec] {\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-49038e6c] {\n    width: 200px;\n    height: 200px;\n    border: 5px solid #1d8efa;\n}\n.area[data-v-49038e6c] {\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-3543ab34] {\n    width: 200px;\n    height: 200px;\n    border: 5px solid #1d8efa;\n}\n.area[data-v-3543ab34] {\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nimg[data-v-2e60d90e] {\n    width: 200px;\n    height: 200px;\n    border: 5px solid #1d8efa;\n}\n.area[data-v-2e60d90e] {\n    padding: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/brta.vue?vue&type=template&id=61ecb02c&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/brta.vue?vue&type=template&id=61ecb02c&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "area" },
    [
      _vm.image
        ? [
            _c("h3", [_vm._v("BRTA")]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: _vm.mainPath + "images/uploads/" + _vm.image,
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("a-row", { staticClass: "m-t-5" }, [
              _c("p", [
                _c("b", [_vm._v("BRTA:")]),
                _vm._v(" " + _vm._s(_vm.value))
              ])
            ]),
            _vm._v(" "),
            _c(
              "a-row",
              [
                _c(
                  "a-button",
                  { attrs: { type: "danger" }, on: { click: _vm.deleteImage } },
                  [_vm._v("Delete")]
                )
              ],
              1
            )
          ]
        : [
            _c("h3", [_vm._v("BRTA")]),
            _vm._v(" "),
            _c(
              "a-upload",
              {
                staticClass: "avatar-uploader",
                attrs: {
                  name: "images",
                  "list-type": "picture-card",
                  "show-upload-list": false,
                  action: _vm.demo,
                  "before-upload": _vm.beforeUpload
                },
                on: { change: _vm.handleChange }
              },
              [
                _vm.imageUrl
                  ? _c("img", { attrs: { src: _vm.imageUrl, alt: "avatar" } })
                  : _c(
                      "div",
                      [
                        _c("a-icon", {
                          attrs: { type: _vm.loading ? "loading" : "plus" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "ant-upload-text" }, [
                          _vm._v(
                            "\n                    Upload\n                "
                          )
                        ])
                      ],
                      1
                    )
              ]
            ),
            _vm._v(" "),
            _c(
              "a-form",
              { attrs: { form: _vm.form } },
              [
                _c(
                  "a-form-item",
                  { attrs: { label: "Select BRTA" } },
                  [
                    _c(
                      "a-select",
                      {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "select_value",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Must have to select a brta!"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['select_value',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a brta!'\n                                        }\n                                    ]}]"
                          }
                        ],
                        attrs: { optionFilterProp: "children", showSearch: "" }
                      },
                      [
                        _c(
                          "a-select-option",
                          { key: "", attrs: { selected: "", disabled: "" } },
                          [_vm._v("Select")]
                        ),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "mirpur" } }, [
                          _vm._v("Mirpur")
                        ]),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "equria" } }, [
                          _vm._v("Equria")
                        ]),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "uttara" } }, [
                          _vm._v("Uttara")
                        ]),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "others" } }, [
                          _vm._v("Others")
                        ])
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
                      { attrs: { type: "primary" }, on: { click: _vm.save } },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/fitness.vue?vue&type=template&id=df85896a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/fitness.vue?vue&type=template&id=df85896a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "area" },
    [
      _vm.image
        ? [
            _c("h3", [_vm._v("Fitness")]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: _vm.mainPath + "images/uploads/" + _vm.image,
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("a-row", { staticClass: "m-t-5" }, [
              _c("p", [
                _c("b", [_vm._v("Fitness:")]),
                _vm._v(" " + _vm._s(_vm.value))
              ])
            ]),
            _vm._v(" "),
            _c(
              "a-row",
              [
                _c(
                  "a-button",
                  { attrs: { type: "danger" }, on: { click: _vm.deleteImage } },
                  [_vm._v("Delete")]
                )
              ],
              1
            )
          ]
        : [
            _c("h3", [_vm._v("Fitness")]),
            _vm._v(" "),
            _c(
              "a-upload",
              {
                staticClass: "avatar-uploader",
                attrs: {
                  name: "images",
                  "list-type": "picture-card",
                  "show-upload-list": false,
                  action: _vm.demo,
                  "before-upload": _vm.beforeUpload
                },
                on: { change: _vm.handleChange }
              },
              [
                _vm.imageUrl
                  ? _c("img", { attrs: { src: _vm.imageUrl, alt: "avatar" } })
                  : _c(
                      "div",
                      [
                        _c("a-icon", {
                          attrs: { type: _vm.loading ? "loading" : "plus" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "ant-upload-text" }, [
                          _vm._v(
                            "\n                    Upload\n                "
                          )
                        ])
                      ],
                      1
                    )
              ]
            ),
            _vm._v(" "),
            _c(
              "a-form",
              { attrs: { form: _vm.form } },
              [
                _c(
                  "a-form-item",
                  { attrs: { label: "Select" } },
                  [
                    _c(
                      "a-select",
                      {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "select_value",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Must have to select a value!"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['select_value',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a value!'\n                                        }\n                                    ]}]"
                          }
                        ],
                        attrs: { optionFilterProp: "children", showSearch: "" }
                      },
                      [
                        _c(
                          "a-select-option",
                          { key: "", attrs: { selected: "", disabled: "" } },
                          [_vm._v("Select")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Photocopy" } },
                          [_vm._v("Photocopy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Original" } },
                          [_vm._v("Original")]
                        ),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "others" } }, [
                          _vm._v("Others")
                        ])
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
                      { attrs: { type: "primary" }, on: { click: _vm.save } },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/gd.vue?vue&type=template&id=39d0c16c&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/gd.vue?vue&type=template&id=39d0c16c&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "area" },
    [
      _vm.image
        ? [
            _c("h3", [_vm._v("GD Paper")]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: _vm.mainPath + "images/uploads/" + _vm.image,
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("a-row", { staticClass: "m-t-5" }, [
              _c("p", [
                _c("b", [_vm._v("Gd Paper:")]),
                _vm._v(" " + _vm._s(_vm.value))
              ])
            ]),
            _vm._v(" "),
            _c(
              "a-row",
              [
                _c(
                  "a-button",
                  { attrs: { type: "danger" }, on: { click: _vm.deleteImage } },
                  [_vm._v("Delete")]
                )
              ],
              1
            )
          ]
        : [
            _c("h3", [_vm._v("Gd Paper")]),
            _vm._v(" "),
            _c(
              "a-upload",
              {
                staticClass: "avatar-uploader",
                attrs: {
                  name: "images",
                  "list-type": "picture-card",
                  "show-upload-list": false,
                  action: _vm.demo,
                  "before-upload": _vm.beforeUpload
                },
                on: { change: _vm.handleChange }
              },
              [
                _vm.imageUrl
                  ? _c("img", { attrs: { src: _vm.imageUrl, alt: "avatar" } })
                  : _c(
                      "div",
                      [
                        _c("a-icon", {
                          attrs: { type: _vm.loading ? "loading" : "plus" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "ant-upload-text" }, [
                          _vm._v(
                            "\n                    Upload\n                "
                          )
                        ])
                      ],
                      1
                    )
              ]
            ),
            _vm._v(" "),
            _c(
              "a-form",
              { attrs: { form: _vm.form } },
              [
                _c(
                  "a-form-item",
                  { attrs: { label: "Select" } },
                  [
                    _c(
                      "a-select",
                      {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "select_value",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Must have to select a value!"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['select_value',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a value!'\n                                        }\n                                    ]}]"
                          }
                        ],
                        attrs: { optionFilterProp: "children", showSearch: "" }
                      },
                      [
                        _c(
                          "a-select-option",
                          { key: "", attrs: { selected: "", disabled: "" } },
                          [_vm._v("Select")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "car-copy" } },
                          [_vm._v("Car Copy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "home-copy" } },
                          [_vm._v("Home Copy")]
                        ),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "others" } }, [
                          _vm._v("Others")
                        ])
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
                      { attrs: { type: "primary" }, on: { click: _vm.save } },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/insurance.vue?vue&type=template&id=0b80ec7d&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/insurance.vue?vue&type=template&id=0b80ec7d&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "area" },
    [
      _vm.image
        ? [
            _c("h3", [_vm._v("Insurance")]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: _vm.mainPath + "images/uploads/" + _vm.image,
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("a-row", { staticClass: "m-t-5" }, [
              _c("p", [
                _c("b", [_vm._v("Insurance:")]),
                _vm._v(" " + _vm._s(_vm.value))
              ])
            ]),
            _vm._v(" "),
            _c(
              "a-row",
              [
                _c(
                  "a-button",
                  { attrs: { type: "danger" }, on: { click: _vm.deleteImage } },
                  [_vm._v("Delete")]
                )
              ],
              1
            )
          ]
        : [
            _c("h3", [_vm._v("Insurance")]),
            _vm._v(" "),
            _c(
              "a-upload",
              {
                staticClass: "avatar-uploader",
                attrs: {
                  name: "images",
                  "list-type": "picture-card",
                  "show-upload-list": false,
                  action: _vm.demo,
                  "before-upload": _vm.beforeUpload
                },
                on: { change: _vm.handleChange }
              },
              [
                _vm.imageUrl
                  ? _c("img", { attrs: { src: _vm.imageUrl, alt: "avatar" } })
                  : _c(
                      "div",
                      [
                        _c("a-icon", {
                          attrs: { type: _vm.loading ? "loading" : "plus" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "ant-upload-text" }, [
                          _vm._v(
                            "\n                    Upload\n                "
                          )
                        ])
                      ],
                      1
                    )
              ]
            ),
            _vm._v(" "),
            _c(
              "a-form",
              { attrs: { form: _vm.form } },
              [
                _c(
                  "a-form-item",
                  { attrs: { label: "Select" } },
                  [
                    _c(
                      "a-select",
                      {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "select_value",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Must have to select a value!"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['select_value',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a value!'\n                                        }\n                                    ]}]"
                          }
                        ],
                        attrs: { optionFilterProp: "children", showSearch: "" }
                      },
                      [
                        _c(
                          "a-select-option",
                          { key: "", attrs: { selected: "", disabled: "" } },
                          [_vm._v("Select")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Photocopy" } },
                          [_vm._v("Photocopy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Original" } },
                          [_vm._v("Original")]
                        ),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "others" } }, [
                          _vm._v("Others")
                        ])
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
                      { attrs: { type: "primary" }, on: { click: _vm.save } },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/papers.vue?vue&type=template&id=5e8bab54&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/papers.vue?vue&type=template&id=5e8bab54&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "a-row",
    [
      !_vm.papers
        ? _c(
            "a-col",
            [
              _c("p", [
                _vm._v(
                  "No Paper registered for this car. Click below to register."
                )
              ]),
              _vm._v(" "),
              _c(
                "a-button",
                { attrs: { type: "primary" }, on: { click: _vm.registerCar } },
                [_vm._v("Register")]
              )
            ],
            1
          )
        : _c(
            "a-col",
            [
              _c(
                "a-row",
                [
                  _c(
                    "a-col",
                    { attrs: { span: "8" } },
                    [
                      _c("brta", {
                        attrs: {
                          image: _vm.brta_image,
                          value: _vm.brta_value,
                          car_id: _vm.car_id
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: "8" } },
                    [
                      _c("registration", {
                        attrs: {
                          image: _vm.reg_image,
                          value: _vm.reg_value,
                          car_id: _vm.car_id
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: "8" } },
                    [
                      _c("gd", {
                        attrs: {
                          image: _vm.gd_image,
                          value: _vm.gd_value,
                          car_id: _vm.car_id
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: "8" } },
                    [
                      _c("tax", {
                        attrs: {
                          image: _vm.tax_image,
                          value: _vm.tax_value,
                          car_id: _vm.car_id
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: "8" } },
                    [
                      _c("fitness", {
                        attrs: {
                          image: _vm.fitness_image,
                          value: _vm.fitness_value,
                          car_id: _vm.car_id
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: "8" } },
                    [
                      _c("insurance", {
                        attrs: {
                          image: _vm.insurance_image,
                          value: _vm.insurance_value,
                          car_id: _vm.car_id
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: "8" } },
                    [
                      _c("route", {
                        attrs: {
                          image: _vm.route_image,
                          value: _vm.route_value,
                          car_id: _vm.car_id
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: "8" } },
                    [
                      _c("stamp", {
                        attrs: {
                          image: _vm.stamp_image,
                          value: _vm.stamp_value,
                          car_id: _vm.car_id
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { span: "8" } },
                    [
                      _c("seller", {
                        attrs: {
                          image: _vm.seller_image,
                          value: _vm.seller_value,
                          car_id: _vm.car_id
                        }
                      })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/registration.vue?vue&type=template&id=ae03f234&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/registration.vue?vue&type=template&id=ae03f234&scoped=true& ***!
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
    { staticClass: "area" },
    [
      _vm.image
        ? [
            _c("h3", [_vm._v("Registration")]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: _vm.mainPath + "images/uploads/" + _vm.image,
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("a-row", { staticClass: "m-t-5" }, [
              _c("p", [
                _c("b", [_vm._v("Registration:")]),
                _vm._v(" " + _vm._s(_vm.value))
              ])
            ]),
            _vm._v(" "),
            _c(
              "a-row",
              [
                _c(
                  "a-button",
                  { attrs: { type: "danger" }, on: { click: _vm.deleteImage } },
                  [_vm._v("Delete")]
                )
              ],
              1
            )
          ]
        : [
            _c("h3", [_vm._v("Registration")]),
            _vm._v(" "),
            _c(
              "a-upload",
              {
                staticClass: "avatar-uploader",
                attrs: {
                  name: "images",
                  "list-type": "picture-card",
                  "show-upload-list": false,
                  action: _vm.demo,
                  "before-upload": _vm.beforeUpload
                },
                on: { change: _vm.handleChange }
              },
              [
                _vm.imageUrl
                  ? _c("img", { attrs: { src: _vm.imageUrl, alt: "avatar" } })
                  : _c(
                      "div",
                      [
                        _c("a-icon", {
                          attrs: { type: _vm.loading ? "loading" : "plus" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "ant-upload-text" }, [
                          _vm._v(
                            "\n                    Upload\n                "
                          )
                        ])
                      ],
                      1
                    )
              ]
            ),
            _vm._v(" "),
            _c(
              "a-form",
              { attrs: { form: _vm.form } },
              [
                _c(
                  "a-form-item",
                  { attrs: { label: "Select" } },
                  [
                    _c(
                      "a-select",
                      {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "select_value",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Must have to select a value!"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['select_value',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a value!'\n                                        }\n                                    ]}]"
                          }
                        ],
                        attrs: { optionFilterProp: "children", showSearch: "" }
                      },
                      [
                        _c(
                          "a-select-option",
                          { key: "", attrs: { selected: "", disabled: "" } },
                          [_vm._v("Select")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "car-copy" } },
                          [_vm._v("Car Copy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "home-copy" } },
                          [_vm._v("Home Copy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "digital-R-C" } },
                          [_vm._v("Gigital R/C")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "transfer-receipt" } },
                          [_vm._v("Transfer Receipt")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "acknowledgement-slip" } },
                          [_vm._v("Acknowledgement Slip")]
                        ),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "others" } }, [
                          _vm._v("Others")
                        ])
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
                      { attrs: { type: "primary" }, on: { click: _vm.save } },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/route.vue?vue&type=template&id=770765ec&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/route.vue?vue&type=template&id=770765ec&scoped=true& ***!
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
    { staticClass: "area" },
    [
      _vm.image
        ? [
            _c("h3", [_vm._v("Route Permit")]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: _vm.mainPath + "images/uploads/" + _vm.image,
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("a-row", { staticClass: "m-t-5" }, [
              _c("p", [
                _c("b", [_vm._v("Route Permit:")]),
                _vm._v(" " + _vm._s(_vm.value))
              ])
            ]),
            _vm._v(" "),
            _c(
              "a-row",
              [
                _c(
                  "a-button",
                  { attrs: { type: "danger" }, on: { click: _vm.deleteImage } },
                  [_vm._v("Delete")]
                )
              ],
              1
            )
          ]
        : [
            _c("h3", [_vm._v("Route Permit")]),
            _vm._v(" "),
            _c(
              "a-upload",
              {
                staticClass: "avatar-uploader",
                attrs: {
                  name: "images",
                  "list-type": "picture-card",
                  "show-upload-list": false,
                  action: _vm.demo,
                  "before-upload": _vm.beforeUpload
                },
                on: { change: _vm.handleChange }
              },
              [
                _vm.imageUrl
                  ? _c("img", { attrs: { src: _vm.imageUrl, alt: "avatar" } })
                  : _c(
                      "div",
                      [
                        _c("a-icon", {
                          attrs: { type: _vm.loading ? "loading" : "plus" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "ant-upload-text" }, [
                          _vm._v(
                            "\n                    Upload\n                "
                          )
                        ])
                      ],
                      1
                    )
              ]
            ),
            _vm._v(" "),
            _c(
              "a-form",
              { attrs: { form: _vm.form } },
              [
                _c(
                  "a-form-item",
                  { attrs: { label: "Select" } },
                  [
                    _c(
                      "a-select",
                      {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "select_value",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Must have to select a value!"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['select_value',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a value!'\n                                        }\n                                    ]}]"
                          }
                        ],
                        attrs: { optionFilterProp: "children", showSearch: "" }
                      },
                      [
                        _c(
                          "a-select-option",
                          { key: "", attrs: { selected: "", disabled: "" } },
                          [_vm._v("Select")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Photocopy" } },
                          [_vm._v("Photocopy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Original" } },
                          [_vm._v("Original")]
                        ),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "others" } }, [
                          _vm._v("Others")
                        ])
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
                      { attrs: { type: "primary" }, on: { click: _vm.save } },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/seller.vue?vue&type=template&id=49038e6c&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/seller.vue?vue&type=template&id=49038e6c&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "area" },
    [
      _vm.image
        ? [
            _c("h3", [_vm._v("Seller Picture")]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: _vm.mainPath + "images/uploads/" + _vm.image,
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("a-row", { staticClass: "m-t-5" }, [
              _c("p", [
                _c("b", [_vm._v("Seller Picture:")]),
                _vm._v(" " + _vm._s(_vm.value))
              ])
            ]),
            _vm._v(" "),
            _c(
              "a-row",
              [
                _c(
                  "a-button",
                  { attrs: { type: "danger" }, on: { click: _vm.deleteImage } },
                  [_vm._v("Delete")]
                )
              ],
              1
            )
          ]
        : [
            _c("h3", [_vm._v("Seller Picture")]),
            _vm._v(" "),
            _c(
              "a-upload",
              {
                staticClass: "avatar-uploader",
                attrs: {
                  name: "images",
                  "list-type": "picture-card",
                  "show-upload-list": false,
                  action: _vm.demo,
                  "before-upload": _vm.beforeUpload
                },
                on: { change: _vm.handleChange }
              },
              [
                _vm.imageUrl
                  ? _c("img", { attrs: { src: _vm.imageUrl, alt: "avatar" } })
                  : _c(
                      "div",
                      [
                        _c("a-icon", {
                          attrs: { type: _vm.loading ? "loading" : "plus" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "ant-upload-text" }, [
                          _vm._v(
                            "\n                    Upload\n                "
                          )
                        ])
                      ],
                      1
                    )
              ]
            ),
            _vm._v(" "),
            _c(
              "a-form",
              { attrs: { form: _vm.form } },
              [
                _c(
                  "a-form-item",
                  { attrs: { label: "Select" } },
                  [
                    _c(
                      "a-select",
                      {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "select_value",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Must have to select a value!"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['select_value',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a value!'\n                                        }\n                                    ]}]"
                          }
                        ],
                        attrs: { optionFilterProp: "children", showSearch: "" }
                      },
                      [
                        _c(
                          "a-select-option",
                          { key: "", attrs: { selected: "", disabled: "" } },
                          [_vm._v("Select")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Photocopy" } },
                          [_vm._v("Photocopy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Original" } },
                          [_vm._v("Original")]
                        ),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "others" } }, [
                          _vm._v("Others")
                        ])
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
                      { attrs: { type: "primary" }, on: { click: _vm.save } },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/stamp.vue?vue&type=template&id=3543ab34&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/stamp.vue?vue&type=template&id=3543ab34&scoped=true& ***!
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
    { staticClass: "area" },
    [
      _vm.image
        ? [
            _c("h3", [_vm._v("Stamp")]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: _vm.mainPath + "images/uploads/" + _vm.image,
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("a-row", { staticClass: "m-t-5" }, [
              _c("p", [
                _c("b", [_vm._v("Stamp:")]),
                _vm._v(" " + _vm._s(_vm.value))
              ])
            ]),
            _vm._v(" "),
            _c(
              "a-row",
              [
                _c(
                  "a-button",
                  { attrs: { type: "danger" }, on: { click: _vm.deleteImage } },
                  [_vm._v("Delete")]
                )
              ],
              1
            )
          ]
        : [
            _c("h3", [_vm._v("Stamp")]),
            _vm._v(" "),
            _c(
              "a-upload",
              {
                staticClass: "avatar-uploader",
                attrs: {
                  name: "images",
                  "list-type": "picture-card",
                  "show-upload-list": false,
                  action: _vm.demo,
                  "before-upload": _vm.beforeUpload
                },
                on: { change: _vm.handleChange }
              },
              [
                _vm.imageUrl
                  ? _c("img", { attrs: { src: _vm.imageUrl, alt: "avatar" } })
                  : _c(
                      "div",
                      [
                        _c("a-icon", {
                          attrs: { type: _vm.loading ? "loading" : "plus" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "ant-upload-text" }, [
                          _vm._v(
                            "\n                    Upload\n                "
                          )
                        ])
                      ],
                      1
                    )
              ]
            ),
            _vm._v(" "),
            _c(
              "a-form",
              { attrs: { form: _vm.form } },
              [
                _c(
                  "a-form-item",
                  { attrs: { label: "Select" } },
                  [
                    _c(
                      "a-select",
                      {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "select_value",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Must have to select a value!"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['select_value',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a value!'\n                                        }\n                                    ]}]"
                          }
                        ],
                        attrs: { optionFilterProp: "children", showSearch: "" }
                      },
                      [
                        _c(
                          "a-select-option",
                          { key: "", attrs: { selected: "", disabled: "" } },
                          [_vm._v("Select")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Photocopy" } },
                          [_vm._v("Photocopy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Original" } },
                          [_vm._v("Original")]
                        ),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "others" } }, [
                          _vm._v("Others")
                        ])
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
                      { attrs: { type: "primary" }, on: { click: _vm.save } },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/tax.vue?vue&type=template&id=2e60d90e&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/papers/tax.vue?vue&type=template&id=2e60d90e&scoped=true& ***!
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
    { staticClass: "area" },
    [
      _vm.image
        ? [
            _c("h3", [_vm._v("Tax Token")]),
            _vm._v(" "),
            _c("img", {
              attrs: {
                src: _vm.mainPath + "images/uploads/" + _vm.image,
                alt: ""
              }
            }),
            _vm._v(" "),
            _c("a-row", { staticClass: "m-t-5" }, [
              _c("p", [
                _c("b", [_vm._v("Tax Token:")]),
                _vm._v(" " + _vm._s(_vm.value))
              ])
            ]),
            _vm._v(" "),
            _c(
              "a-row",
              [
                _c(
                  "a-button",
                  { attrs: { type: "danger" }, on: { click: _vm.deleteImage } },
                  [_vm._v("Delete")]
                )
              ],
              1
            )
          ]
        : [
            _c("h3", [_vm._v("Tax Token")]),
            _vm._v(" "),
            _c(
              "a-upload",
              {
                staticClass: "avatar-uploader",
                attrs: {
                  name: "images",
                  "list-type": "picture-card",
                  "show-upload-list": false,
                  action: _vm.demo,
                  "before-upload": _vm.beforeUpload
                },
                on: { change: _vm.handleChange }
              },
              [
                _vm.imageUrl
                  ? _c("img", { attrs: { src: _vm.imageUrl, alt: "avatar" } })
                  : _c(
                      "div",
                      [
                        _c("a-icon", {
                          attrs: { type: _vm.loading ? "loading" : "plus" }
                        }),
                        _vm._v(" "),
                        _c("div", { staticClass: "ant-upload-text" }, [
                          _vm._v(
                            "\n                    Upload\n                "
                          )
                        ])
                      ],
                      1
                    )
              ]
            ),
            _vm._v(" "),
            _c(
              "a-form",
              { attrs: { form: _vm.form } },
              [
                _c(
                  "a-form-item",
                  { attrs: { label: "Select" } },
                  [
                    _c(
                      "a-select",
                      {
                        directives: [
                          {
                            name: "decorator",
                            rawName: "v-decorator",
                            value: [
                              "select_value",
                              {
                                rules: [
                                  {
                                    required: true,
                                    message: "Must have to select a value!"
                                  }
                                ]
                              }
                            ],
                            expression:
                              "['select_value',{rules:[\n                                        {\n                                            required: true,\n                                            message: 'Must have to select a value!'\n                                        }\n                                    ]}]"
                          }
                        ],
                        attrs: { optionFilterProp: "children", showSearch: "" }
                      },
                      [
                        _c(
                          "a-select-option",
                          { key: "", attrs: { selected: "", disabled: "" } },
                          [_vm._v("Select")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Photocopy" } },
                          [_vm._v("Photocopy")]
                        ),
                        _vm._v(" "),
                        _c(
                          "a-select-option",
                          { attrs: { value: "Original" } },
                          [_vm._v("Original")]
                        ),
                        _vm._v(" "),
                        _c("a-select-option", { attrs: { value: "others" } }, [
                          _vm._v("Others")
                        ])
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
                      { attrs: { type: "primary" }, on: { click: _vm.save } },
                      [_vm._v("Update")]
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/papers/brta.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/papers/brta.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _brta_vue_vue_type_template_id_61ecb02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brta.vue?vue&type=template&id=61ecb02c&scoped=true& */ "./resources/js/components/papers/brta.vue?vue&type=template&id=61ecb02c&scoped=true&");
/* harmony import */ var _brta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./brta.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/brta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _brta_vue_vue_type_style_index_0_id_61ecb02c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css& */ "./resources/js/components/papers/brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _brta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _brta_vue_vue_type_template_id_61ecb02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _brta_vue_vue_type_template_id_61ecb02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61ecb02c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/brta.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/brta.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/papers/brta.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_brta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./brta.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/brta.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_brta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/papers/brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brta_vue_vue_type_style_index_0_id_61ecb02c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/brta.vue?vue&type=style&index=0&id=61ecb02c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brta_vue_vue_type_style_index_0_id_61ecb02c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brta_vue_vue_type_style_index_0_id_61ecb02c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brta_vue_vue_type_style_index_0_id_61ecb02c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_brta_vue_vue_type_style_index_0_id_61ecb02c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/papers/brta.vue?vue&type=template&id=61ecb02c&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/papers/brta.vue?vue&type=template&id=61ecb02c&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brta_vue_vue_type_template_id_61ecb02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./brta.vue?vue&type=template&id=61ecb02c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/brta.vue?vue&type=template&id=61ecb02c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brta_vue_vue_type_template_id_61ecb02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_brta_vue_vue_type_template_id_61ecb02c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/papers/fitness.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/papers/fitness.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fitness_vue_vue_type_template_id_df85896a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fitness.vue?vue&type=template&id=df85896a&scoped=true& */ "./resources/js/components/papers/fitness.vue?vue&type=template&id=df85896a&scoped=true&");
/* harmony import */ var _fitness_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fitness.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/fitness.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _fitness_vue_vue_type_style_index_0_id_df85896a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css& */ "./resources/js/components/papers/fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _fitness_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _fitness_vue_vue_type_template_id_df85896a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _fitness_vue_vue_type_template_id_df85896a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "df85896a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/fitness.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/fitness.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/papers/fitness.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fitness_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./fitness.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/fitness.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_fitness_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/papers/fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fitness_vue_vue_type_style_index_0_id_df85896a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/fitness.vue?vue&type=style&index=0&id=df85896a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fitness_vue_vue_type_style_index_0_id_df85896a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fitness_vue_vue_type_style_index_0_id_df85896a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fitness_vue_vue_type_style_index_0_id_df85896a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_fitness_vue_vue_type_style_index_0_id_df85896a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/papers/fitness.vue?vue&type=template&id=df85896a&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/papers/fitness.vue?vue&type=template&id=df85896a&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fitness_vue_vue_type_template_id_df85896a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./fitness.vue?vue&type=template&id=df85896a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/fitness.vue?vue&type=template&id=df85896a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fitness_vue_vue_type_template_id_df85896a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_fitness_vue_vue_type_template_id_df85896a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/papers/gd.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/papers/gd.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gd_vue_vue_type_template_id_39d0c16c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gd.vue?vue&type=template&id=39d0c16c&scoped=true& */ "./resources/js/components/papers/gd.vue?vue&type=template&id=39d0c16c&scoped=true&");
/* harmony import */ var _gd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gd.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/gd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _gd_vue_vue_type_style_index_0_id_39d0c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css& */ "./resources/js/components/papers/gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gd_vue_vue_type_template_id_39d0c16c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gd_vue_vue_type_template_id_39d0c16c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "39d0c16c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/gd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/gd.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/papers/gd.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./gd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/gd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_gd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/papers/gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gd_vue_vue_type_style_index_0_id_39d0c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/gd.vue?vue&type=style&index=0&id=39d0c16c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gd_vue_vue_type_style_index_0_id_39d0c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gd_vue_vue_type_style_index_0_id_39d0c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gd_vue_vue_type_style_index_0_id_39d0c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_gd_vue_vue_type_style_index_0_id_39d0c16c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/papers/gd.vue?vue&type=template&id=39d0c16c&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/papers/gd.vue?vue&type=template&id=39d0c16c&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gd_vue_vue_type_template_id_39d0c16c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./gd.vue?vue&type=template&id=39d0c16c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/gd.vue?vue&type=template&id=39d0c16c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gd_vue_vue_type_template_id_39d0c16c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_gd_vue_vue_type_template_id_39d0c16c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/papers/insurance.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/papers/insurance.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _insurance_vue_vue_type_template_id_0b80ec7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insurance.vue?vue&type=template&id=0b80ec7d&scoped=true& */ "./resources/js/components/papers/insurance.vue?vue&type=template&id=0b80ec7d&scoped=true&");
/* harmony import */ var _insurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insurance.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/insurance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _insurance_vue_vue_type_style_index_0_id_0b80ec7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css& */ "./resources/js/components/papers/insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _insurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _insurance_vue_vue_type_template_id_0b80ec7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _insurance_vue_vue_type_template_id_0b80ec7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b80ec7d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/insurance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/insurance.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/papers/insurance.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./insurance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/insurance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_insurance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/papers/insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_insurance_vue_vue_type_style_index_0_id_0b80ec7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/insurance.vue?vue&type=style&index=0&id=0b80ec7d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_insurance_vue_vue_type_style_index_0_id_0b80ec7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_insurance_vue_vue_type_style_index_0_id_0b80ec7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_insurance_vue_vue_type_style_index_0_id_0b80ec7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_insurance_vue_vue_type_style_index_0_id_0b80ec7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/papers/insurance.vue?vue&type=template&id=0b80ec7d&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/papers/insurance.vue?vue&type=template&id=0b80ec7d&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_insurance_vue_vue_type_template_id_0b80ec7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./insurance.vue?vue&type=template&id=0b80ec7d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/insurance.vue?vue&type=template&id=0b80ec7d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_insurance_vue_vue_type_template_id_0b80ec7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_insurance_vue_vue_type_template_id_0b80ec7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/papers/papers.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/papers/papers.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _papers_vue_vue_type_template_id_5e8bab54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./papers.vue?vue&type=template&id=5e8bab54&scoped=true& */ "./resources/js/components/papers/papers.vue?vue&type=template&id=5e8bab54&scoped=true&");
/* harmony import */ var _papers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./papers.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/papers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _papers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _papers_vue_vue_type_template_id_5e8bab54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _papers_vue_vue_type_template_id_5e8bab54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e8bab54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/papers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/papers.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/papers/papers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_papers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./papers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/papers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_papers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/papers.vue?vue&type=template&id=5e8bab54&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/papers/papers.vue?vue&type=template&id=5e8bab54&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_papers_vue_vue_type_template_id_5e8bab54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./papers.vue?vue&type=template&id=5e8bab54&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/papers.vue?vue&type=template&id=5e8bab54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_papers_vue_vue_type_template_id_5e8bab54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_papers_vue_vue_type_template_id_5e8bab54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/papers/registration.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/papers/registration.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _registration_vue_vue_type_template_id_ae03f234_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registration.vue?vue&type=template&id=ae03f234&scoped=true& */ "./resources/js/components/papers/registration.vue?vue&type=template&id=ae03f234&scoped=true&");
/* harmony import */ var _registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registration.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _registration_vue_vue_type_style_index_0_id_ae03f234_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css& */ "./resources/js/components/papers/registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _registration_vue_vue_type_template_id_ae03f234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _registration_vue_vue_type_template_id_ae03f234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ae03f234",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/registration.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/registration.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/papers/registration.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./registration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/registration.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/papers/registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_style_index_0_id_ae03f234_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/registration.vue?vue&type=style&index=0&id=ae03f234&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_style_index_0_id_ae03f234_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_style_index_0_id_ae03f234_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_style_index_0_id_ae03f234_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_style_index_0_id_ae03f234_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/papers/registration.vue?vue&type=template&id=ae03f234&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/papers/registration.vue?vue&type=template&id=ae03f234&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_ae03f234_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./registration.vue?vue&type=template&id=ae03f234&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/registration.vue?vue&type=template&id=ae03f234&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_ae03f234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_registration_vue_vue_type_template_id_ae03f234_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/papers/route.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/papers/route.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route_vue_vue_type_template_id_770765ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route.vue?vue&type=template&id=770765ec&scoped=true& */ "./resources/js/components/papers/route.vue?vue&type=template&id=770765ec&scoped=true&");
/* harmony import */ var _route_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/route.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _route_vue_vue_type_style_index_0_id_770765ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css& */ "./resources/js/components/papers/route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _route_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _route_vue_vue_type_template_id_770765ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _route_vue_vue_type_template_id_770765ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "770765ec",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/route.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/route.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/papers/route.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./route.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/route.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/papers/route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_style_index_0_id_770765ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/route.vue?vue&type=style&index=0&id=770765ec&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_style_index_0_id_770765ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_style_index_0_id_770765ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_style_index_0_id_770765ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_style_index_0_id_770765ec_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/papers/route.vue?vue&type=template&id=770765ec&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/papers/route.vue?vue&type=template&id=770765ec&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_template_id_770765ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./route.vue?vue&type=template&id=770765ec&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/route.vue?vue&type=template&id=770765ec&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_template_id_770765ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_route_vue_vue_type_template_id_770765ec_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/papers/seller.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/papers/seller.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _seller_vue_vue_type_template_id_49038e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./seller.vue?vue&type=template&id=49038e6c&scoped=true& */ "./resources/js/components/papers/seller.vue?vue&type=template&id=49038e6c&scoped=true&");
/* harmony import */ var _seller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./seller.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/seller.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _seller_vue_vue_type_style_index_0_id_49038e6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css& */ "./resources/js/components/papers/seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _seller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _seller_vue_vue_type_template_id_49038e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _seller_vue_vue_type_template_id_49038e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49038e6c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/seller.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/seller.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/papers/seller.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./seller.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/seller.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/papers/seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_style_index_0_id_49038e6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/seller.vue?vue&type=style&index=0&id=49038e6c&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_style_index_0_id_49038e6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_style_index_0_id_49038e6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_style_index_0_id_49038e6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_style_index_0_id_49038e6c_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/papers/seller.vue?vue&type=template&id=49038e6c&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/papers/seller.vue?vue&type=template&id=49038e6c&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_template_id_49038e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./seller.vue?vue&type=template&id=49038e6c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/seller.vue?vue&type=template&id=49038e6c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_template_id_49038e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_seller_vue_vue_type_template_id_49038e6c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/papers/stamp.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/papers/stamp.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stamp_vue_vue_type_template_id_3543ab34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stamp.vue?vue&type=template&id=3543ab34&scoped=true& */ "./resources/js/components/papers/stamp.vue?vue&type=template&id=3543ab34&scoped=true&");
/* harmony import */ var _stamp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stamp.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/stamp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _stamp_vue_vue_type_style_index_0_id_3543ab34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css& */ "./resources/js/components/papers/stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _stamp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stamp_vue_vue_type_template_id_3543ab34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _stamp_vue_vue_type_template_id_3543ab34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3543ab34",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/stamp.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/stamp.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/papers/stamp.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stamp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./stamp.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/stamp.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_stamp_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/papers/stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stamp_vue_vue_type_style_index_0_id_3543ab34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/stamp.vue?vue&type=style&index=0&id=3543ab34&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stamp_vue_vue_type_style_index_0_id_3543ab34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stamp_vue_vue_type_style_index_0_id_3543ab34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stamp_vue_vue_type_style_index_0_id_3543ab34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_stamp_vue_vue_type_style_index_0_id_3543ab34_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/papers/stamp.vue?vue&type=template&id=3543ab34&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/papers/stamp.vue?vue&type=template&id=3543ab34&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stamp_vue_vue_type_template_id_3543ab34_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./stamp.vue?vue&type=template&id=3543ab34&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/stamp.vue?vue&type=template&id=3543ab34&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stamp_vue_vue_type_template_id_3543ab34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_stamp_vue_vue_type_template_id_3543ab34_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/papers/tax.vue":
/*!************************************************!*\
  !*** ./resources/js/components/papers/tax.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tax_vue_vue_type_template_id_2e60d90e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tax.vue?vue&type=template&id=2e60d90e&scoped=true& */ "./resources/js/components/papers/tax.vue?vue&type=template&id=2e60d90e&scoped=true&");
/* harmony import */ var _tax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tax.vue?vue&type=script&lang=js& */ "./resources/js/components/papers/tax.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _tax_vue_vue_type_style_index_0_id_2e60d90e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css& */ "./resources/js/components/papers/tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tax_vue_vue_type_template_id_2e60d90e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tax_vue_vue_type_template_id_2e60d90e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2e60d90e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/papers/tax.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/papers/tax.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/papers/tax.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./tax.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/tax.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/papers/tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/papers/tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_vue_vue_type_style_index_0_id_2e60d90e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/tax.vue?vue&type=style&index=0&id=2e60d90e&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_vue_vue_type_style_index_0_id_2e60d90e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_vue_vue_type_style_index_0_id_2e60d90e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_vue_vue_type_style_index_0_id_2e60d90e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_vue_vue_type_style_index_0_id_2e60d90e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/papers/tax.vue?vue&type=template&id=2e60d90e&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/papers/tax.vue?vue&type=template&id=2e60d90e&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_vue_vue_type_template_id_2e60d90e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./tax.vue?vue&type=template&id=2e60d90e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/papers/tax.vue?vue&type=template&id=2e60d90e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_vue_vue_type_template_id_2e60d90e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_tax_vue_vue_type_template_id_2e60d90e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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