import starGrey from "../assets/StarGrey.png";
import starColor from "../assets/StarColor.png";
import "../Styles/RatingFLogement.scss";

const RatingFLogement = ({ rating }) => {
 
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <img
          key={star}
          src={star <= rating ? starColor : starGrey}
          alt="étoile"
          className="star"
        />
      ))}
    </div>
  );
};

export default RatingFLogement;
