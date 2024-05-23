import React, { useEffect, useState } from "react";
import DomesticCostPlanningCircle from "../circle";
import "./style.scss";
import BoxFullpage from "../../../../../communs/boxFullpage";
import { formartMoney } from "../../../../../../functions/formartMoney/formartMoney";
import { IFinancesGoal } from "../../../../../../types/finances/IGoals";
import ModalGoals from "../../../../modal/goals";

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

    useEffect(() => {
        let calc = 0;
        goal.itens.map((item) => {
            if (item?.value > 0 && item?.date >= date.from && item?.date <= date.to) {
                calc = calc + item.value;
            }
        });
        setCalc(calc);
        setPorcent(+((calc * 100) / goal.value).toFixed(1));
    }, [goal, date]);

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
                            type={1}
                            goalEdit={{
                                title: goal.title,
                                color: goal.color,
                                icon: goal.icon,
                                value: goal.value,
                                type: 1,
                                id: goal.id,
                                itens: goal.itens,
                                valueItens: goal.valueItens
                            }}
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
