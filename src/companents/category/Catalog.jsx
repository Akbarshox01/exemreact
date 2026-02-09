import React from 'react';
import './Catalog.css';

const Catalog = ({ categories }) => {
  return (
    <div className='mine_cards'>
      {categories.map((item, index) => (
        <div className='card_item' key={index}>
          <div className='card_image'>
            <img src={item.img} alt={item.name} />
          </div>
          
          <div className='card_content'>
            <h2>{item.name}</h2>
            <div className='sub_links'>
              <p>{item.title}</p>
              <p>{item.title1}</p>
              <p>{item.title2}</p>
              <p>{item.title3}</p>
            </div>
            <button className='all_btn'>
              {item.button} <span>→</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Catalog;