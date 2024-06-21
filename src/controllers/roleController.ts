/** @format */

import { Request, Response } from "express";
import Role from "../models/roleModel";
import AccessControl from "../models/accessControlModel";


const getAllRoles = async (req: Request, res: Response) => {
  try {
    const roles = await Role.findAll();
    res
      .status(200)
      .json({ data: roles, message: "Roles fetched successfully..." });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "internal server error" });
  }
};
const createNewRole = async (req: Request, res: Response) => {
  const { name, controls, updated_by } = req.body;

  try {
    const newRoleData = {
      name,
      org_id: 1, // Assuming org_id is always 1; adjust if needed
      updated_by,
    };

    // Create the new role
    const newRole = await Role.create(newRoleData);

    // Find the access control instances by their IDs
    const controlInstances = await AccessControl.findAll({
      where: {
        id: controls,
      },
    });

    // Add the access controls to the role
    await newRole.addAccessControls(controlInstances);

    res
      .status(200)
      .json({ data: newRole, message: "Role created successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({message: "Internal server error" });
  }
};


const updateRole = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { name, updated_by } =
    req.body;
  try {
    let preRole = await Role.findByPk(id);
    if (preRole) {
      preRole.name = name;
      preRole.updated_by = updated_by;
      await preRole.save();
      res
        .status(200)
        .json({ message: "Role successfully updated", data: preRole });
    }
    res.status(404).json({ message: "Role not found" });
  } catch (error) {
    res.status(400).json(error);
    console.log(error);
  }
};

const deleteRole = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const role = await Role.findByPk(id);
    if (role) {
      await role.destroy();
      res.status(200).send({ message: "Role successfully deleted..." });
    } else {
      res.status(404).json({ message: "Role not found" });
    }
  } catch (error) {
    res.status(500).json("internal server error");
  }
};

export { getAllRoles, createNewRole, updateRole, deleteRole };
