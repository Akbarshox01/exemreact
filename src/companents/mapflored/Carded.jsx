import './Carded.css'

const Carded = ({ flored }) => {
  return (
    <div className="carded_page">
      <div className="carded_wrapper">
        {flored.map((item, index) => (
          <div className="carded" key={index}>
            <span className="badge">New</span>
            <img className="carded_img" src={item.img} alt={item.name} />
            <h3 className="carded_name">{item.name}</h3>
            <p className="carded_price">{item.price}</p>
            <p className="carded_stars">{item.stars}</p>
            <p className="carded_info">{item.information}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carded;
