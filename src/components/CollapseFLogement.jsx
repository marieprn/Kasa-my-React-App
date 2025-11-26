import { useState } from "react";
import "../Styles/CollapseFLogement.css";

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>
        <span className={open ? "arrow open" : "arrow"}>⌃</span>
      </div>

      {open && (
        <div className="collapse-content">
          {content}
        </div>
      )}
    </div>
  );
}

export default Collapse;