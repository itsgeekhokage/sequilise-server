/** @format */

import { DataTypes, Model } from "sequelize";
import sequelize from "../db/mysql"; // Assuming this imports your Sequelize instance

class Project extends Model {
  public id!: number;
  public project_name!: string;
  public project_code!: string;
  public type!: string;
  public status!: string;
  public deadline!: Date;
  public audio_play_limit!: number;
  public updated_by!: string;
  public org_id!: number;
}

Project.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    project_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    audio_play_limit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    updated_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    org_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Project",
    tableName: "projects",
    updatedAt : "updated_at",
    createdAt : "created_at"
  }
);

export default Project;
