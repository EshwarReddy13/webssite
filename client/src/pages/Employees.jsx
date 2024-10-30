import axios from "axios";
import { useEffect, useState } from "react";
import "./Employees.css";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Icon from "../components/Icon";
import AddEmployeeModal from "../components/AddEmployeeModal";
import EditEmployeeModal from "../components/EditEmployeeModal";
import DeleteEmployeeModal from "../components/DeleteEmployeeModal";

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Fetch all employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/employee/get-employees"
        );
        console.log(res.data);
        setEmployees(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployees();
  }, []);

  // Open add modal
  const openAddModal = () => {
    setShowAddModal(true);
  };

  // Open edit modal
  const openEditModal = (employee) => {
    setShowEditModal(true);
    setSelectedEmployee(employee);
  };

  // Open delete modal
  const openDeleteModal = (employee) => {
    setShowDeleteModal(true);
    setSelectedEmployee(employee);
  };

  // Close add modal
  const closeAddModal = () => {
    setShowAddModal(false);
  };

  // Close edit modal
  const closeEditModal = () => {
    setShowEditModal(false);
    setSelectedEmployee(null);
  };

  // Close delete modal
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setSelectedEmployee(null);
  };

  // Add employee
  const addEmployee = async (firstName, lastName, role) => {
    try {
      const employee = {
        first_name: firstName,
        last_name: lastName,
        role: role,
      };

      const res = await axios.post(
        "http://localhost:3000/employee/add-employee",
        employee
      );
      // Re-render the employees list by adding the new employee
      setEmployees([...employees, res.data.employee]);
      closeAddModal();

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Edit employee
  const editEmployee = async (firstName, lastName, role) => {
    try {
      const employee = {
        first_name: firstName,
        last_name: lastName,
        role: role,
      };

      const res = await axios.put(
        `http://localhost:3000/employee/update-employee/${selectedEmployee.employee_id}`,
        employee
      );

      // Re-render the employees list by updating the edited employee
      setEmployees(
        employees.map((employee) =>
          employee.employee_id === selectedEmployee.employee_id
            ? { ...employee, ...res.data.employee }
            : employee
        )
      );

      setSelectedEmployee(null);
      closeEditModal();

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Delete employee
  const deleteEmployee = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/employee/delete-employee/${selectedEmployee.employee_id}`
      );

      // Re-render the employees list by removing the deleted employee
      setEmployees(
        employees.filter(
          (employee) => employee.employee_id !== selectedEmployee.employee_id
        )
      );

      setSelectedEmployee(null);
      closeDeleteModal();

      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="employees-container">
      <PageHeader pageTitle="Employees" />
      <div className="table-outer-container">
        <div className="table-inner-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Options</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((employee, index) => (
                <tr key={index}>
                  <td>{employee.employee_id}</td>
                  <td>{employee.first_name}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.role}</td>
                  <td className="icons-container">
                    <Icon
                      src="src/assets/edit-icon.svg"
                      alt="edit icon"
                      onClick={() => openEditModal(employee)}
                    />
                    <Icon
                      src="src/assets/delete-icon.svg"
                      alt="delete icon"
                      onClick={() => openDeleteModal(employee)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="button-container">
        <Button text="+" onClick={openAddModal} />
      </div>

      {showAddModal && (
        <AddEmployeeModal onCancel={closeAddModal} onAdd={addEmployee} />
      )}

      {showEditModal && (
        <EditEmployeeModal
          onCancel={closeEditModal}
          onEdit={editEmployee}
          employee={selectedEmployee}
        />
      )}

      {showDeleteModal && (
        <DeleteEmployeeModal
          onCancel={closeDeleteModal}
          onDelete={deleteEmployee}
          employee={selectedEmployee}
        />
      )}
    </div>
  );
};

export default Employees;
