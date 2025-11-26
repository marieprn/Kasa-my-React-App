import BannerAPropos from "../components/BannerAPropos.jsx";
import CollapseAPropos from "../components/CollapseAPropos.jsx";

function About() {
  return (
    <div>
      <BannerAPropos />

      <CollapseAPropos title="Fiabilité">
        <p>Les annoces postées sur Kasa garentissent une fiabilité totale. Les photos sont conformes aux logements, et toute les informations sont régulièrement vérifiées par nos équipes.</p>
      </CollapseAPropos>

      <CollapseAPropos title="Respect">
        <p>La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme</p>
      </CollapseAPropos>

      <CollapseAPropos title="Service">
        <p>La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque intéraction, que ce soit avec nos hôtes ou nos locataires, soit emprunte de respect et de bienveillance</p>
      </CollapseAPropos>

      <CollapseAPropos title="Sécurité">
        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des atéliers sur la sécurité domestique pour nos hôtes.</p>
      </CollapseAPropos>
    </div>
  );
}

export default About;