export function SortIndividuel(data) {
    return (
        <div className="responsive-grid-container">
            <div className="row">
                <div className="col-3 col-xs-3 bold">Niveau</div>
                <div className="col-6 col-xs-6 bold">Sort</div>
                <div className="col-3 col-xs-3 bold">Défense</div>
            </div>
            <div className="row">
                <div className="col-3 col-xs-3">{!data.data.niveau ? "0" : data.data.niveau}</div>
                <div className="col-6 col-xs-6">{!data.data.nom ? "-" : data.data.nom}</div>
                <div className="col-3 col-xs-3">{!data.data.defense ? "-" : data.data.defense}</div>
            </div>

            <div className="row">
                <div className="col-7 col-xs-12 bold">Description</div>
                <div className="col-2 col-xs-5 bold">Type de bonus :</div>
                <div className="col-3 col-xs-7">{!data.data.type_bonus ? "-" : data.data.type_bonus}</div>
            </div>
            <div className="row">
                <div className="col-12 gridItemDesc">{!data.data.description ? "Description manquante" : data.data.description}</div>
            </div>
            <div className="row">
                <div className="col-6 col-xs-4 bold">Activation</div>
                <div className="col-3 col-xs-3 bold">Durée</div>
                <div className="col-3 col-xs-5 bold">Type de magie</div>
            </div>
            <div className="row">
                <div className="col-6 col-xs-4">{!data.data.activation ? "-" : data.data.activation}</div>
                <div className="col-3 col-xs-3">{!data.data.duree ? "-" : data.data.duree}</div>
                <div className="col-3 col-xs-5">{!data.data.type_magie ? "-" : data.data.type_magie}</div>
            </div>
            <div className="row">
                <div className="col-6 col-xs-6 bold">Sort incanté 1 niveau supérieur</div>
                <div className="col-6 col-xs-6 bold">Sort incanté 2 niveau supérieur</div>
            </div>
            <div className="row">
                <div className="col-6 col-xs-6">{!data.data.desc_niv_plus1 ? "-" : data.data.desc_niv_plus1}</div>
                <div className="col-6 col-xs-6">{!data.data.desc_niv_plus2 ? "-" : data.data.desc_niv_plus2}</div>
            </div>
            <div className="row">
                <div className="col-6 col-xs-6 bold">Sort incanté 3 niveau supérieur</div>
                <div className="col-6 col-xs-6 bold">Sort incanté 4 niveau supérieur</div>
            </div>
            <div className="row">
                <div className="col-6 col-xs-6">{!data.data.desc_niv_plus3 ? "-" : data.data.desc_niv_plus3}</div>
                <div className="col-6 col-xs-6">{!data.data.desc_niv_plus4 ? "-" : data.data.desc_niv_plus4}</div>
            </div>
            <div className="row">
                <div className="col-6 col-xs-12 bold">Incantation arcane</div>
                <div className="col-6 col-xs-12">{!data.data.incantation_arcane ? "Aucune incantation arcane" : data.data.incantation_arcane}</div>
            </div>
        </div>
    )
}