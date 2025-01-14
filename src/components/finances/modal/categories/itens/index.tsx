import { formartMoney } from "../../../../../functions/formartMoney/formartMoney";
import { IFinancesExpense } from "../../../../../types/IFinances";
import "./style.scss";

interface type {
	itens: IFinancesExpense[];
	setItemOpened: (data: {
		opened: boolean;
		item: IFinancesExpense | undefined;
	}) => void;
}

const GoalsItens = ({ itens, setItemOpened }: type) => {
	return (
		<div className="goals-itens">
			<h5>Itens:</h5>
			<table className="goals-itens box">
				<thead>
					<tr className="goals-table-title">
						<th className="goals-table-title-title">Título</th>
						<th className="goals-table-title-Date">Data</th>
						<th className="goals-table-title-value">Valor</th>
					</tr>
				</thead>
				<tbody>
					{itens.map((item) => (
						<tr
							onClick={() => {
								setItemOpened({ item, opened: true });
							}}
							className="goals-table-value"
							key={item.id}
						>
							<td className="goals-table-value-title">{item.title}</td>
							<td className="date">{`${String(
								new Date(item.date).getDate()
							).padStart(2, "0")}/ ${String(
								new Date(item.date).getMonth() + 1
							).padStart(2, "0")}`}</td>
							<td className="goals-table-value-value">
								{formartMoney(item.value)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default GoalsItens;
