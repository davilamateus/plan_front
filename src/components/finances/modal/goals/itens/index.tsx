import { IFinancesExpense } from "../../../../../types/IFinances";
import "./style.scss";

interface type {
    itens: IFinancesExpense[];
    setItemOpened: (data: { opened: boolean; item: IFinancesExpense | undefined }) => void;
}

const GoalsItens = ({ itens, setItemOpened }: type) => {
    return (
        <div className="goals-itens">
            <h4>Itens</h4>
            <table className="goals-itens">
                <tr className="goals-table-title">
                    <th className="goals-table-title-title">Title</th>
                    <th className="goals-table-title-Date">Date</th>
                    <th className="goals-table-title-value">Value</th>
                </tr>
                {itens.map((item) => (
                    <tr
                        onClick={() => {
                            setItemOpened({ item, opened: true }); // Simplified the object creation
                        }}
                        className="goals-table-value">
                        <td className="goals-table-value-title">{item.title}</td>
                        <td className="date">{`${String(new Date(item.date).getDate()).padStart(2, "0")}/ ${String(
                            new Date(item.date).getMonth() + 1
                        ).padStart(2, "0")}`}</td>
                        <td className="goals-table-value-value">{item.value}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};

export default GoalsItens;
