"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("./db/mysql"));
const roleRoute_1 = __importDefault(require("./routes/roleRoute"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use("/role", roleRoute_1.default);
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});
mysql_1.default
    .sync()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error("Unable to connect to the database:", error);
});
