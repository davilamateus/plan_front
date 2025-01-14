import { Dispatch, SetStateAction, useContext, useState } from "react";
import { IFinancesEntrace } from "../../../../types/IFinances";
import { UseFinanceContext } from "../../../../context/useFinanceContext";
import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import "./../style.scss";

interface type {
	setOpened: Dispatch<SetStateAction<boolean>>;
	entraceEdit?: IFinancesEntrace;
}
const ModalEntrances = ({ setOpened, entraceEdit }: type) => {
	const [btnLoading, setBtnLoading] = useState(false);
	const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
	const [entrace, setEntrace] = useState<IFinancesEntrace>(
		entraceEdit || {
			id: 0,
			title: "",
			color: "",
			value: 0,
			date: new Date().getTime(),
		}
	);
	const finances = useContext(UseFinanceContext);

	const handleEntrace = () => {
		setBtnLoading(true);

		if (entraceEdit) {
			setBtnLoading(true);
			finances?.editEntrace(entrace);
			setTimeout(() => {
				setOpened(false);
			}, 2000);
		} else {
			setBtnLoading(true);
			finances?.addEntrace(entrace);
			setTimeout(() => {
				setOpened(false);
			}, 2000);
		}
	};

	const handleDelete = () => {
		setBtnLoadingDelete(true);
		finances?.deleteEntrace(entrace);
		setTimeout(() => {
			setOpened(false);
		}, 2000);
	};

	return (
		<div className="modal-box-opened">
			<InputSimple
				title="Título:"
				setInput={(e) => {
					setEntrace({ ...entrace, title: e });
				}}
				input={entrace.title}
				placeholder="Digite um título..."
			/>
			<InputDate
				title="Data:"
				date={entrace.date}
				setDate={(e) => {
					setEntrace({ ...entrace, date: e });
				}}
			/>
			<InputMoney
				title="Valor:"
				setInput={(e) => {
					setEntrace({ ...entrace, value: e });
				}}
				input={entrace.value}
			/>
			<ButtonSimple
				title={entraceEdit ? "Editar" : "Adicionar"}
				type="success"
				status={entrace.title !== "" && entrace.value !== 0}
				loading={btnLoading}
				action={() => {
					handleEntrace();
				}}
			/>
			{entraceEdit && (
				<ButtonSimple
					title="Deletar"
					type="delete"
					status={true}
					loading={btnLoadingDelete}
					action={() => {
						handleDelete();
					}}
				/>
			)}
		</div>
	);
};

export default ModalEntrances;
