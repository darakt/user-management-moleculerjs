"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var sequelize = new _sequelize.Sequelize('mysql://root:password@mysql:3306/eventify'); // TODO: make it an env var

var User = sequelize.define("users", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: _sequelize.DataTypes.STRING,
  firstname: _sequelize.DataTypes.STRING,
  lastname: _sequelize.DataTypes.STRING,
  password: _sequelize.DataTypes.STRING,
  isComing: _sequelize.DataTypes.BOOLEAN,
  answeredOn: _sequelize.DataTypes.DATE,
  profilePicture: _sequelize.DataTypes.STRING,
  pictures: _sequelize.DataTypes.STRING,
  createdAt: {
    type: _sequelize.DataTypes.DATE,
    allowNull: false,
    defaultValue: _sequelize.DataTypes.NOW
  },
  updatedAt: {
    type: _sequelize.DataTypes.DATE,
    allowNull: true,
    defaultValue: _sequelize.DataTypes.NOW
  }
});
var _default = User;
exports["default"] = _default;