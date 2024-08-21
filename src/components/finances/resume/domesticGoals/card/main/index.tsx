import { useContext, useEffect, useState } from "react";
import { formartMoney } from "../../../../../../functions/formartMoney/formartMoney";
import { IFinancesGoal } from "../../../../../../types/IFinances";
import DomesticCostPlanningCircle from "../circle";
import BoxFullpage from "../../../../../communs/boxFullpage";
import ModalGoals from "../../../../modal/goals";
import "./style.scss";
import { UseFinanceContext } from "../../../../../../context/useFinanceContext";

interface type {
    goal: IFinancesGoal;
    date: {
        month: string;
        year: number;
        from: number;
        to: number;
    };
}

const DomesticGoalsCardOthers = ({ goal, date }: type) => {
    const [calc, setCalc] = useState(0);
    const [porcent, setPorcent] = useState(0);
    const [opened, setOpened] = useState<boolean>(false);

    const finances = useContext(UseFinanceContext);

    useEffect(() => {
        const calc =
            finances?.state.domestic.expenses
                .filter((item) => item.date > date.from && item.date <= date.to && item.financesGoalId == goal.id)
                .reduce((acc, item) => item.value + acc, 0) || 0;
        setCalc(calc);
    }, [finances, date]);

    return (
        <>
            <div
                className="goals-box box"
                onClick={() => {
                    setOpened(true);
                }}>
                <div className="goals-left">
                    <div className="goal-circle">
                        <DomesticCostPlanningCircle
                            value={goal.id !== 0 ? porcent : 100}
                            color={goal.color}
                            icon={goal.icon}
                        />
                    </div>
                    <div className="goal-porcent">{goal.id !== 0 ? <>{porcent}%</> : ""}</div>
                </div>
                <div className="goals-content">
                    <div className="goals-title">{goal.title}</div>
                    <div className="goals-value">
                        <span style={{ color: `${goal.color}` }}>{formartMoney(calc)}</span>
                        {goal.value !== null ? <span> of {formartMoney(goal.value)}</span> : ""}
                    </div>
                </div>
            </div>
            {opened ? (
                <BoxFullpage
                    title="Edit Goal"
                    setOpened={setOpened}
                    content={
                        <ModalGoals
                            goalEdit={goal}
                            setOpened={setOpened}
                        />
                    }
                />
            ) : (
                ""
            )}
        </>
    );
};

export default DomesticGoalsCardOthers;
