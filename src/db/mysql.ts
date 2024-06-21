/** @format */

import { Sequelize } from "sequelize";

const sequelize = new Sequelize("capi", "root", "@Shivam123", {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default sequelize;
