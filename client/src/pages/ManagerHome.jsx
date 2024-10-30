import "./ManagerHome.css";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button"; 

const ManagerHome = ({ handleMenuClick, handleReportsClick, handleEmployeesClick, handleInventoryClick }) => {
  return (
    <div className="ManagerHome-container">
      <PageHeader pageTitle="Admin Page" />
      <div className="bigButton-container">
        <Button text="Edit Menu" onClick={handleMenuClick} className="big-button" />
        <Button text="Reports" onClick={handleReportsClick} className="big-button" />
        <Button text="Manage Employees" onClick={handleEmployeesClick} className="big-button" />
        <Button text="Manage Inventory" onClick={handleInventoryClick} className="big-button" />
      </div>
    </div>
  );
};

export default ManagerHome;