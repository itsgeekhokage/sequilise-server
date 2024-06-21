"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const mysql_1 = __importDefault(require("../db/mysql"));
const defineAccessControlModel = (sequelize) => {
    return sequelize.define("AccessControl", {
        name: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        path: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        type: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        created_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updated_by: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        org_id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            defaultValue: "1"
        },
    }, {
        tableName: "access_controls",
        timestamps: false,
    });
};
const AccessControl = defineAccessControlModel(mysql_1.default);
exports.default = AccessControl;
