import React from 'react';
import './Products.css'; 

const products = [
  {
    id: '1',
    name: 'Mouse',
    description: 'Mouse from logitech',
    price: 500,
    imageUrl: 'mouse.png'
  },
  {
    id: '2',
    name: 'Keyboard',
    description: 'Mechanical keyboard',
    price: 1200,
    imageUrl: 'Keyboard.png'
  },
  {
    id: '3',
    name: 'Monitor',
    description: '27-inch 4K monitor',
    price: 30000,
    imageUrl: 'monitor.png'
  }
];

const Products = () => {
 
  const hasMouse = products.some(product => product.name.toLowerCase() === 'mouse');

  return (
    <div className="products-page">
      {/* Mouse Products Heading */}
      {hasMouse && (
        <div className="category-heading">
          <h2>Computer Peripherals</h2>
          <div className="underline"></div>
        </div>
      )}

      <div className="products-container">
        {products.map(({ id, name, description, price, imageUrl }) => (
          <div key={id} className="product-card">
            <div className="product-image">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={`Image of ${name}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder-product.jpg';
                  }}
                />
              ) : (
                <div className="image-placeholder">
                  <img src="#" alt="" />
                </div>
              )}
            </div>
            <div className="product-details">
              <h3>{name}</h3>
              <p className="product-description">{description}</p>
              <div className="product-footer">
                <span className="product-price">₹{price.toFixed(2)}</span>
                <button
                  className="add-to-cart"
                  data-item-id={id}
                  data-item-image={imageUrl || '/images/placeholder-product.jpg'}
                  data-item-name={name}
                  data-item-url="/"
                  data-item-price={price}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;