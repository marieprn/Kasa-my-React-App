import { useParams } from "react-router-dom";
import data from "../data.json";
import Carrousel from "../components/CarrouselFLogement";
import Tags from "../components/TagsFLogement";
import RatingFLogement from "../components/RatingFLogement";
import Host from "../components/HostFLogement";
import Collapse from "../components/CollapseFLogement";
import "../Styles/FicheLogement.css";

function FicheLogement() {
  const { id } = useParams();
  const logement = data.find((item) => item.id === id);

  if (!logement) return <p>Logement introuvable 😢</p>;

  return (
    <div className="fiche">
      <Carrousel pictures={logement.pictures} />

      <div className="FicheHeader">
        <div className="FicheLeft">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
        </div>

        <div className="FicheRight">
          <Host name={logement.host.name} picture={logement.host.picture} />
        </div>
       
        <div className="RatingFLogement">
          <RatingFLogement rating={parseInt(logement.rating)} />
        </div>

        <div className="Tags">
          <Tags tags={logement.tags} />
        </div>
      </div>

      <div className="FicheCollapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((eq, i) => <li key={i}>{eq}</li>)}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default FicheLogement;