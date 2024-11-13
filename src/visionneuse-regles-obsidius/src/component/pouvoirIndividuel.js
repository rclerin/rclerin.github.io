export function PouvoirIndividuel(data) {
    return (
        <div className="gridContainer">
            <div className="gridItem" style={{ gridColumn: "1/4" }}>Pouvoir</div>
            <div className="gridItem" style={{ gridColumn: "4/6" }}>Coût niv 1</div>

            <div className="gridItem gridItemLarge marginBot" style={{ gridColumn: "1/4" }}>{data.data.nom}</div>
            <div className="gridItem marginBot" style={{ gridColumn: "4/6" }}>{!data.data.cout_n1 ? "-" : data.data.cout_n1}</div>

            <div className="gridItem" style={{ gridColumn: "1/3" }}>Description</div>
            <div className="gridItem" style={{ gridColumn: "3/4" }}>Type de bonus :</div>
            <div className="gridItem" style={{ gridColumn: "4/6" }}>{!data.data.type_bonus ? "-" : data.data.type_bonus}</div>

            <div className="gridItem gridItemDesc" style={{ gridColumn: "1/6" }}>{data.data.description}</div>

            <div className="gridItem" style={{ gridColumn: "1/3" }}>Pré-requis 1</div>
            <div className="gridItem" style={{ gridColumn: "3/4" }}>Pré-requis 2</div>
            <div className="gridItem" style={{ gridColumn: "4/6" }}>Pré-requis 3</div>

            <div className="gridItem" style={{ gridColumn: "1/3" }}>{!data.data.prerequis1 ? "-" : data.data.prerequis1}</div>
            <div className="gridItem" style={{ gridColumn: "3/4" }}>{!data.data.prerequis2 ? "-" : data.data.prerequis2}</div>
            <div className="gridItem" style={{ gridColumn: "4/6" }}>{!data.data.prerequis3 ? "-" : data.data.prerequis3}</div>

            <div className="gridItem" style={{ gridColumn: "1/3" }}>Fréquence</div>
            <div className="gridItem" style={{ gridColumn: "3/4" }}>Activation</div>
            <div className="gridItem" style={{ gridColumn: "4/6" }}>Défense</div>

            <div className="gridItem" style={{ gridColumn: "1/3" }}>{data.data.frequence}</div>
            <div className="gridItem" style={{ gridColumn: "3/4" }}>{!data.data.activation ? "-" : data.data.activation}</div>
            <div className="gridItem" style={{ gridColumn: "4/6" }}>{!data.data.defense ? "-" : data.data.defense}</div>

            <div className="gridItem" style={{ gridColumn: "1/3" }}>Annulé par</div>
            <div className="gridItem" style={{ gridColumn: "3/4" }}>Composante matérielle requise</div>
            <div className="gridItem" style={{ gridColumn: "4/5" }}>Catégorie de pouvoir</div>
            <div className="gridItem" style={{ gridColumn: "5/6" }}>Répétition</div>

            <div className="gridItem" style={{ gridColumn: "1/3" }}>{!data.data.annule_par ? "-" : data.data.annule_par}</div>
            <div className="gridItem" style={{ gridColumn: "3/4" }}>{!data.data.materiel_requis ? "-" : (data.data.materiel_requis ? "oui" : "non")}</div>
            <div className="gridItem" style={{ gridColumn: "4/5" }}>{!data.data.categorie ? "-" : data.data.categorie}</div>
            <div className="gridItem" style={{ gridColumn: "5/6" }}>{data.data.repetition ? "oui" : "non"}</div>

            <div className="gridItem" style={{ gridColumn: "1/2" }}>Niveau 2</div>
            <div className="gridItem" style={{ gridColumn: "2/3" }}>Coût niv 2</div>
            <div className="gridItem" style={{ gridColumn: "3/5" }}>Niveau 3</div>
            <div className="gridItem" style={{ gridColumn: "5/6" }}>Coût niv 3</div>

            <div className="gridItem" style={{ gridColumn: "1/2" }}>{!data.data.desc_n2 ? "-" : data.data.desc_n2}</div>
            <div className="gridItem" style={{ gridColumn: "2/3" }}>{!data.data.cout_n2 ? "-" : data.data.cout_n2}</div>
            <div className="gridItem" style={{ gridColumn: "3/5" }}>{!data.data.desc_n3 ? "-" : data.data.desc_n3}</div>
            <div className="gridItem" style={{ gridColumn: "5/6" }}>{!data.data.cout_n3 ? "-" : data.data.cout_n3}</div>

            <div className="gridItem" style={{ gridColumn: "1/2" }}>Niveau 4</div>
            <div className="gridItem" style={{ gridColumn: "2/3" }}>Coût niv 4</div>
            <div className="gridItem" style={{ gridColumn: "3/5" }}>Niveau 5</div>
            <div className="gridItem" style={{ gridColumn: "5/6" }}>Coût niv 5</div>

            <div className="gridItem" style={{ gridColumn: "1/2" }}>{!data.data.desc_n4 ? "-" : data.data.desc_n4}</div>
            <div className="gridItem" style={{ gridColumn: "2/3" }}>{!data.data.cout_n4 ? "-" : data.data.cout_n4}</div>
            <div className="gridItem" style={{ gridColumn: "3/5" }}>{!data.data.desc_n5 ? "-" : data.data.desc_n5}</div>
            <div className="gridItem" style={{ gridColumn: "5/6" }}>{!data.data.cout_n5 ? "-" : data.data.cout_n5}</div>

            <div className="gridItem" style={{ gridColumn: "1/2" }}>Niveau 6</div>
            <div className="gridItem" style={{ gridColumn: "2/3" }}>Coût niv 6</div>
            <div className="gridItem" style={{ gridColumn: "3/5" }}>Niveau 7</div>
            <div className="gridItem" style={{ gridColumn: "5/6" }}>Coût niv 7</div>

            <div className="gridItem" style={{ gridColumn: "1/2" }}>{!data.data.desc_n6 ? "-" : data.data.desc_n6}</div>
            <div className="gridItem" style={{ gridColumn: "2/3" }}>{!data.data.cout_n6 ? "-" : data.data.cout_n6}</div>
            <div className="gridItem" style={{ gridColumn: "3/5" }}>{!data.data.desc_n7 ? "-" : data.data.desc_n7}</div>
            <div className="gridItem" style={{ gridColumn: "5/6" }}>{!data.data.cout_n7 ? "-" : data.data.cout_n7}</div>
        </div>
    );
}