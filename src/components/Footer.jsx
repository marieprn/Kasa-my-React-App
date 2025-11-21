import "../Styles/Footer.css";
import LogoWhite from "../assets/LogoWhite.png";

function Footer() {
  return (
    <div className="footer">
        <img src={LogoWhite} alt="logo blanc"/>
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;