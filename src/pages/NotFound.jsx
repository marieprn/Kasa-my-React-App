import "../Styles/NotFound.css";

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Oups! La page que vous demandez n'existe pas.</p>
      <a className="not-found-link" href="/">Retourner sur la page d'accueil</a>
    </div>
  );
}