import db from "../db.js";

const getInventoryItems = async (req, res) => {
  try {
    const inventoryItem = await db.any("SELECT * FROM inventory");

    res.json(inventoryItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getInventoryItems};