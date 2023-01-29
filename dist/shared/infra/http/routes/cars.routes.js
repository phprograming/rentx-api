"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.carsRoutes = void 0;
var _express = require("express");
var _multer = _interopRequireDefault(require("multer"));
var _CreateCarController = require("../../../../modules/cars/useCases/createCar/CreateCarController");
var _listAvailableCarsController = require("../../../../modules/cars/useCases/listAvailableCars/listAvailableCarsController");
var _CreateCarsSpecificationController = require("../../../../modules/cars/useCases/createCarSpecification/CreateCarsSpecificationController");
var _UploadCarImagesController = require("../../../../modules/cars/useCases/uploadCarImage/UploadCarImagesController");
var _ensureAuthenticated = require("../middlewares/ensureAuthenticated");
var _ensureAdmin = require("../middlewares/ensureAdmin");
var _upload = _interopRequireDefault(require("../../../../config/upload"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const carsRoutes = (0, _express.Router)();
exports.carsRoutes = carsRoutes;
const createCarController = new _CreateCarController.CreateCarController();
const listAvailableCarsController = new _listAvailableCarsController.ListAvailableCarsController();
const createCarSpecificationController = new _CreateCarsSpecificationController.CreateCarSpecificationController();
const uploadCarImagesController = new _UploadCarImagesController.UploadCarImagesController();
const upload = (0, _multer.default)(_upload.default);
carsRoutes.post("/", _ensureAuthenticated.ensureAuthenticated, _ensureAdmin.ensureAdmin, createCarController.handle);
carsRoutes.get("/available", listAvailableCarsController.handle);
carsRoutes.post("/specifications/:id", _ensureAuthenticated.ensureAuthenticated, _ensureAdmin.ensureAdmin, createCarSpecificationController.handle);
carsRoutes.post("/images/:id", _ensureAuthenticated.ensureAuthenticated, _ensureAdmin.ensureAdmin, upload.array("images"), uploadCarImagesController.handle);