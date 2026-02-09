import "./Card.css";

const Card = ({ two_cards }) => {
  return (
    <div className="cards">
      {two_cards.map((item, index) => (
        <div className="card" key={index}>
          
          <div className="card-img">
            <img className="image" src={item.img} alt={item.name} />
          </div>

          <div className="card-content">
            <h2 className="title">{item.name}</h2>

            <div className="price">
              <span className="new-price">{item.price}</span>
            </div>

            <h3 className="stars">{item.stars}</h3>
            <p className="info">{item.information}</p>

            <div className="stock">
              <span>Sold: <b>{item.sold}</b></span>
              <span>Available: <b>{item.avi}</b></span>
            </div>

            
            <div className="timer">
              <div><b>{item.days}</b><span>Days</span></div>
              <div><b>{item.hour}</b><span>Hour</span></div>
              <div><b>{item.mins}</b><span>Mins</span></div>
              <div><b>{item.secs}</b><span>Secs</span></div>
            </div>

            <button className="btn">{item.button}</button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Card;
