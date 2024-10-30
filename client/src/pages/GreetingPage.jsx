import "./GreetingPage.css";
import Button from "../components/Button"; 

const GreetingPage = ({ handlePlaceOrderClick, handleManagerClick, handleCashierClick }) => {
  return (
    <div className="GreetingPage-container">
      <div className="vbox left-box">
        <Button text="Translate" className="small-button" />
        <Button text="Accessibility Options" className="small-button" />
      </div>
      <div className="center-box">
        <h1>Panda Express</h1>
        <div className="panda-logo">
          <img src="/panda.png" alt="Panda Logo" />
        </div>
        <Button text="Place Order" onClick={handlePlaceOrderClick} className="big-button" />
      </div>
      <div className="right-box">
        <Button text="Manager" onClick={handleManagerClick} className="small-button" />
        <Button text="Cashier" onClick={handleCashierClick} className="small-button" />
      </div>
    </div>
  );
};

export default GreetingPage;