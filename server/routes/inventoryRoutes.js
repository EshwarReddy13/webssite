import express from "express";
import {
  getInventoryItems,

} from "../controllers/inventoryController.js";

const router = express.Router();

router.get("/get-inventory", getInventoryItems);

export default router;