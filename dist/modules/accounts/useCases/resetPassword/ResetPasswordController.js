"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResetPasswordController = void 0;
var _tsyringe = require("tsyringe");
var _ResetPasswordUseCase = require("./ResetPasswordUseCase");
class ResetPasswordController {
  async handle(req, res) {
    const {
      token
    } = req.query;
    const {
      password
    } = req.body;
    const resetPasswordUseCase = _tsyringe.container.resolve(_ResetPasswordUseCase.ResetPasswordUseCase);
    await resetPasswordUseCase.execute({
      password,
      token: String(token)
    });
    return res.send();
  }
}
exports.ResetPasswordController = ResetPasswordController;