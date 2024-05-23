import { useEffect, useState } from "react";
import { useGetEntraces } from "../../../../store/hooks/finances/useGetEntraces";
import { IFinancesEntracesMain } from "../../../../types/finances/IEntraces";
import GraficOfBar from "../grafic/grafic";
import "./style.scss";
import TitleOfSession from "../../../communs/titleOfSession";

const FinancesEntraces = () => {
    const [barData, setBarData] = useState<{ title: string[]; value: number[] }>({ title: [], value: [] });

    const UseGetEntraces = useGetEntraces();
    useEffect(() => {
        if (UseGetEntraces) {
            const newData = UseGetEntraces.reduce(
                (acc: { title: string[]; value: number[] }, item: IFinancesEntracesMain) => {
                    acc.title.push(`${item.month.slice(0, 3)} ${item.year.toString().slice(2, 4)}`);
                    acc.value.push(item.totalValue);
                    return acc;
                },
                { title: [], value: [] }
            );
            setBarData(newData);
        }
    }, [UseGetEntraces]);

    return (
        <>
            <TitleOfSession title="Entraces" />

            <div className="finances-entraces-grafic">
                <GraficOfBar barData={barData} />
            </div>
        </>
    );
};

export default FinancesEntraces;
