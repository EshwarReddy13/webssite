import React from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './styles/CashierHome.css';
import axios from "axios";
import { useEffect, useState } from "react";
import "./Employees.css";


const CashierHome = () => {
  const [activeTab, setActiveTab] = useState('Orders');
  const [showInput, setShowInput] = useState(false); // State to manage input field visibility
  const [inputValue, setInputValue] = useState(''); // State to manage input value
  const [keyboardVisible, setKeyboardVisible] = useState(false); // State to manage keyboard visibility
  const [numPadVisible, setNumPadVisible] = useState(false); // State to manage num pad visibility
  const [currentOrder, setCurrentOrder] = useState([]); // Initialize currentOrder state
  const [entrees, setEntrees] = useState([]); // Initialize entrees state
  const [sides, setSides] = useState([]); // Initialize sides state
  const [appetizers, setAppetizers] = useState([]); // Initialize appetizers state

  // Fetch all employees
  useEffect(() => {
    const fetchEntrees = async () => {
      try {
        const res = await axios.get('http://localhost:3000/kiosk/entrees');
        setEntrees(res.data);
        const res2 = await axios.get('http://localhost:3000/kiosk/sides');
        setSides(res2.data);
        const res3 = await axios.get('http://localhost:3000/kiosk/appetizers');
        setAppetizers(res3.data);
        console.log(res3.data);
        console.log(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEntrees();
  }, []);

  // Log entrees state whenever it changes
  useEffect(() => {
    console.log('Updated entrees:', entrees);
  }, [entrees]);

  


  const toggleInput = () => {
    setShowInput(!showInput);
    setKeyboardVisible(!keyboardVisible);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onChange = (input) => {
    setInputValue(input);
  };
  const openTab = (e, tabName) => {
    setActiveTab(tabName);
  };
  const toggleNumpad = () => {
    setNumPadVisible(!numPadVisible);
  }
  const handleEntreeClick = (id) => {
    console.log('Entree clicked:', id);
    currentOrder.push(id);
    setCurrentOrder([...currentOrder]);
  };




  const handleKeyPress = (button) => { // for item name
    if (button === '{enter}') {
      console.log(entrees);
      // Perform the desired action when Enter key is pressed on the virtual keyboard
      console.log('Enter key pressed on virtual keyboard:', inputValue);
      currentOrder.push(inputValue);
      console.log(currentOrder);
      setInputValue(''); // Clear the input field after adding the item to the order

      // Example: Hide the keyboard and input field
      
      setShowInput(false);
      setKeyboardVisible(false);
      setActiveTab('Orders');
    }
  };

  


  const tabs = [
    { name: 'Bowl', label: 'Bowl' },
    { name: 'Plate', label: 'Plate' },
    { name: 'Bigger Plate', label: 'Bigger Plate' },
    { name: 'Entree', label: 'Entree' },
    { name: 'Side', label: 'Side' },
    { name: 'Appetizer', label: 'Appetizer' },
    { name: 'Drink', label: 'Drink' },
  ];


  return (
    <div className = "overall">
    <div className="cashierbackground">
      <div className="menu">
        <div className="tabs">
          <h1>Cashier    Home</h1>
          <div className="tab">
            {tabs.map((tab, index) => (
              <button
                key={index}
                className="tablinks"
                onClick={(e) => openTab(e, tab.name)}
              >
                {tab.label}
              </button>
            ))}
            
          </div>
          <div className="menuItems">
            {activeTab === 'Bowl' && (
              <>
                <h3>Bowl</h3>
                <div className="menu-item-list-container">
                  
                  
                  
                  <div className="menu-item-list">
                    {entrees.map((entree) => (
                      <button
                        key={entree.menu_item_id}
                        className="menu-item-button"
                        onClick={() => handleEntreeClick(entree.item_name)}
                      >
                        {entree.item_name}
                      </button>
                    ))}
                  </div>
                  <div className="menu-item-list">
                    {appetizers.map((appetizer) => (
                      <button
                        key={appetizer.menu_item_id}
                        className="menu-item-button"
                        onClick={() => handleEntreeClick(appetizer.item_name)}
                      >
                        {appetizer.item_name}
                      </button>
                    ))}
                    
                  </div>
                  
                  
                  
                

                </div>
                

              </>
            )}
            {activeTab === 'Plate' && (
              <>
                <h3>Plate</h3>
                <p>Menu items will go here</p>
              </>
            )}
            {activeTab === 'Bigger Plate' && (
              <>
                <h3>Bigger Plate</h3>
                <p>Account details will go here</p>
              </>
            )}
            {activeTab === 'Entree' && (
              <>
                <h3>Entree</h3>
                <p>Account details will go here</p>
              </>
            )}
            {activeTab === 'Side' && (
              <>
                <h3>Side</h3>
                <p>Account details will go here</p>
              </>
            )}
            {activeTab === 'Appetizer' && (
              <>
                <h3>Appetizer</h3>
                <p>Account details will go here</p>
              </>
            )}
            {activeTab === 'Drink' && (
              <>
                <h3>Drink</h3>
                <p>Account details will go here</p>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="order">
        <div className="orderItems">
          <h2>Current Order</h2>
          <ul>
                  {currentOrder.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
        </div>

        <button className="checkout" onClick={(e) => openTab(e, 'Drink')}>Checkout</button>
        <button className="enter_item" onClick={toggleInput}>Enter Item</button>

        {showInput && ( //makes text box appear
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Enter item details"
          />
        )}
      </div>
      

    </div>
    {keyboardVisible && (
        <Keyboard
          onChange={onChange}
          onKeyPress={handleKeyPress} // Handles the Enter key press event
          inputName="inputValue"
          layoutName="default"
        />
      )}
    </div>

  );
};

export default CashierHome;