import express from "express"
const router = express.Router();
import {createNewRole, deleteRole, getAllRoles, updateRole} from "../controllers/roleController";

router.get("/get/all", getAllRoles);
router.post("/create/new", createNewRole);
router.put("/update/:id", updateRole);
router.delete("/delete/:id", deleteRole);

export default router;