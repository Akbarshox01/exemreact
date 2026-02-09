import React from 'react';
import Header from './companents/header/Header';
import Banner from './companents/banner/Banner';
import Card from './companents/flash_sale/Card';
import keybord from '../src/assets/keybord.png';
import { GiShoppingCart } from 'react-icons/gi';
import Catalog from './companents/category/Catalog';
import laptob from '../src/assets/laptob.jpg'
import Bigbanner from './companents/bigbanner2/Bigbanner';
import Iphones from './companents/newiphones/Iphones';
import iphone from '../src/assets/iphone14.webp'
import Dablebanner from './companents/divs/Dablebanner';
import Carded from './companents/mapflored/Carded';
import mack from '../src/assets/mack.jpg'
import MacBanner from './companents/macbanner/Macbanner';
import Lastbanner from './companents/lastbanner/Lastbanner';
import Footer from './companents/footer/Footer';
import airpods from'../src/assets/airpods.jpg';
import { Route, Routes } from 'react-router-dom';
import Shop from './pages/shop/Shop';

import Vloges from './pages/blog/Vloges';
const two_cards = [
    {
      img:keybord,
      name:'MX MASTER 3S Performance  Wireless Mouse',
      price:'$29.99',
      stars:'⭐⭐⭐⭐⭐',
      information:'12 Reviews',
      sold:'Sold: 16',
      avi:'Available 64',
      days:'02',
      hour:'24',
      mins:'14',
      secs:'56',
      button:'Add to cart'
      

    },
    {
      img:keybord,
      name:'Sony DualSense Edge Wireless Controller ',
      price:'$29.99',
      stars:'⭐⭐⭐⭐⭐',
      information:'12 Reviews',
      sold:'Sold: 16',
      avi:'Available 64',
      days:'02',
      hour:'24',
      mins:'14',
      secs:'56',
      button:' Add to cart'
    }
  ]

  const categories=[
    {
      img:laptob,
      name:'Smartphones',
      title:'iPhone',
      title1:'iPhone Accessories',
      title2:'Postpaids Phones',
      title3:'Sale off',
      button:'All smartphones -->',
    },
     {
      img:laptob,
      name:'camera',
      title:'iPhone',
      title1:'iPhone Accessories',
      title2:'Postpaids Phones',
      title3:'Sale off',
      button:'All smartphones -->',
    },
         {
      img:laptob,
      name:'Wristwatch',
      title:'iPhone',
      title1:'iPhone Accessories',
      title2:'Postpaids Phones',
      title3:'Sale off',
      button:'All smartphones -->',
    },
         {
      img:laptob,
      name:'Headphones',
      title:'iPhone',
      title1:'iPhone Accessories',
      title2:'Postpaids Phones',
      title3:'Sale off',
      button:'All smartphones -->',
    },     {
      img:laptob,
      name:'Tablets',
      title:'iPhone',
      title1:'iPhone Accessories',
      title2:'Postpaids Phones',
      title3:'Sale off',
      button:'All smartphones -->',
    },     {
      img:laptob,
      name:'Laptop',
      title:'iPhone',
      title1:'iPhone Accessories',
      title2:'Postpaids Phones',
      title3:'Sale off',
      button:'All smartphones -->',
    },
  ]

const phones=[
  {
    img:iphone,
    price:'$25.00',
    name:'iPhone 14 Pro Max',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  },

    {
    img:iphone,
    price:'$45.00',
    name:'AirPods (3rd generation) with Lightning Charging Case',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  },


    {
    img:iphone,
    price:'$825.00',
    name:'Apple Iphone 14 - 128GB Midnight - Genuine Product',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  },

    {
    img:iphone,
    price:'$165.00',
    name:'Canon Eos 450D Lens Kit 18-55Mm F/3.5-5.6 Is',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  },
  
    {
    img:iphone,
    price:'$425.00',
    name:'Apple iPad Pro 11 inch M1 2021 Wifi 128GB|8GB',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  },
    {
    img:iphone,
    price:'$465.00',
    name:'Smart Tivi Samsung 4K 75 inch 75AU7000 UHD',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  },
    {
    img:iphone,
    price:'$105.00',
    name:'JBL WH-CH520 Wireless Bluetooth Earphones Headset',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  },
    {
    img:iphone,
    price:'$205.00',
    name:'Apple Watch Series 8 GPS - Cellular, Aluminum Case',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  },
]

const flored = [

  {
    img:mack,
    price:'$825.00',
    name:'Sony PlayStation 5 - PS5 Standard Edition',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  
  },

  
  {
    img:mack,
    price:'$425.00',
    name:'Macbook Air 2020 13 inch Apple M1 -  8GB RAM - 256GB SSD',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  
  },

  
  {
    img:mack,
    price:'$265.00',
    name:'Apple Watch Series 8 GPS - Cellular, Aluminum Case',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  
  },

  
  {
    img:mack,
    price:'$165.00',
    name:'Logitech AX50 Wireless Solar Powered Keyboard',
    stars:'⭐⭐⭐⭐⭐',
    information:'12 Reviews',
  
  },

  
]

const minecards= [
{
  img:airpods,
  price:'$55.00',
  name:'JBL Bluetooth...',
  stars:'⭐⭐⭐⭐⭐',
  information:'120 Reviews',
},

{
  img:airpods,
  price:'$55.00',
  name:'JBL Bluetooth...',
  stars:'⭐⭐⭐⭐⭐',
  information:'120 Reviews',
},

{
  img:airpods,
  price:'$55.00',
  name:'JBL Bluetooth...',
  stars:'⭐⭐⭐⭐⭐',
  information:'120 Reviews',
},

{
  img:airpods,
  price:'$55.00',
  name:'JBL Bluetooth...',
  stars:'⭐⭐⭐⭐⭐',
  information:'120 Reviews',
},

{
  img:airpods,
  price:'$55.00',
  name:'JBL Bluetooth...',
  stars:'⭐⭐⭐⭐⭐',
  information:'120 Reviews',
},

{
  img:airpods,
  price:'$55.00',
  name:'JBL Bluetooth...',
  stars:'⭐⭐⭐⭐⭐',
  information:'120 Reviews',
},

{
  img:airpods,
  price:'$55.00',
  name:'JBL Bluetooth...',
  stars:'⭐⭐⭐⭐⭐',
  information:'120 Reviews',
},

{
  img:airpods,
  price:'$55.00',
  name:'JBL Bluetooth...',
  stars:'⭐⭐⭐⭐⭐',
  information:'120 Reviews',
},


];


const shopp = [
  { id: 1, name: "AirPods (3rd generation) with Lightning Charging Case", price: 65.00, rating: 5, reviews: 12,img:iphone },
  { id: 2, name: "Apple iPad Pro 11 inch M1 2021 Wifi 128GB|8GB", price: 825.00,  rating: 5, reviews: 12, img:iphone},
  { id: 3, name: "Smart Tivi Samsung 4K 75 inch 75AU7000 UHD", price: 425.00, rating: 5, reviews: 12 , img:iphone},
  { id: 4, name: "Apple Watch Series 8 GPS - Cellular, Aluminum Case", price: 265.00,  rating: 5, reviews: 12 , img:iphone},
  { id: 5, name: "Apple Iphone 14 - 128GB Midnight - Genuine Product", price: 825.00,  rating: 5, reviews: 12 , img:iphone},
  { id: 6, name: "MX MASTER 3S Performance Wireless Mouse", price: 125.00, oldPrice: 145.00, rating: 5, reviews: 12 , img:iphone},
  { id: 7, name: "Logitech K750 Wireless Solar Powered Keyboard", price: 105.00, oldPrice: 115.00, rating: 5, reviews: 12 , img:iphone},
  { id: 8, name: "JBL WH-CH520 Wireless Bluetooth Earphones Headset", price: 225.00,  rating: 5, reviews: 12, img:iphone },
  { id: 9, name: "Canon Eos 450D Lens Kit 18-55Mm F/3.5-5.6 Is", price: 105.00, rating: 5, reviews: 12, img:iphone },
  { id: 10, name: "Sony PlayStation 5 - PS5 Standard Edition", price: 125.00,  rating: 5, reviews: 12 , img:iphone},
  { id: 11, name: "Mac mini Apple M1 Chip with 8-Core CPU and 8-Core GPU", price: 125.00,  rating: 5, reviews: 12 , img:iphone},
  { id: 12, name: "Logitech B1000 Wireless Solar Powered Keyboard", price: 105.00,  rating: 5, reviews: 12 , img:iphone},
];



const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Card two_cards={two_cards}/>
      <Catalog categories={categories}/>
      <Bigbanner/>
      <Iphones phones={phones}/>
      <Dablebanner/>
      <Carded flored={flored}/>
      <MacBanner/>
      <Lastbanner minecards={minecards}/>
      <Footer/>
      <Shop shopp={shopp}/>
      <Vloges shopp={shopp}/>
      <Routes>
        <Route path="/vloges" element={<Vloges />} />
      </Routes>
    </div>
  );
}

export default App;
