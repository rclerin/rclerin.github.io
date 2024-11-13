import { PouvoirIndividuel } from "./pouvoirIndividuel";

export function PouvoirsGridFormatter({tableData}) {
    return(
        tableData.map(row => (
            <>
                <PouvoirIndividuel data={row} key={row.pouvoir_id}/>
            </>
        ))
    );
}