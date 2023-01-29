"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersTokensRepositoryInMemory = void 0;
var _UserToken = require("../../infra/typeorm/entities/UserToken");
class UsersTokensRepositoryInMemory {
  constructor() {
    this.usersTokens = [];
  }
  async create({
    expires_date,
    refresh_token,
    user_id
  }) {
    const userToken = new _UserToken.UserToken();
    Object.assign(userToken, {
      expires_date,
      refresh_token,
      user_id
    });
    this.usersTokens.push(userToken);
    return userToken;
  }
  async findByUserIdAndRefreshToken(user_id, refresh_token) {
    return this.usersTokens.find(ut => ut.user_id === user_id && ut.refresh_token === refresh_token);
  }
  async deleteById(id) {
    const userToken = this.usersTokens.find(ut => ut.id === id);
    this.usersTokens.splice(this.usersTokens.indexOf(userToken));
  }
  async findByRefreshToken(refresh_token) {
    return this.usersTokens.find(ut => ut.refresh_token === refresh_token);
  }
}
exports.UsersTokensRepositoryInMemory = UsersTokensRepositoryInMemory;