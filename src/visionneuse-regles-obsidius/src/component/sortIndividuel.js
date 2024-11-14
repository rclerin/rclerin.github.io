export function SortIndividuel(data) {
    return (
        <div className="gridContainer">
            <div className="gridItem bold" style={{ gridColumn: "1/2" }}>Niveau</div>
            <div className="gridItem bold" style={{ gridColumn: "2/4" }}>Sort</div>
            <div className="gridItem bold" style={{ gridColumn: "4/6" }}>Défense</div>

            <div className="gridItem marginBot" style={{ gridColumn: "1/2" }}>{!data.data.niveau ? "0" : data.data.niveau}</div>
            <div className="gridItem marginBot" style={{ gridColumn: "2/4" }}>{!data.data.nom ? "-" : data.data.nom}</div>
            <div className="gridItem marginBot" style={{ gridColumn: "4/6" }}>{!data.data.defense ? "-" : data.data.defense}</div>

            <div className="gridItem bold" style={{ gridColumn: "1/3" }}>Description</div>
            <div className="gridItem bold" style={{ gridColumn: "3/4" }}>Type de bonus :</div>
            <div className="gridItem" style={{ gridColumn: "4/6" }}>{!data.data.type_bonus ? "-" : data.data.type_bonus}</div>

            <div className="gridItem gridItemDesc" style={{ gridColumn: "1/6" }}>{!data.data.description ? "Description manquante" : data.data.description}</div>

            <div className="gridItem bold" style={{ gridColumn: "1/3" }}>Activation</div>
            <div className="gridItem bold" style={{ gridColumn: "3/4" }}>Durée</div>
            <div className="gridItem bold" style={{ gridColumn: "4/6" }}>Type de magie</div>

            <div className="gridItem" style={{ gridColumn: "1/3" }}>{!data.data.activation ? "-" : data.data.activation}</div>
            <div className="gridItem" style={{ gridColumn: "3/4" }}>{!data.data.duree ? "-" : data.data.duree}</div>
            <div className="gridItem" style={{ gridColumn: "4/6" }}>{!data.data.type_magie ? "-" : data.data.type_magie}</div>

            <div className="gridItem bold" style={{ gridColumn: "1/3" }}>Sort incanté 1 niveau supérieur</div>
            <div className="gridItem bold" style={{ gridColumn: "3/6" }}>Sort incanté 2 niveau supérieur</div>

            <div className="gridItem" style={{ gridColumn: "1/3" }}>{!data.data.desc_niv_plus1 ? "-" : data.data.desc_niv_plus1}</div>
            <div className="gridItem" style={{ gridColumn: "3/6" }}>{!data.data.desc_niv_plus2 ? "-" : data.data.desc_niv_plus2}</div>

            <div className="gridItem bold" style={{ gridColumn: "1/3" }}>Sort incanté 3 niveau supérieur</div>
            <div className="gridItem bold" style={{ gridColumn: "3/6" }}>Sort incanté 4 niveau supérieur</div>

            <div className="gridItem" style={{ gridColumn: "1/3" }}>{!data.data.desc_niv_plus3 ? "-" : data.data.desc_niv_plus3}</div>
            <div className="gridItem" style={{ gridColumn: "3/6" }}>{!data.data.desc_niv_plus4 ? "-" : data.data.desc_niv_plus4}</div>

            <div className="gridItem bold" style={{ gridColumn: "1/6" }}>Incantation arcane</div>
            <div className="gridItem" style={{ gridColumn: "1/6" }}>{!data.data.incantation_arcane ? "Aucune incantation arcane" : data.data.incantation_arcane}</div>
        </div>
    )
}