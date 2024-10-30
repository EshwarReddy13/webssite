import db from "../db.js";

const getEmployees = async (req, res) => {
  try {
    const employees = await db.any("SELECT * FROM employee");

    res.json(employees);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const addEmployee = async (req, res) => {
  try {
    // Extract the first_name, last_name, and role from the request body
    const { first_name, last_name, role } = req.body;

    if (!first_name || !last_name || !role) {
      return res.status(400).json({ message: "Please fill out all fields" });
    }

    const newEmployee = await db.one(
      "INSERT INTO employee (first_name, last_name, role) VALUES ($1, $2, $3) RETURNING *",
      [first_name, last_name, role]
    );

    res.json({ employee: newEmployee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    // Extract the id from the request parameters
    const { id } = req.params;
    // Extract the first_name, last_name, and role from the request body
    const { first_name, last_name, role } = req.body;

    const updatedEmployee = await db.one(
      "UPDATE employee SET first_name = $1, last_name = $2, role = $3 WHERE employee_id = $4 RETURNING *",
      [first_name, last_name, role, id]
    );

    res.json({ employee: updatedEmployee });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    // Extract the id from the request parameters
    const { id } = req.params;

    await db.none("DELETE FROM employee WHERE employee_id = $1", [id]);

    res.json({ message: `Employee ${id} deleted` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { getEmployees, addEmployee, updateEmployee, deleteEmployee };
