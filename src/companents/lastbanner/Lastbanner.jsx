import React from 'react';
import './Lastbanner.css';
import bannerImg from '../../assets/BANNER.png'; 

const Lastbanner = ({ minecards }) => {
  return (
    <div className="last-banner-container">

      <div className="side-banner">
        <img src={bannerImg} alt="Banner" />
        <div className="side-banner-text">
          
          <h2>Iphone 14 Plus</h2>
          <p>Available In Stock!</p>
        </div>
      </div>

 
      <div className="product-grid">
        {minecards.map((item, index) => (
          <div key={index} className="product-mini-card">
            <div className="product-img-box">
              <img src={item.img} alt={item.name} />
            </div>
            <div className="product-details">
              <div className="price-row">
                <span className="new-price">${item.price}</span>
                <span className="old-price">${item.oldPrice}</span>
              </div>
              <h3 className="product-name">{item.name}</h3>
              <div className="rating-row">
                <span className="stars">{"★".repeat(item.stars)}</span>
                <span className="review-count">{item.information}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lastbanner;