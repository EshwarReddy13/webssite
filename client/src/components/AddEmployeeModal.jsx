import { useState } from "react";
import "./AddEmployeeModal.css";
import Button from "./Button";

const AddEmployeeModal = ({ onCancel, onAdd }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");

  return (
    <div className="modal-ae">
      <div className="modal-content-ae">
        <h2>Add Employee</h2>
        <form className="modal-form-ae">
          <input
            className="input-ae"
            type="text"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="input-ae"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />

          <select
            className="input-ae"
            id="role"
            name="role"
            onChange={(e) => setRole(e.target.value)}
            defaultValue=""
          >
            <option value="" disabled>
              Select Role
            </option>
            <option value="Manager">Manager</option>
            <option value="Cashier">Cashier</option>
            <option value="Chef">Chef</option>
          </select>
        </form>

        <div className="modal-actions-ae">
          <Button text={"Cancel"} onClick={onCancel} />
          <Button
            text={"Add"}
            onClick={() => onAdd(firstName, lastName, role)}
          />
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
