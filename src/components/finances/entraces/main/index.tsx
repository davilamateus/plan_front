import TitleOfSession from "../../../communs/titleOfSession";
import "./style.scss";
import BarFinances from "../bar/bar";

const FinancesEntraces = () => {
	return (
		<>
			<TitleOfSession title="Entradas" />
			<div className="finances-entraces-grafic">
				<BarFinances />
			</div>
		</>
	);
};

export default FinancesEntraces;
