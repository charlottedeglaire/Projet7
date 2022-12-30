import { NavLink } from "react-router-dom";

const NotFound = () => {
    document.title = "Kasa - Page introuvable";

    return (
        <main className="not_found_main">
            <div>
                <h1>404</h1>
                <h2 className="NotFound_desktop">
                    Oups! La page que vous demandez n'existe pas.
                </h2>
                <h2 className="NotFound_mobile">
                    Oups! La page que <br /> vous demandez n'existe pas.
                </h2>
            </div>
            <div className="back_link">
                <NavLink to="/">Retourne sur la page d'accueil</NavLink>
            </div>
        </main>
    );
};

export default NotFound;
