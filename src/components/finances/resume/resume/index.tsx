import { useEffect, useState } from "react";
import { useGetEntraces } from "../../../../store/hooks/finances/useGetEntraces";
import { useGetDomesticGoals } from "../../../../store/hooks/finances/useGetDomesticGoals";
import { IFinancesEntracesMain } from "../../../../types/finances/IEntraces";
import { useGetTripGoals } from "../../../../store/hooks/finances/useGetTripGoals";
import FinanceSimpleResult from "../../comuns/resume";
import TitleOfSession from "../../../communs/titleOfComponent";
import DoughnutHalf from "../../comuns/doughnutHalf";
import "./style.scss";
import { IFinancesGoal } from "../../../../types/finances/IGoals";

interface type {
    date: {
        month: string;
        year: number;
        from: number;
        to: number;
    };
}
const FinanceResume = ({ date }: type) => {
    const UseGetDomesticGoals = useGetDomesticGoals();
    const UseGetEntraces = useGetEntraces();
    const UseGetTripGoals = useGetTripGoals();

    const [data, setData] = useState({
        totalDomestic: 0,
        totalEntraces: 0,
        totalTrip: 0
    });

    // get total entrances

    useEffect(() => {
        if (UseGetEntraces) {
            const result = UseGetEntraces.filter((item: IFinancesEntracesMain) => item.month == date.month && item.year == date.year);
            if (result.length > 0)
                setData((prevData) => ({
                    ...prevData,
                    totalEntraces: result[0].totalValue
                }));
        }
    }, [UseGetEntraces, date]);

    // get total Domestic

    useEffect(() => {
        if (UseGetDomesticGoals.length > 0) {
            let calc = 0;
            UseGetDomesticGoals.map((item: IFinancesGoal) => {
                if (item.itens.length > 0) {
                    item.itens.map((expense) => {
                        if (expense.date >= date.from && expense.date <= date.to) {
                            calc = calc + expense.value;
                        }
                    });
                }
            });
            setData((prevData) => ({ ...prevData, totalDomestic: calc }));
        }
    }, [UseGetDomesticGoals, date]);

    // get total trip

    useEffect(() => {
        if (UseGetDomesticGoals.length > 0) {
            let calc = 0;
            UseGetDomesticGoals.map((item: IFinancesGoal) => {
                if (item.itens.length > 0) {
                    item.itens.map((expense) => {
                        if (expense.date >= date.from && expense.date <= date.to) {
                            calc = calc + expense.value;
                        }
                    });
                }
            });
            setData((prevData) => ({ ...prevData, totalDomestic: calc }));
        }
        if (UseGetTripGoals.length > 0) {
            let calc = 0;
            UseGetTripGoals.map((item: IFinancesGoal) => {
                if (item.itens.length > 0) {
                    item.itens.map((expense) => {
                        if (expense.date >= date.from && expense.date <= date.to) {
                            calc = calc + expense.value;
                        }
                    });
                }
            });
            setData((prevData) => ({ ...prevData, totalTrip: calc }));
        }
    }, [UseGetTripGoals, date]);

    return (
        <div className="finance-resume-grafic">
            <TitleOfSession title="Resume" />
            <div className="box">
                <DoughnutHalf
                    labels={["Total Domestic", "Total Trip", "Total Entrances"]}
                    values={[data.totalDomestic, data.totalTrip, data.totalEntraces - (data.totalDomestic + data.totalTrip) !== 0 ? data.totalEntraces - (data.totalDomestic + data.totalTrip) : 1]}
                    colors={["#FA385F", "#F1F180", "#6AD9A8", "#000"]}
                    porcent={((data.totalDomestic + data.totalTrip) * 100) / data.totalEntraces}
                />
                <div className="finance-resume-results">
                    <FinanceSimpleResult
                        title="Total Entrances"
                        value={data.totalEntraces}
                    />
                    <FinanceSimpleResult
                        title="Total Domestic"
                        value={data.totalDomestic}
                    />
                    <FinanceSimpleResult
                        title="Total Trip"
                        value={data.totalTrip}
                    />
                    <FinanceSimpleResult
                        title="Profit"
                        value={data.totalEntraces - (data.totalDomestic + data.totalTrip)}
                    />
                </div>
            </div>
        </div>
    );
};

export default FinanceResume;
