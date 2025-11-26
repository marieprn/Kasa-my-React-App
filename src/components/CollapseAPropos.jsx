import { useState } from "react";
import { Collapse } from "react-collapse";
import { IoChevronUpSharp } from "react-icons/io5";
import "../Styles/CollapseAPropos.css";

function CollapseAPropos({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <IoChevronUpSharp
          className={`arrow ${isOpen ? "rotate" : ""}`}
        />
      </button>

      <Collapse isOpened={isOpen}>
        <div className="collapse-content">
          {children}
        </div>
      </Collapse>
    </div>
  );
}

export default CollapseAPropos;