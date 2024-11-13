import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav className="div-margin">
                <span className="nav-item">
                    <Link to={"/"}>Accueil</Link>
                </span>
                <span className="nav-item">
                    <Link to={"/pouvoirs"}>Liste de pouvoirs</Link>
                </span>
                <span className="nav-item">
                    <Link to={"/sorts"}>Liste de sorts</Link>
                </span>
            </nav>
        </>
    )
}

export default NavBar;