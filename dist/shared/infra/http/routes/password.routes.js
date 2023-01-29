"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passwordRoutes = void 0;
var _ResetPasswordController = require("../../../../modules/accounts/useCases/resetPassword/ResetPasswordController");
var _SendEmailController = require("../../../../modules/accounts/useCases/sendEmail/SendEmailController");
var _express = require("express");
const passwordRoutes = (0, _express.Router)();
exports.passwordRoutes = passwordRoutes;
const sendMailController = new _SendEmailController.SendEmailController();
const resetPasswordController = new _ResetPasswordController.ResetPasswordController();
passwordRoutes.post("/forgot", sendMailController.handle);
passwordRoutes.post("/reset", resetPasswordController.handle);