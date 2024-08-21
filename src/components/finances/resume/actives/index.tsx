import { useContext, useEffect, useState } from "react";
import { formartMoney } from "../../../../functions/formartMoney/formartMoney";
import { IFinancesEntrace, IFinancesExpense, IFinancesGoal } from "../../../../types/IFinances";
import { UseFinanceContext } from "../../../../context/useFinanceContext";
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
    const [opened, setOpened] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const [finances, setFinances] = useState<IFinancesEntrace[] | IFinancesExpense[]>([]);

    const context = useContext(UseFinanceContext);
    useEffect(() => {
        if (context?.state.trip.expenses) {
            const newArray = context?.state.entraces
                .concat(context?.state.domestic.expenses.concat(context.state.trip.expenses))
                .filter((item) => item.date > date.from && item.date <= date.to);

            // Ordenar por data (assumindo que item.date é um timestamp ou data em milissegundos)
            newArray.sort((a, b) => (a.date < b.date ? 1 : -1));

            setFinances(newArray);
            console.log(newArray);
        }
    }, [context, date]);

    const isExpense = (item: IFinancesEntrace | IFinancesExpense): item is IFinancesExpense => {
        return (item as IFinancesExpense).type !== undefined;
    };

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
                                                    backgroundColor: isExpense(item)
                                                        ? item.type == 1
                                                            ? "#FA385F"
                                                            : "#F1F180"
                                                        : "#6AD9A8"
                                                }}></div>
                                            {item.title}
                                        </div>
                                    </td>
                                    <td className="date">{`${String(new Date(item.date).getDate()).padStart(2, "0")}/ ${String(
                                        new Date(item.date).getMonth() + 1
                                    ).padStart(2, "0")}`}</td>
                                    <td
                                        style={{ color: item.color }}
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
                            <>
                                {isExpense(finances[index]) ? (
                                    <ModalExpenses
                                        setOpened={setOpened}
                                        expenseEdit={finances[index] as IFinancesExpense}
                                        type={(finances[index] as IFinancesExpense).type}
                                    />
                                ) : (
                                    <ModalEntrances
                                        setOpened={setOpened}
                                        entraceEdit={finances[index] as IFinancesEntrace}
                                    />
                                )}
                            </>
                        }
                        setOpened={setOpened}
                    />
                )}
            </div>
        </div>
    );
};

export default Actives;
