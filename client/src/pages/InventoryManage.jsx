import axios from "axios";
import { useEffect, useState } from "react";
import "./InventoryManage.css";
import PageHeader from "../components/PageHeader";
import Icon from "../components/Icon";

const InventoryManage = () => {
  const [inventory, setInventory] = useState([]); // Inventory state

  // Fetch all inventory items
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const res = await axios.get("http://localhost:3000/inventory/get-inventory");
        console.log(res.data); // Check if data is being fetched
        setInventory(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchInventory();
  }, []);

  return (
    <div className="inventory-container">
      <PageHeader pageTitle="Inventory Management" />

      <div className="table-outer-container">
        <div className="table-inner-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Ingredient Name</th>
                <th>Current Stock</th>
                <th>Price</th>
                <th>Unit</th>
                <th>Minimum Stock</th>
                <th>Options</th>
              </tr>
            </thead>

            <tbody>
              {inventory.length > 0 ? (
                inventory.map((item, index) => (
                  <tr key={index}>
                    <td>{item.ingredient_id}</td>
                    <td>{item.ingredient_name}</td>
                    <td>{item.current_stock}</td>
                    <td>{item.price}</td>
                    <td>{item.unit}</td>
                    <td>{item.min_stock}</td>
                    <td className="icons-container">
                      <Icon src="src/assets/edit-icon.svg" alt="edit icon" />
                      <Icon
                        src="src/assets/delete-icon.svg"
                        alt="delete icon"
                        onClick={() => openDeleteModal(item)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No inventory items found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryManage;