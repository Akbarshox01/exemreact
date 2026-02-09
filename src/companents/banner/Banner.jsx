
import './Banner.css'


import { CiMicrochip } from "react-icons/ci";
import { FaApple } from "react-icons/fa";
import { IoIosBluetooth } from "react-icons/io";
import bannerimg from '../../assets/bannerimg.png';


const Banner = () => {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${bannerimg})` }}
    >
      <div className="banner-content">
  <span className="small"><FaApple size={20}/> Bluetooth headphone</span>

  <h1>
    AirPods Pro <br /> 2023
  </h1>

  <p>
    Delivering rich sound quality with <br />
    outstanding 3D sound reproduction.
  </p>

  <ul>
    <li><span>🔋</span> Battery capacity 6 hours + charging box 30 hours</li>
    <li><IoIosBluetooth color="#00ffd5" size={20}/> Bluetooth 5.3</li>
    <li><CiMicrochip color="#00ffd5" size={20}/> Chip H2</li>
  </ul>

  <div className="buttons">
    <button className="shop">Shop Now</button>
    <button className="video"><span>▶</span> Video</button>
  </div>
</div>
    </section>
  );
}

export default Banner;
