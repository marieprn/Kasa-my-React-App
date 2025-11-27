import { useState } from "react";
import { Collapse } from "react-collapse";
import { IoChevronUpSharp } from "react-icons/io5";
import "../Styles/CollapseAPropos.scss";

function CollapseAPropos({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Collapse">
      <button
        className="CollapseHeader"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <IoChevronUpSharp
          className={`arrow ${isOpen ? "rotate" : ""}`}
        />
      </button>

      <Collapse isOpened={isOpen}>
        <div className="CollapseContent">
          {children}
        </div>
      </Collapse>
    </div>
  );
}

export default CollapseAPropos;