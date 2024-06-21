"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accessControlModel_1 = __importDefault(require("../models/accessControlModel"));
const getAllAccessControls = async (req, res) => {
    try {
        const controls = await accessControlModel_1.default.findAll();
        res.status(200).json({ data: controls, message: "controls fetched successfully" });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "failed to fetch access control! internal server error" });
    }
};
const createNewAccessControl = async (req, res) => {
    const { name, path, type, updated_by } = req.body;
    try {
        const newControl = {
            name,
            path,
            type,
            updated_by
        };
        const result = await accessControlModel_1.default.create(newControl);
        res
            .status(200)
            .json({ data: result, message: "control create successfully..." });
    }
    catch (error) {
        res.status(400).json({ error, message: "internal server error" });
        console.log(error);
    }
};
