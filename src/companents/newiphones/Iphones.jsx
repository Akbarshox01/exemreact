import './Iphones.css'

const Iphones = ({phones}) => {
  return (
    <div className="phones_container">
      {phones.map((item, index) => (
        <div key={index} className="phone_card">
          <div className="img_wrapper">
             <img src={item.img} alt={item.name} />
             <span className="badge">New</span>
          </div>
          <h2 className="price">{item.price}</h2>
          <h2 className="name">{item.name}</h2>
          <h2 className="stars">{item.stars}</h2>
          <h2 className="info">{item.information}</h2>
        </div>
      ))}
    </div>
  );
}

export default Iphones;