import axios from "axios";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import GreetingPage from "./pages/GreetingPage";
import CustomerHome from "./pages/CustomerHome";
import ManagerHome from "./pages/ManagerHome";
import CashierHome from "./pages/CashierHome";
import ReportsPage from "./pages/ReportsPage";
import InventoryManage from "./pages/InventoryManage";
import EditMenu from "./pages/EditMenu";
import Employees from "./pages/Employees";
import OrderPage from "./pages/OrderPage";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Async function to fetch menu data from the server
    const fetchItems = async () => {
      try {
        const res = await axios.get("http://localhost:3000/kiosk/meal-types");

        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    // Call the async function
    fetchItems();
  }, []);

  const handleManagerClick = () => {
    navigate("/manager");
  };
  const handleCashierClick = () => {
    navigate("/cashier");
  };

  const handlePlaceOrderClick = () => {
    navigate("/customer");
  };

  const handleMenuClick = () => {
    navigate("/menu");
  };

  const handleReportsClick = () => {
    navigate("/reports");
  };

  const handleEmployeesClick = () => {
    navigate("/employees");
  }

  const handleInventoryClick = () => {
    navigate("/inventory");
  };


  return (
    <div className="global">
      <Routes>
        <Route
          path="/"
          element={
            <GreetingPage
              handleManagerClick={handleManagerClick}
              handleCashierClick={handleCashierClick}
              handlePlaceOrderClick={handlePlaceOrderClick}
            />
          }
        />

        <Route path="/customer" element={<CustomerHome />} />
        <Route
          path="/manager"
          element={
            <ManagerHome
              handleMenuClick={handleMenuClick}
              handleReportsClick={handleReportsClick}
              handleInventoryClick={handleInventoryClick}
              handleEmployeesClick={handleEmployeesClick}
            />
          }
        />
        <Route path="/cashier" element={<CashierHome />} />
        <Route path="/menu" element={<EditMenu />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/inventory" element={<InventoryManage />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
};

export default App;
