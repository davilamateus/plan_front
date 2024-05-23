import { useEffect, useState } from "react";
import { formartMoney } from "../../../../functions/formartMoney/formartMoney";
import { useGetDomesticGoals } from "../../../../store/hooks/finances/useGetDomesticGoals";
import { useGetTripGoals } from "../../../../store/hooks/finances/useGetTripGoals";
import { IFinancesExpense } from "../../../../types/finances/IExpense";
import { IFinancesGoal } from "../../../../types/finances/IGoals";
import { useGetEntraces } from "../../../../store/hooks/finances/useGetEntraces";
import { dateTimeAgo } from "../../../../functions/date/dateTimeAgo";
import BoxFullpage from "../../../communs/boxFullpage";
import TitleOfSession from "../../../communs/titleOfComponent";
import ModalExpenses from "../../modal/expenses";
import ModalEntrances from "../../modal/entraces";
import "./style.scss";

interface type {
    date: {
        month: string;
        year: number;
        from: number;
        to: number;
    };
}

const Actives = ({ date }: type) => {
    const [opened, setOpened] = useState(false);
    const [index, setIndex] = useState<number>(0);
    const [finances, setFinances] = useState<IFinancesExpense[]>([]);

    const UseGetDomesticGoals = useGetDomesticGoals();
    const UseGetTripGoals = useGetTripGoals();
    const UseGetEntraces = useGetEntraces();

    useEffect(() => {
        if (UseGetTripGoals.length > 0 && UseGetDomesticGoals.length > 0 && UseGetEntraces.length > 0) {
            const get = UseGetTripGoals.concat(UseGetDomesticGoals).concat(UseGetEntraces);
            if (get.length > 0) {
                const filteredItems = get.flatMap((goal: IFinancesGoal) => {
                    if (goal.itens.length > 0) {
                        return goal.itens.filter((item) => item.date >= date.from && item.date <= date.to);
                    } else {
                        return [];
                    }
                });
                setFinances(filteredItems);
            }
        }
    }, [UseGetDomesticGoals, UseGetEntraces, UseGetTripGoals, date]);

    return (
        <div className="finances-actives">
            <TitleOfSession title="Actives" />
            <div className="finances-actives-table box">
                {finances.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th style={{ textAlign: "center" }}>When</th>
                                <th style={{ textAlign: "right" }}>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {finances.map((item, index) => (
                                <tr
                                    className="finances-actives-item"
                                    onClick={() => {
                                        setOpened(true);
                                        setIndex(index);
                                    }}
                                    key={index}>
                                    <td>
                                        <div>
                                            <div
                                                className="item-color"
                                                style={{
                                                    backgroundColor: !item.type ? "#6AD9A8" : item.type == 1 ? "#FA385F" : "#F1F180"
                                                }}></div>
                                            {item.title}
                                        </div>
                                    </td>
                                    <td className="date">{`${String(new Date(item.date).getDate()).padStart(2, "0")}/ ${String(new Date(item.date).getMonth() + 1).padStart(2, "0")}`}</td>
                                    <td
                                        style={{ color: !item.type ? "#6AD9A8" : item.type == 1 ? "#FA385F" : "#F1F180" }}
                                        className="value">
                                        {formartMoney(item.value)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div className="no-activities">No activities added yet.</div>
                )}

                {opened && (
                    <BoxFullpage
                        title="Edit"
                        content={
                            finances[index].type >= 1 ? (
                                <ModalExpenses
                                    setOpened={setOpened}
                                    expenseEdit={finances[index]}
                                    type={finances[index].type}
                                />
                            ) : (
                                <ModalEntrances
                                    setOpened={setOpened}
                                    entraceEdit={finances[index]}
                                />
                            )
                        }
                        setOpened={setOpened}
                    />
                )}
            </div>
        </div>
    );
};

export default Actives;
