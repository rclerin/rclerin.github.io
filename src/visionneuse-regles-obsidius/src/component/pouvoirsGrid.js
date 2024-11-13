import { useEffect, useState } from 'react';
import { PouvoirsGridFormatter } from "./pouvoirsGridFormatter.js";
import { getPouvoirsExclusifs, getPouvoirsUniversels, getPouvoirsParClasse } from "../services/jsonFetcher.js";

const PouvoirsGrid = () => {
    const [gridData, setGridData] = useState([]);
    const [choixListe, setChoixListe] = useState("100");

    const filterPouvoirs = (pouvoirsEntrants) => {
        const filteredPouvoirs = pouvoirsEntrants.sort((a, b) => a.nom.toLowerCase() < b.nom.toLowerCase());
        setGridData(filteredPouvoirs);
    }

    const fetchPouvoirsUni = () => {
        getPouvoirsUniversels().then(x => filterPouvoirs(x));
    }

    const fetchPouvoirsExclu = () => {
        getPouvoirsExclusifs().then(x => filterPouvoirs(x));
    }

    const fetchPouvoirsClasse = (classeId) => {
        getPouvoirsParClasse(classeId).then(x => filterPouvoirs(x));
    }

    // Au chargement de la page
    useEffect(() => {
        document.title = "Liste des pouvoirs";
        fetchPouvoirsUni();
    })


    const handleSelectChange = (e) => {
        const value = e.target.value;
        setChoixListe(value);
        changerListes(e.target.value);
    };

    const changerListes = (choix) => {
        switch (choix) {
            case "100":
                fetchPouvoirsUni();
                return;
            case "101":
                fetchPouvoirsExclu();
                return;
            default:
                fetchPouvoirsClasse(choix);
                return;
        }
    }

    return (
        <div>
            <div style={{ padding: "1em", textAlign: "center", fontSize: "large" }}>
                <label>Choix de liste de pouvoirs:</label>
                <select value={choixListe} onChange={handleSelectChange} name="liste-pouvoir-select">
                    <option value={100}>Universels</option>
                    <option value={101}>Exclusifs</option>
                    <option value={3}>Artisan</option>
                    <option value={4}>Barbare</option>
                    <option value={5}>Barde</option>
                    <option value={6}>Druide</option>
                    <option value={7}>Guerrier</option>
                    <option value={8}>Mage</option>
                    <option value={9}>Paladin</option>
                    <option value={10}>Prêtre</option>
                    <option value={11}>Ranger</option>
                    <option value={12}>Voleur</option>
                    <option value={13}>Warlock</option>
                </select>
            </div>

            <PouvoirsGridFormatter tableData={gridData} />
        </div>
    );
}

export default PouvoirsGrid;