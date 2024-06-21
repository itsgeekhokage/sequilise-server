/** @format */

import { Sequelize, Model, DataTypes } from "sequelize";
import sequelize from "../db/mysql";

const Role = sequelize.define(
  "role",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    updatedAt: "updated_at", // Example of specifying updatedAt field name
    createdAt: "created_at", // Example of specifying createdAt field name
    underscored: true, // If you want Sequelize to automatically underscore field names
  }
);

export default Role;
