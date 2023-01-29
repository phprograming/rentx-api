"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SendEmailController = void 0;
var _tsyringe = require("tsyringe");
var _SendEmailUseCase = require("./SendEmailUseCase");
class SendEmailController {
  async handle(req, res) {
    const {
      email
    } = req.body;
    const sendEmailUseCase = _tsyringe.container.resolve(_SendEmailUseCase.SendEmailUseCase);
    await sendEmailUseCase.execute(email);
    return res.send();
  }
}
exports.SendEmailController = SendEmailController;