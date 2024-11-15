import { PouvoirIndividuelPrint } from "./pouvoirIndividuelPrint";

export function PouvoirsGridFormatterPrint({ tableData }) {
    return (
        tableData.map(row => (
            <>
                <PouvoirIndividuelPrint data={row} key={row.pouvoir_id} />
            </>
        ))
    );
}