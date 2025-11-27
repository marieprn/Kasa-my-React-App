import { useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";
import "../Styles/CollapseFLogement.scss";

function CollapseFLogement({ title, content }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="CollapseFLogement">
      <div className="CollapseHeaderFLogement" onClick={() => setOpen(!open)}>
        <h3>{title}</h3>

        <IoChevronUpSharp
          className={`arrow ${open ? "rotate" : ""}`}
        />
      </div>

      {open && (
        <div className="CollapseContentFLogement">
          {content}
        </div>
      )}
    </div>
  );
}

export default CollapseFLogement;