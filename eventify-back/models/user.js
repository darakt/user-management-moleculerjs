import { Sequelize, Model, DataTypes } from "sequelize";

const sequelize = new Sequelize('mysql://root:password@mysql:3306/eventify') // TODO: make it an env var
const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: DataTypes.STRING,
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING,
  password: DataTypes.STRING,
  isComing: DataTypes.BOOLEAN,
  answeredOn: DataTypes.DATE,
  profilePicture: DataTypes.STRING,
  pictures: DataTypes.STRING,
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW,
  },
});

export default User;
