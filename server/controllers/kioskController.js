import db from "../db.js";

const getMealTypes = async (req, res) => {
  try {
    const mealTypes = await db.any(
      "SELECT * FROM menu_item WHERE item_category = 'Meal'"
    );

    res.json(mealTypes);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getEntrees = async (req, res) => {
  try {
    const entrees = await db.any(
      "SELECT * FROM menu_item WHERE item_category = 'Entree'"
    );

    res.json(entrees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getSides = async (req, res) => {
  try {
    const sides = await db.any(
      "SELECT * FROM menu_item WHERE item_category = 'Side'"
    );

    res.json(sides);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAppetizers = async (req, res) => {
  try {
    const appetizers = await db.any(
      "SELECT * FROM menu_item WHERE item_category = 'Appetizer'"
    );

    res.json(appetizers);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getDrinks = async (req, res) => {
  try {
    const drinks = await db.any(
      "SELECT * FROM menu_item WHERE item_category = 'Drink' OR item_category = 'Bottle' OR item_category = 'Refresher'"
    );

    res.json(drinks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const postOrder = async (req, res) => {
  try {
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getMealTypes, getEntrees, getSides, getAppetizers,getDrinks, postOrder };
