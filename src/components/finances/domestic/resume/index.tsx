import { useContext, useState } from "react";
import { UseFinanceContext } from "../../../../context/useFinanceContext";
import FinanceSimpleResult from "../../comuns/resume";
import TitleOfSession from "../../../communs/titleOfComponent";
import DoughnutHalf from "../../comuns/doughnutHalf";
import "./style.scss";

interface type {
    date: {
        month: string;
        year: number;
        from: number;
        to: number;
    };
}
const FinanceResume = ({ date }: type) => {
    const finances = useContext(UseFinanceContext);

    const [data, setData] = useState({
        totalDomestic: 0,
        totalEntraces: 0,
        totalTrip: 0
    });

    // get total entrances

    return (
        <div className="finance-resume-grafic">
            <TitleOfSession title="Resume" />
            <div className="box">
                <DoughnutHalf
                    labels={["Total Domestic", "Total Trip", "Total Entrances"]}
                    values={[
                        data.totalDomestic,
                        data.totalTrip,
                        data.totalEntraces - (data.totalDomestic + data.totalTrip) > 0 ? data.totalEntraces : 0
                    ]}
                    colors={["#FA385F", "#F1F180", "#6AD9A8", "#000"]}
                    porcent={Number((((data.totalDomestic + data.totalTrip) * 100) / data.totalEntraces).toFixed(2))}
                    loaded={finances?.state.loaded ? true : false}
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
