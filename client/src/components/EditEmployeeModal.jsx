import { useState } from "react";
import "./EditEmployeeModal.css";
import Button from "./Button";

const EditEmployeeModal = ({ onCancel, onEdit, employee }) => {
  const [firstName, setFirstName] = useState(employee.first_name);
  const [lastName, setLastName] = useState(employee.last_name);
  const [role, setRole] = useState(employee.role);

  return (
    <div className="modal-ee">
      <div className="modal-content-ee">
        <h2>Edit Employee</h2>
        <form className="modal-form-ee">
          <input
            className="input-ee"
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className="input-ae"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <select
            className="input-ee"
            id="role"
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
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
            text={"Update"}
            onClick={() => onEdit(firstName, lastName, role)}
          />
        </div>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
