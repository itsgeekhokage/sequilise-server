"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRole = exports.updateRole = exports.createNewRole = exports.getAllRoles = void 0;
const roleModel_1 = __importDefault(require("../models/roleModel"));
const getAllRoles = async (req, res) => {
    try {
        const roles = await roleModel_1.default.findAll();
        res.status(200).json({ data: roles, message: "Roles fetched successfully..." });
    }
    catch (error) {
        console.log(error);
        res.status(400).json({ message: "internal server error" });
    }
};
exports.getAllRoles = getAllRoles;
const createNewRole = async (req, res) => {
    const { role, updated_by, agentAccessControls, adminAccessControls } = req.body;
    try {
        const newRole = {
            role,
            created_at: Date.now(),
            org_id: "1",
            updated_by,
            updated_at: Date.now(),
            adminAccessControls,
            agentAccessControls
        };
        const result = await roleModel_1.default.create(newRole);
        res.status(200).json({ data: result, message: "role create successfully..." });
    }
    catch (error) {
        res.status(400).json({ error, message: "internal server error" });
        console.log(error);
    }
};
exports.createNewRole = createNewRole;
const updateRole = async (req, res) => {
    const id = req.params.id;
    const { role, updated_by, agentAccessControls, adminAccessControls } = req.body;
    try {
        let preRole = await roleModel_1.default.findByPk(id);
        if (preRole) {
            preRole.role = role;
            preRole.updated_by = updated_by;
            preRole.agentAccessControls = agentAccessControls;
            preRole.adminAccessControls = adminAccessControls;
            await preRole.save();
            res.status(200).json({ message: "role successfully updated", data: preRole });
        }
        res.status(404).json({ message: "role not found" });
    }
    catch (error) {
        res.status(400).json(error);
        console.log(error);
    }
};
exports.updateRole = updateRole;
const deleteRole = async (req, res) => {
    try {
        const { id } = req.params;
        const role = await roleModel_1.default.findByPk(id);
        if (role) {
            await role.destroy();
            res.status(200).send({ message: "Role successfully deleted..." });
        }
        else {
            res.status(404).json({ message: "role not found" });
        }
    }
    catch (error) {
        res.status(500).json("internal server error");
    }
};
exports.deleteRole = deleteRole;
