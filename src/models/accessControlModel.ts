/** @format */

import { Sequelize, Model, DataTypes } from "sequelize";

class AccessControl extends Model {
  public id!: number;
  public name!: string;
  // Other attributes

  static initialize(sequelize: Sequelize) {
    this.init(
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
        // Define other attributes
      },
      {
        sequelize,
        modelName: "AccessControl",
        tableName: "access_controls",
        updatedAt: "updated_at",
        createdAt: "created_at",
      }
    );
  }
}

export default AccessControl;
