/** @format */

import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../db/mysql";

class User extends Model {
  public id!: number;
  public user_id!: string;
  public name!: string;
  public password!: string;
  public is_active!: boolean;
  public updated_by!: string;
  public org_id!: string;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    updated_by: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    org_id: {
      type: DataTypes.STRING(128),
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);

export default User;
