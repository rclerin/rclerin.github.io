import { useEffect, useState } from 'react';
import { getPouvoirsExclusifs, getPouvoirsUniversels, getPouvoirsParClasse } from "../services/jsonFetcher.js";
import { PouvoirsGridFormatterPrint } from './pouvoirsGridFormatterPrint.js';

const PouvoirsGridPrint = () => {
    const [gridData, setGridData] = useState([]);
    const [choixListe, setChoixListe] = useState("100");
    const [nomChoix, setNomChoix] = useState("Universels");

    const fetchPouvoirsUni = () => {
        getPouvoirsUniversels().then(x => setGridData(x));
    }

    const fetchPouvoirsExclu = () => {
        getPouvoirsExclusifs().then(x => setGridData(x));
    }

    const fetchPouvoirsClasse = (classeId) => {
        getPouvoirsParClasse(classeId).then(x => setGridData(x));
    }

    // Au chargement de la page
    useEffect(() => {
        document.title = "Liste des pouvoirs universels";
        fetchPouvoirsUni();
        // eslint-disable-next-line
    }, [])

    const handleSelectChange = (e) => {
        const value = e.target.value;
        setChoixListe(value);
        changerListes(e.target.value);
        const target = e.target;
        const text = target.options[target.selectedIndex].text.toLowerCase();
        setNomChoix(text);

        const stringTitre = "Liste des pouvoirs " + text;
        document.title = stringTitre;
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
        <main>
            <div className='choix-liste hide-print'>
                <label>Liste de pouvoirs:</label>
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
            <div className='header-print hidden show-print'><h2>Liste des pouvoirs {nomChoix} d'Obsidius</h2></div>
            <PouvoirsGridFormatterPrint tableData={gridData} />
        </main>
    );
}

export default PouvoirsGridPrint;
