import React, { useState } from 'react';

const AppetizerModal = ({ appetizer, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('small'); // 'small' or 'large'

  if (!appetizer) return null;

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={appetizer.image} alt={appetizer.name} className="modal-image" />
        <h2>{appetizer.name}</h2>

        {/* Size Selector */}
        <div className="size-selector">
          <button 
            onClick={() => handleSizeSelect('small')} 
            className={selectedSize === 'small' ? 'size-button selected' : 'size-button'}
          >
            Small (1 pc) +${appetizer.smallPrice}
          </button>
          <button 
            onClick={() => handleSizeSelect('large')} 
            className={selectedSize === 'large' ? 'size-button selected' : 'size-button'}
          >
            Large (6 pcs) +${appetizer.largePrice}
          </button>
        </div>

        {/* Quantity Selector */}
        <div className="quantity-selector">
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>

        <h3>Add Sauce</h3>
        <ul>
          {appetizer.sauces.map((sauce, index) => (
            <li key={index}>
              <span>{sauce.name}</span>
              <button>+</button>
            </li>
          ))}
        </ul>
        
        <button className="add-to-order-button">Add to Order</button>
      </div>
    </div>
  );
};

export default AppetizerModal;
