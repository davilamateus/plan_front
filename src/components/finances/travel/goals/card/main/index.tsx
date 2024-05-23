import { useState, useEffect } from "react";

import TripGoalsCicle from "../circle";
import "./style.scss";
import BoxFullpage from "../../../../../communs/boxFullpage";
import FinanceSimpleResult from "../../../../comuns/resume";
import ModalGoals from "../../../../modal/goals";
import { IFinancesGoal } from "../../../../../../types/finances/IGoals";

interface type {
    goal: IFinancesGoal;
}

const TripGoalsCard = ({ goal }: type) => {
    const [porcent, setPorcent] = useState(0);
    const [opened, setOpened] = useState<boolean>(false);

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
                            value={goal.id !== 0 ? (goal.valueItens * 100) / goal.value : 100}
                            color={goal.color}
                            icon={goal.icon}
                        />
                    </div>
                    <div className="porcent">{goal.id !== 0 ? <>{((goal.valueItens * 100) / goal.value).toFixed(1)}%</> : ""}</div>
                </div>
                <div className="trip-content">
                    <FinanceSimpleResult
                        title="Spent"
                        value={goal.valueItens}
                    />
                    {goal.id !== 0 ? (
                        <>
                            <FinanceSimpleResult
                                title="Goal"
                                value={goal.value}
                            />
                            <FinanceSimpleResult
                                title="Result"
                                value={goal.value - goal.valueItens}
                            />
                        </>
                    ) : (
                        <>
                            <FinanceSimpleResult
                                title="Number of Itens"
                                text={goal.itens?.length}
                            />
                            <FinanceSimpleResult
                                title="Average value"
                                value={goal.valueItens / goal.itens.length}
                            />
                        </>
                    )}
                </div>
            </div>
            {opened ? (
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
                                id: goal.id,
                                itens: goal.itens,
                                valueItens: goal.valueItens
                            }}
                            setOpened={setOpened}
                            type={2}
                        />
                    }
                />
            ) : (
                ""
            )}
        </>
    );
};

export default TripGoalsCard;
