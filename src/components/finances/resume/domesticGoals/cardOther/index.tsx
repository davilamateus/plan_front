import { useContext, useEffect, useState } from "react";
import { formartMoney } from "../../../../../functions/formartMoney/formartMoney";
import { UseFinanceContext } from "../../../../../context/useFinanceContext";
import DomesticCostPlanningCircle from "../card/circle";
import "./style.scss";

interface type {
    date: {
        month: string;
        year: number;
        from: number;
        to: number;
    };
}

const FinanceResumeCardOther = ({ date }: type) => {
    const [value, setValue] = useState(0);
    const finances = useContext(UseFinanceContext);

    useEffect(() => {
        const calc =
            finances?.state.domestic.expenses
                .filter((item) => item.date > date.from && item.date <= date.to)
                .reduce((acc, item) => item.value + acc, 0) || 0;
        setValue(calc);
    }, [finances, date]);

    return value > 0 ? (
        <div className="goals-box-others box">
            <div className="goals-left">
                <div className="goal-circle">
                    <DomesticCostPlanningCircle
                        value={100}
                        color={"#000"}
                        icon={0}
                    />
                </div>
                <div className="goal-porcent">...</div>
            </div>
            <div className="goals-content">
                <div className="goals-title">{"Othres"}</div>
                <div className="goals-value">
                    <span style={{ color: `#000` }}>{formartMoney(value)}</span>
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default FinanceResumeCardOther;
