import { useState } from "react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import "../Styles/CarrouselFLogement.scss";

function Carrousel({ pictures }) {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % pictures.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  return (
    <div className="carrouselFLogement">
      <img src={pictures[index]} alt="Logement" />

      {pictures.length > 1 && (
        <>
          <MdArrowBackIosNew className="prev" onClick={prev} />
          <MdArrowForwardIos className="next" onClick={next} />
          <span className="counter">{index + 1}/{pictures.length}</span>
        </>
      )}
    </div>
  );
}

export default Carrousel;