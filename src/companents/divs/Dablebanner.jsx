import './Dablebanner.css'
import noimg from '../../assets/noimg.png'

const Dablebanner = () => {
  return (
    <div className="doublebanner">
      <div
        className="banner"
        style={{ backgroundImage: `url(${noimg})` }}
      >
        <h4>Keyboard</h4>
        <h2>Sale 20% off</h2>
        <button>Shop Now</button>
      </div>

      <div
        className="banner"
        style={{ backgroundImage: `url(${noimg})` }}
      >
        <h4>Keyboard</h4>
        <h2>Sale 20% off</h2>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default Dablebanner;
