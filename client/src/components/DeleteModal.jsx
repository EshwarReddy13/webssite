import "./DeleteModal.css";
import Button from "./Button";

const DeleteModal = ({ onCancel, onDelete, employee }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="modal-header">Delete Employee</h2>

        <p className="modal-text">
          Are you sure you want to delete {employee.first_name}{" "}
          {employee.last_name}?
        </p>

        <div className="modal-actions">
          <Button text={"Cancel"} onClick={onCancel} />
          <Button text={"Delete"} onClick={onDelete} />
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;