import React, { useState } from 'react';

const SideModal = ({ side, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('small'); // 'small' or 'large'

  if (!side) return null;

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{side.name}</h2>
        <img src={side.image} alt={side.name} className="modal-image" />
        

        {/* Quantity Selector */}
        <div className="quantity-selector">
          <button onClick={decrementQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>

        {/* Size Selector */}
        <div className="size-selector">
          <button 
            onClick={() => handleSizeSelect('small')} 
            className={selectedSize === 'small' ? 'size-button selected' : 'size-button'}
          >
            Small +${side.mediumPrice}
          </button>
          <button 
            onClick={() => handleSizeSelect('large')} 
            className={selectedSize === 'large' ? 'size-button selected' : 'size-button'}
          >
            Large +${side.largePrice}
          </button>
        </div>

        
        <button className="add-to-order-button">Add to Order</button>
      </div>
    </div>
  );
};

export default SideModal;
