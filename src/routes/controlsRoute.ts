import express from "express";
import { createNewAccessControl, deleteAccessControl, getAllAccessControls, updateAccessControl } from "../controllers/accessControlController";

const router = express.Router();

router.get("/get/all", getAllAccessControls);
router.post("/create/new", createNewAccessControl);
router.put("/update/:id", updateAccessControl);
router.delete("/delete/:id", deleteAccessControl);

export default router;