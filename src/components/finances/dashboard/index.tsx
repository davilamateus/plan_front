import { useContext, useEffect, useState } from "react";
import { UseFinanceContext } from "../../../context/useFinanceContext";
import DoughnutHalf from "../comuns/doughnutHalf";
import FinanceSimpleResult from "../comuns/resume";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
interface DateType {
    month: string;
    year: number;
    from: number;
    to: number;
}

const FinancesDashboard = (date: DateType) => {
    const finances = useContext(UseFinanceContext);
    const [data, setData] = useState({
        totalDomestic: 0,
        totalEntraces: 0,
        totalTrip: 0
    });

    useEffect(() => {
        if (finances) {
            const totalEntraces = finances.state.entraces
                .filter((item) => item.date > date.from && item.date <= date.to)
                .reduce((acc, item) => acc + item.value, 0);

            const totalTrip = finances.state.trip.expenses
                .filter((item) => item.date > date.from && item.date <= date.to)
                .reduce((acc, item) => acc + item.value, 0);

            const totalDomestic = finances.state.domestic.expenses

                .filter((item) => item.date > date.from && item.date <= date.to)
                .reduce((acc, item) => acc + item.value, 0);

            setData({ totalEntraces, totalDomestic, totalTrip });
        }
    }, [finances, date]);

    return (
        <div className="finance-dashboard">
            <div className="finances-resume box">
                <div className="finance-resume-components">
                    <div className="finances-resume-cards">
                        {finances?.state.loaded ? (
                            <>
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
                            </>
                        ) : (
                            <>
                                <div>
                                    <Skeleton style={{ width: "128px", height: "16px" }} />
                                    <Skeleton style={{ width: "68px", height: "16px", marginTop: "6px" }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: "128px", height: "16px" }} />
                                    <Skeleton style={{ width: "68px", height: "16px", marginTop: "6px" }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: "128px", height: "16px" }} />
                                    <Skeleton style={{ width: "68px", height: "16px", marginTop: "6px" }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: "128px", height: "16px" }} />
                                    <Skeleton style={{ width: "68px", height: "16px", marginTop: "6px" }} />
                                </div>
                            </>
                        )}
                    </div>

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
                </div>
            </div>
        </div>
    );
};

export default FinancesDashboard;
