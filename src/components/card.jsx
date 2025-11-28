import "../Styles/card.scss";
import data from "../data.json";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="BackgroundCard">
      <div className="cards">
        {data.map((item) => (
          <Link className="CardLink" key={item.id} to={`/logement/${item.id}`}>
            <div
              className="card"
              style={{ backgroundImage: `url(${item.cover})` }}
            >
              <p>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Card;