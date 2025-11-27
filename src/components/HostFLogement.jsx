import "../Styles/HostFLogement.scss";

function Host({ name, picture }) {
  const [first, last] = name.split(" ");

  return (
    <div className="Host">
      <div className="HostName">
        <span>{first}</span>
        <span>{last}</span>
      </div>
      <img src={picture} alt={name} className="HostPicture" />
    </div>
  );
}

export default Host;