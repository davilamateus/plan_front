import FinanceSimpleResult from "../../comuns/resume";
import "./style.scss";
import TitleOfComponent from "../../../communs/titleOfComponent";
import { useContext, useEffect, useState } from "react";
import { UseFinanceContext } from "../../../../context/useFinanceContext";

const TripResume = () => {
    const finances = useContext(UseFinanceContext);
    const [resume, setResume] = useState({
        tripGoals: 0,
        tripExpenses: 0,
        cashInHand: 0,
        missing: 0
    });

    useEffect(() => {
        if (finances) {
            const calcTripGoals = finances.state.trip.goals.reduce((acc, crr) => acc + crr.value, 0);
            const calcTripExpenses = finances.state.trip.expenses.reduce((acc, crr) => acc + crr.value, 0);
            const calcDomesticExpenses = finances.state.domestic.expenses.reduce((acc, crr) => acc + crr.value, 0);
            const calcEntraces = finances.state.entraces.reduce((acc, crr) => acc + crr.value, 0);
            const calcCashInHand = calcEntraces - calcDomesticExpenses - calcTripExpenses;
            setResume({
                tripGoals: calcTripGoals,
                tripExpenses: calcTripExpenses,
                cashInHand: calcEntraces - calcDomesticExpenses - calcTripExpenses,
                missing: calcTripGoals - calcTripExpenses - calcCashInHand
            });
        }
    }, [finances]);
    const totalSpent = resume.tripExpenses + resume.cashInHand;
    const spentPercentage = totalSpent ? (resume.tripExpenses * 100) / totalSpent : 0;
    const cashInHandPercentage = totalSpent ? (resume.cashInHand * 100) / totalSpent : 0;
    const missingPercentage = resume.tripGoals ? (resume.missing * 100) / resume.tripGoals : 0;

    return (
        <div className="trip-finances-resume">
            <TitleOfComponent title="Resume" />

            <div className="trip-finances-resume-texts">
                <FinanceSimpleResult
                    title="Total Goals"
                    value={resume.tripGoals}
                />
                <FinanceSimpleResult
                    title="Total Spent"
                    value={resume.tripExpenses}
                />
                <FinanceSimpleResult
                    title="Total Cash in Hand"
                    value={resume.cashInHand}
                />
                <FinanceSimpleResult
                    title="Result"
                    value={resume.missing}
                />
            </div>

            <div className="trip-bar">
                <div
                    style={{
                        width: `${100 - missingPercentage}%`
                    }}
                    className="trip-bar-results">
                    <div
                        style={{
                            width: `${spentPercentage}%`
                        }}
                        className="trip-bar-spent"></div>
                    <div
                        style={{
                            width: `${cashInHandPercentage}%`
                        }}
                        className="trip-bar-cashInHand"></div>
                </div>
                <div
                    style={{
                        width: `${missingPercentage}%`
                    }}
                    className="trip-bar-rest"></div>
            </div>
        </div>
    );
};

export default TripResume;
