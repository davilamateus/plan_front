import { useState, useEffect, useContext } from "react";

import TripGoalsCicle from "../circle";
import "./style.scss";
import BoxFullpage from "../../../../../communs/boxFullpage";
import FinanceSimpleResult from "../../../../comuns/resume";
import ModalGoals from "../../../../modal/goals";
import { IFinancesGoal } from "../../../../../../types/IFinances";
import { UseFinanceContext } from "../../../../../../context/useFinanceContext";

interface type {
    goal: IFinancesGoal;
}

const TripGoalsCard = ({ goal }: type) => {
    const [opened, setOpened] = useState<boolean>(false);
    const [valueItens, setValueItens] = useState(0);
    const finances = useContext(UseFinanceContext);

    useEffect(() => {
        if (finances) {
            const array = finances?.state.trip.expenses.filter((item) => item.financesGoalId == goal.id);
            setValueItens(array.reduce((acc, crr) => acc + crr.value, 0));
        }
    }, [finances]);

    return (
        <>
            <div
                className="trip-box box"
                onClick={() => {
                    setOpened(true);
                }}>
                <div className="trip-title">{goal.title}</div>
                <div className="trip-left">
                    <div className="circle">
                        <TripGoalsCicle
                            value={goal.id !== 0 ? (valueItens * 100) / goal.value : 100}
                            color={goal.color}
                            icon={goal.icon}
                        />
                    </div>
                    <div className="porcent">{goal.id !== 0 ? <>{((valueItens * 100) / goal.value).toFixed(1)}%</> : ""}</div>
                </div>
                <div className="trip-content">
                    <FinanceSimpleResult
                        title="Spent"
                        value={valueItens}
                    />
                    {goal.id !== 0 ? (
                        <>
                            <FinanceSimpleResult
                                title="Goal"
                                value={goal.value}
                            />
                            <FinanceSimpleResult
                                title="Result"
                                value={goal.value - valueItens}
                            />
                        </>
                    ) : (
                        <>
                            <FinanceSimpleResult
                                title="Number of Itens"
                                text={0}
                            />
                            <FinanceSimpleResult
                                title="Average value"
                                value={valueItens / 0}
                            />
                        </>
                    )}
                </div>
            </div>
            {opened && (
                <BoxFullpage
                    title="Edit Goal"
                    setOpened={setOpened}
                    content={
                        <ModalGoals
                            goalEdit={{
                                title: goal.title,
                                color: goal.color,
                                icon: goal.icon,
                                value: goal.value,
                                type: 2,
                                id: goal.id
                            }}
                            setOpened={setOpened}
                        />
                    }
                />
            )}
        </>
    );
};

export default TripGoalsCard;
