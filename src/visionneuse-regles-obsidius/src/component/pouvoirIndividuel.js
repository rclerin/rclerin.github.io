export function PouvoirIndividuel(data) {
    return (
        <div className="responsive-grid-container">
            <div className="row">
                <div className="col-8 col-xs-8 bold">Pouvoir</div>
                <div className="col-4 col-xs-4 bold">Coût niv 1</div>
            </div>
            <div className="row">
                <div className="col-8 col-xs-8">{data.data.nom}</div>
                <div className="col-4 col-xs-4">{!data.data.cout_n1 ? "-" : data.data.cout_n1}</div>
            </div>
            <div className="row">
                <div className="col-6 col-xs-12 bold">Description</div>
                <div className="col-2 col-xs-5 bold hidden-xs">Type de bonus :</div>
                <div className="col-4 col-xs-7 hidden-xs">{!data.data.type_bonus ? "-" : data.data.type_bonus}</div>
            </div>
            <div className="row">
                <div className="col-12 gridItemDesc">{data.data.description}</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-2 col-xs-5 bold">Type de bonus :</div>
                <div className="col-4 col-xs-7">{!data.data.type_bonus ? "-" : data.data.type_bonus}</div>
            </div>
            <div className="row hidden-xs">
                <div className="col-5 col-xs-4 bold">Pré-requis 1</div>
                <div className="col-3 col-xs-4 bold">Pré-requis 2</div>
                <div className="col-4 col-xs-4 bold">Pré-requis 3</div>
            </div>
            <div className="row hidden-xs">
                <div className="col-5 col-xs-4">{!data.data.prerequis1 ? "-" : data.data.prerequis1}</div>
                <div className="col-3 col-xs-4">{!data.data.prerequis2 ? "-" : data.data.prerequis2}</div>
                <div className="col-4 col-xs-4">{!data.data.prerequis3 ? "-" : data.data.prerequis3}</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-6 bold">Pré-requis 1</div>
                <div className="col-3 col-xs-6 bold">Pré-requis 2</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-6">{!data.data.prerequis1 ? "-" : data.data.prerequis1}</div>
                <div className="col-3 col-xs-6">{!data.data.prerequis2 ? "-" : data.data.prerequis2}</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-4 col-xs-6 bold">Pré-requis 3</div>
                <div className="col-5 col-xs-6 bold">Fréquence</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-4 col-xs-6">{!data.data.prerequis3 ? "-" : data.data.prerequis3}</div>
                <div className="col-5 col-xs-6">{data.data.frequence}</div>
            </div>
            <div className="row">
                <div className="col-5 col-xs-4 bold hidden-xs">Fréquence</div>
                <div className="col-3 col-xs-6 bold">Activation</div>
                <div className="col-4 col-xs-6 bold">Défense</div>
            </div>
            <div className="row">
                <div className="col-5 col-xs-4 hidden-xs">{data.data.frequence}</div>
                <div className="col-3 col-xs-6">{!data.data.activation ? "-" : data.data.activation}</div>
                <div className="col-4 col-xs-6">{!data.data.defense ? "-" : data.data.defense}</div>
            </div>
            <div className="row">
                <div className="col-5 col-xs-6 bold">Annulé par</div>
                <div className="col-3 col-xs-6 bold">Composante matérielle requise</div>
                <div className="col-2 col-xs-8 bold hidden-xs">Catégorie de pouvoir</div>
                <div className="col-2 col-xs-4 bold hidden-xs">Répétition</div>
            </div>
            <div className="row">
                <div className="col-5 col-xs-6">{!data.data.annule_par ? "-" : data.data.annule_par}</div>
                <div className="col-3 col-xs-6">{!data.data.materiel_requis ? "-" : (data.data.materiel_requis ? "oui" : "non")}</div>
                <div className="col-2 col-xs-8 hidden-xs">{!data.data.categorie ? "-" : data.data.categorie}</div>
                <div className="col-2 col-xs-4 hidden-xs">{data.data.repetition ? "oui" : "non"}</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-6 col-xs-8 bold">Catégorie de pouvoir</div>
                <div className="col-6 col-xs-4 bold">Répétition</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-6 col-xs-8">{!data.data.categorie ? "-" : data.data.categorie}</div>
                <div className="col-6 col-xs-4">{data.data.repetition ? "oui" : "non"}</div>
            </div>
            <div className="row hidden-xs">
                <div className="col-5 bold">Niveau 2</div>
                <div className="col-1 bold">Coût niv 2</div>
                <div className="col-5 bold">Niveau 3</div>
                <div className="col-1 bold">Coût niv 3</div>
            </div>
            <div className="row hidden-xs">
                <div className="col-5 col-xs-4">{!data.data.desc_n2 ? "-" : data.data.desc_n2}</div>
                <div className="col-1 col-xs-2">{!data.data.cout_n2 ? "-" : data.data.cout_n2}</div>
                <div className="col-5 col-xs-4">{!data.data.desc_n3 ? "-" : data.data.desc_n3}</div>
                <div className="col-1 col-xs-2">{!data.data.cout_n3 ? "-" : data.data.cout_n3}</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8 bold">Niveau 2</div>
                <div className="col-1 col-xs-4 bold">Coût niv 2</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8">{!data.data.desc_n2 ? "-" : data.data.desc_n2}</div>
                <div className="col-1 col-xs-4">{!data.data.cout_n2 ? "-" : data.data.cout_n2}</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8 bold">Niveau 3</div>
                <div className="col-1 col-xs-4 bold">Coût niv 3</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8">{!data.data.desc_n3 ? "-" : data.data.desc_n3}</div>
                <div className="col-1 col-xs-4">{!data.data.cout_n3 ? "-" : data.data.cout_n3}</div>
            </div>
            <div className="row hidden-xs">
                <div className="col-5 col-xs-4 bold">Niveau 4</div>
                <div className="col-1 col-xs-2 bold">Coût niv 4</div>
                <div className="col-5 col-xs-4 bold">Niveau 5</div>
                <div className="col-1 col-xs-2 bold">Coût niv 5</div>
            </div>
            <div className="row hidden-xs">
                <div className="col-5 col-xs-4">{!data.data.desc_n4 ? "-" : data.data.desc_n4}</div>
                <div className="col-1 col-xs-2">{!data.data.cout_n4 ? "-" : data.data.cout_n4}</div>
                <div className="col-5 col-xs-4">{!data.data.desc_n5 ? "-" : data.data.desc_n5}</div>
                <div className="col-1 col-xs-2">{!data.data.cout_n5 ? "-" : data.data.cout_n5}</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8 bold">Niveau 4</div>
                <div className="col-1 col-xs-4 bold">Coût niv 4</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8">{!data.data.desc_n4 ? "-" : data.data.desc_n4}</div>
                <div className="col-1 col-xs-4">{!data.data.cout_n4 ? "-" : data.data.cout_n4}</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8 bold">Niveau 5</div>
                <div className="col-1 col-xs-4 bold">Coût niv 5</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8">{!data.data.desc_n5 ? "-" : data.data.desc_n5}</div>
                <div className="col-1 col-xs-4">{!data.data.cout_n5 ? "-" : data.data.cout_n5}</div>
            </div>
            <div className="row hidden-xs">
                <div className="col-5 col-xs-4 bold">Niveau 6</div>
                <div className="col-1 col-xs-2 bold">Coût niv 6</div>
                <div className="col-5 col-xs-4 bold">Niveau 7</div>
                <div className="col-1 col-xs-2 bold">Coût niv 7</div>
            </div>
            <div className="row hidden-xs">
                <div className="col-5 col-xs-4">{!data.data.desc_n6 ? "-" : data.data.desc_n6}</div>
                <div className="col-1 col-xs-2">{!data.data.cout_n6 ? "-" : data.data.cout_n6}</div>
                <div className="col-5 col-xs-4">{!data.data.desc_n7 ? "-" : data.data.desc_n7}</div>
                <div className="col-1 col-xs-2">{!data.data.cout_n7 ? "-" : data.data.cout_n7}</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8 bold">Niveau 6</div>
                <div className="col-1 col-xs-4 bold">Coût niv 6</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8">{!data.data.desc_n6 ? "-" : data.data.desc_n6}</div>
                <div className="col-1 col-xs-4">{!data.data.cout_n6 ? "-" : data.data.cout_n6}</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8 bold">Niveau 7</div>
                <div className="col-1 col-xs-4 bold">Coût niv 7</div>
            </div>
            <div className="row hidden-desktop">
                <div className="col-5 col-xs-8">{!data.data.desc_n7 ? "-" : data.data.desc_n7}</div>
                <div className="col-1 col-xs-4">{!data.data.cout_n7 ? "-" : data.data.cout_n7}</div>
            </div>
        </div>
    );
}