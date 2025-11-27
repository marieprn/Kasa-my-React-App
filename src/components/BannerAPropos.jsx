import ImgBannerAPropos from "../assets/BannerAPropos.png";
import "../Styles/BannerAPropos.scss";

function BannerAPropos() {
  return (
    <div className="BannerAPropos">
        <img src={ImgBannerAPropos} alt="Montagne" />
    </div>
  );
}

export default BannerAPropos;