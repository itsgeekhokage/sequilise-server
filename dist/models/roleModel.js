"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../db/mysql"));
const defineRoleModel = (sequelize) => {
    return sequelize.define("Role", {
        role_id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        role: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        created_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        org_id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        updated_by: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        updated_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        agentAccessControls: {
            type: sequelize_1.DataTypes.STRING(3000),
            defaultValue: ""
        },
        adminAccessControls: {
            type: sequelize_1.DataTypes.STRING(3000),
            defaultValue: ""
        },
    }, {
        tableName: "roles",
        timestamps: false,
    });
};
const Role = defineRoleModel(mysql_1.default);
exports.default = Role;
