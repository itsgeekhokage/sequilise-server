/** @format */

// associations.ts
import Role from "./roleModel";
import AccessControl from "./accessControlModel";
import sequelize from "../db/mysql";
import { BelongsToManyOptions } from "sequelize";



export function setUpAssociations() {
  Role.belongsToMany(AccessControl, { through: "rolecontrols", sequelize });
  AccessControl.belongsToMany(Role, { through: "rolecontrols", sequelize });
}
