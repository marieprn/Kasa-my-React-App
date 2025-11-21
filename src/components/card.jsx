import "../Styles/card.css";
import data from "../data.json";

function Card() {
  return (
    <div className="BackgroundCard">
      <div className="cards">
        {data.map((item, index) => (
          <div key={index} className="card" style={{ backgroundImage: `url(${item.cover})` }}>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;