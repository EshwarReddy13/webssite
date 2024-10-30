import React from 'react';
import './styles/OrderPage.css';
import BroccoliBeefImage from '../customerImages/Broccoli_Beef.png';
import ChickenEggRollImage from '../customerImages/Chicken_Egg_Roll.avif';
import DrPepperImage from '../customerImages/Dr_Pepper.avif';
import VeggieSpringRollImage from '../customerImages/Veggie_Spring_Roll.avif';
import WatermelonMangoRefresherImage from '../customerImages/Watermelon_Mango_Flavored_Refresher.avif';
import logo from '../customerImages/logo.png';


const OrderPage = () => {
  return (
    <div>
        <div className="navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <div className="navbar-links">
          <a href="/">Home</a>
          <span className="divider">|</span>
          <a href="#">About</a>
          <span className="divider">|</span>
          <a href="#">Services</a>
          <span className="divider">|</span>
          <a href="/order">Our Rewards</a>
        </div>
        <div className="navbar-actions">
          <button className="navbar-button">ORDER</button>
          <span role="img" aria-label="user" className="navbar-icon">👤</span>
        </div>
      </div>
      <h2 className="page-title">Order</h2>
        <div className="container">
        {/* Left Section: Order Summary */}
        <div className="order-summary">
            <button className="add-more">+ Add More Items</button>
            <h2>Your Order</h2>
            <div className="order-item">
            <img src={BroccoliBeefImage} alt="Broccoli Beef" className="order-image" />
            <div className="item-details">
                <h3>Broccoli Beef</h3>
                <p>Small</p>
                <div className="edit-remove">
                <button>Edit</button>
                <button>Remove</button>
                </div>
                <div className="quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
                </div>
            </div>
            <p className="item-price">$5.20</p>
            </div>

            {/* Recommended Items Section */}
            <h2>You May Also Like</h2>
            <div className="recommended-items">
            <div className="recommendation">
                <img src={WatermelonMangoRefresherImage} alt="Watermelon Mango Flavored Refresher" />
                <p>Watermelon Mango Flavored Refresher</p>
            </div>
            <div className="recommendation">
                <img src={ChickenEggRollImage} alt="Chicken Egg Roll" />
                <p>Chicken Egg Roll</p>
            </div>
            <div className="recommendation">
                <img src={DrPepperImage} alt="Dr Pepper" />
                <p>Dr Pepper</p>
            </div>
            <div className="recommendation">
                <img src={VeggieSpringRollImage} alt="Veggie Spring Roll" />
                <p>Veggie Spring Roll</p>
            </div>
            </div>
        </div>

        {/* Right Section: Pickup Details */}
        <div className="pickup-details">
            <h3>Additional Requests?</h3>
            <div className="additional-requests">
            <label>
                <input type="checkbox" />
                Utensils
            </label>
            <label>
                <input type="checkbox" />
                Napkins
            </label>
            </div>
            <h3>Special Requests</h3>
            <input type="text" className="special-request-input" placeholder="Add Note" />
            <h3>Coupon Code</h3>
            <div className="coupon-code">
            <input type="text" placeholder="Enter Code" />
            <button>Add</button>
            </div>
            <h3>Payment Method</h3>
            <div className="payment-method">
            <label>
                <input type="radio" name="payment" />
                Credit Card
            </label>
            <label>
                <input type="radio" name="payment" />
                Debit Card
            </label>
            <label>
                <input type="radio" name="payment" />
                Cash
            </label>
            </div>
            <button className="checkout">Checkout</button>
            <br></br>
            <label>Subtotal : $5.20</label>
            <br></br>
            <label>Tax : $0.31</label>
            <br></br>
            <label>Total : $5.51</label>

        </div>
        </div>
    </div>
  );
};

export default OrderPage;
