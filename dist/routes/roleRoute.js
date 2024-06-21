"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const roleController_1 = require("../controllers/roleController");
router.get("/get/all", roleController_1.getAllRoles);
router.post("/create/new", roleController_1.createNewRole);
router.put("/update/:id", roleController_1.updateRole);
router.delete("/delete/:id", roleController_1.deleteRole);
exports.default = router;
