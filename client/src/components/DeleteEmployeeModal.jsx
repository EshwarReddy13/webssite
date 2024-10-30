import "./DeleteEmployeeModal.css";
import Button from "./Button";

const DeleteEmployeeModal = ({ onCancel, onDelete, employee }) => {
  return (
    <div className="modal-de">
      <div className="modal-content-de">
        <h2 className="modal-header-de">Delete Employee</h2>

        <p className="modal-text-de">
          Are you sure you want to delete {employee.first_name}{" "}
          {employee.last_name}?
        </p>

        <div className="modal-actions-de">
          <Button text={"Cancel"} onClick={onCancel} />
          <Button text={"Delete"} onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default DeleteEmployeeModal;
