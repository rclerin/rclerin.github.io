import '../App.css';
import { useEffect } from "react";
import NavBar from "../component/navBar"

export default function ReglesHub() {
    useEffect(() => {
        document.title = "Visionneuse de règles des Vestiges d'Obsidius";
    })
    return (
        <main>
            <div>
                <NavBar />
            </div>
            <div>
                <h1>Bienvenue sur la visionneuse de règles des Vestiges d'Obsidius</h1>
                <p>Cliquez sur les liens dans la barre de navigation en haut de la page pour naviguer sur les pages.</p>
            </div>
        </main>
    )
}