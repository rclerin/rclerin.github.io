import { SortIndividuel } from "./sortIndividuel";

export function SortsGridFormatter({ tableData }) {
    return (
        tableData.map(row => (
            <>
                <SortIndividuel data={row} key={row.sort_id} />
            </>
        ))
    );
}