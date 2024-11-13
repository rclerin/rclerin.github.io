import { useEffect } from "react";
import NavBar from "../component/navBar"

export default function PageNotFound() {
    useEffect(() => {
        document.title = "Page introuvable";
    })
    return (
        <main>
            <div>
                <NavBar />
            </div>
            <div>
                <h1>Erreur 404 - Page introuvable</h1>
            </div>
        </main>
    )
}