/** @format */

import { Request, Response } from "express";
import AccessControl from "../models/accessControlModel";

const getAllAccessControls = async (req: Request, res: Response) => {
  try {
    const controls = await AccessControl.findAll();
    res
      .status(200)
      .json({ data: controls, message: "controls fetched successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({
        message: "failed to fetch access control! internal server error",
      });
  }
};

const createNewAccessControl = async (req: Request, res: Response) => {
  const { name, path, type, updated_by } = req.body;

  try {
    const newControl = {
      name,
      path,
      type,
      updated_by,
      org_id: 1,
    };

    const result = await AccessControl.create(newControl);
    res
      .status(200)
      .json({ data: result, message: "control create successfully..." });
  } catch (error) {
    res.status(400).json({ error, message: "internal server error" });
    console.log(error);
  }
};

const updateAccessControl = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, path, type, updated_by, org_id } = req.body;
  try {
    let preControl = await AccessControl.findByPk(id);
    if (preControl) {
      preControl.name = name || preControl.name;
      preControl.path = path || preControl.path;
      preControl.type = type || preControl.type;
      preControl.updated_by = updated_by || preControl.updated_by;
      preControl.org_id = org_id || preControl.org_id;

      await preControl.save();

      res
        .status(200)
        .json({ data: preControl, message: "updated successfully" });
    }
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

const deleteAccessControl = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const control = await AccessControl.findByPk(id);
    if (!control) {
      res.status(404).json({ message: "control not found" });
    } else {
      await control?.destroy();
      res.status(200).json({ message: "deleted successfully..." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
};

export {
  createNewAccessControl,
  getAllAccessControls,
  updateAccessControl,
  deleteAccessControl,
};
