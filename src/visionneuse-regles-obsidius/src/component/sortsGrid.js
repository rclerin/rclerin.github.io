import { useEffect, useState } from 'react';
import { getSortsArcane, getSortsDivin, getSortsDruidique, getSortsSorcellerie } from '../services/jsonFetcher.js';
import { SortsGridFormatter } from './sortsGridFormatter.js';

const SortsGrid = () => {
    const [gridData, setGridData] = useState([]);
    const [choixListe, setChoixListe] = useState("1");

    const filterSorts = (sortsEntrants) => {
        const filteredPouvoirs = sortsEntrants.sort((a, b) =>
            a.niveau < b.niveau
            && a.nom.toLowerCase() < b.nom.toLowerCase()
        );
        setGridData(filteredPouvoirs);
    }

    const fetchSortsArcane = () => {
        getSortsArcane().then(x => filterSorts(x));
    }

    const fetchSortsDivin = () => {
        getSortsDivin().then(x => filterSorts(x));
    }
    const fetchSortsDruidique = () => {
        getSortsDruidique().then(x => filterSorts(x));
    }
    const fetchSortsSorcellerie = () => {
        getSortsSorcellerie().then(x => filterSorts(x));
    }

    // Au chargement de la page
    useEffect(() => {
        document.title = "Liste des sorts";
        fetchSortsArcane();
        // eslint-disable-next-line
    }, [])

    const handleSelectChange = (e) => {
        const value = e.target.value;
        setChoixListe(value);
        changerListes(e.target.value);
    };

    const changerListes = (choix) => {
        switch (choix) {
            case "1":
                fetchSortsArcane();
                return;
            case "2":
                fetchSortsDivin();
                return;
            case "3":
                fetchSortsDruidique();
                return;
            case "4":
                fetchSortsSorcellerie();
                return;
            default:
                fetchSortsArcane();
                return;
        }
    }

    return (
        <main>
            <div className='choix-liste'>
                <label>Choix de liste de sorts:</label>
                <select value={choixListe} onChange={handleSelectChange} name="liste-sorts-select">
                    <option value={1}>Arcane</option>
                    <option value={2}>Divin</option>
                    <option value={3}>Druidique</option>
                    <option value={4}>Sorcellerie</option>
                </select>
            </div>
            <SortsGridFormatter tableData={gridData} />
        </main>
    )
}

export default SortsGrid;