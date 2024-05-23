import { useEffect, useState } from "react";
import { formartMoney } from "../../../../../functions/formartMoney/formartMoney";
import { IFinancesExpense } from "../../../../../types/finances/IExpense";
import DomesticCostPlanningCircle from "../card/circle";
import "./style.scss";

interface type {
    expenses: IFinancesExpense[];
    date: {
        month: string;
        year: number;
        from: number;
        to: number;
    };
}

const FinanceResumeCardOther = ({ expenses, date }: type) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let calc = 0;
        expenses.map((item) => {
            if (item?.value > 0 && item?.date >= date.from && item?.date <= date.to) {
                calc = calc + item.value;
            }
        });
        setValue(calc);
    }, [expenses, date]);

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
