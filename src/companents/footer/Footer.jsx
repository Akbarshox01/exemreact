import './Footer.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        
        <div className="footer-section brand-section">
          <h2 className="footer-logo">BESTXTORE</h2>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet consectetur. Ultricies viverra id egestas pharetra 
            fermentum. Lorem ipsum dolor sit amet consectetur. Ultricies viverra id.
          </p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" className="footer-input" />
            <button className="submit-btn">Submit</button>
          </div>
        </div>

      
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Payments</a></li>
            <li><a href="#">Term of Use</a></li>
            <li><a href="#">Deliveries & Returns</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Product</a></li>
            <li><a href="#">Our Story</a></li>
            <li><a href="#">Job Opportunities</a></li>
            <li><a href="#">Store Locator</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <FaMapMarkerAlt className="icon" />
              <span>600 N Washington Ave Suite C203</span>
            </li>
            <li>
              <FaPhoneAlt className="icon" />
              <span>+008 0642 118</span>
            </li>
            <li>
              <FaEnvelope className="icon" />
              <span>bestxtore@gmail.com</span>
            </li>
          </ul>
          <div className="service-time">
            <h4>Service Time</h4>
            <p>Mon-Sat: 9:00 - 20:00</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;