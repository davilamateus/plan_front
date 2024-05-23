import FinanceSimpleResult from "../../comuns/resume";
import { useGetFinanceResume } from "../../../../store/hooks/finances/useGetFinanceResume";
import "./style.scss";
import TitleOfComponent from "../../../communs/titleOfComponent";

const TripResume = () => {
    const UseGetFinanceResume = useGetFinanceResume();

    console.log((UseGetFinanceResume.tripExpenses * 100) / (UseGetFinanceResume.tripExpenses + UseGetFinanceResume.cashInHand));

    return (
        <div className="trip-finances-resume">
            <TitleOfComponent title="Resume" />

            <div className="trip-finances-resume-texts">
                <FinanceSimpleResult
                    title="Total Goals"
                    value={UseGetFinanceResume.tripGoals}
                />
                <FinanceSimpleResult
                    title="Total Spent"
                    value={UseGetFinanceResume.tripExpenses}
                />
                <FinanceSimpleResult
                    title="Total Cash in Hand"
                    value={UseGetFinanceResume.cashInHand}
                />
                <FinanceSimpleResult
                    title="Result"
                    value={UseGetFinanceResume.missing}
                />
            </div>

            <div className="trip-bar">
                <div
                    style={{ width: `${((UseGetFinanceResume.missing * 100) / UseGetFinanceResume.tripGoals - 100) * -1}%` }}
                    className="trip-bar-results">
                    <div
                        style={{ width: `${(UseGetFinanceResume.tripExpenses * 100) / (UseGetFinanceResume.tripExpenses + UseGetFinanceResume.cashInHand)}%` }}
                        className="trip-bar-spent"></div>
                    <div
                        style={{ width: `${(UseGetFinanceResume.cashInHand * 100) / (UseGetFinanceResume.tripExpenses + UseGetFinanceResume.cashInHand)}%` }}
                        className="trip-bar-cashInHand"></div>
                </div>
                <div
                    style={{
                        width: `${(UseGetFinanceResume.missing * 100) / UseGetFinanceResume.tripGoals}%`
                    }}
                    className="trip-bar-rest"></div>
            </div>
        </div>
    );
};

export default TripResume;
