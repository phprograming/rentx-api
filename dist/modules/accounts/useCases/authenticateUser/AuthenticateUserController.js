"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutheticateUserController = void 0;
var _tsyringe = require("tsyringe");
var _AuthenticateUserUseCase = require("./AuthenticateUserUseCase");
class AutheticateUserController {
  async handle(req, res) {
    const {
      password,
      email
    } = req.body;
    const autheticateUserUseCase = _tsyringe.container.resolve(_AuthenticateUserUseCase.AuthenticateUserUseCase);
    const token = await autheticateUserUseCase.execute({
      password,
      email
    });
    return res.json(token);
  }
}
exports.AutheticateUserController = AutheticateUserController;