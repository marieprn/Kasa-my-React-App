import ImgBannerHome from "../assets/BannerHome.png";
import "../Styles/BannerHome.scss";

function BannerHome() {
  return (
    <div className="BannerHome">
        <img src={ImgBannerHome} alt="Montagne" />
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default BannerHome;