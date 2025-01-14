import { useState } from "react";
import { getTimestampInfomartions } from "../../../../functions/date/getTimestampInfomartions";
import Actives from "../actives";

import InputDateRange from "../dateRange";
import "./style.scss";
import ResumeGoals from "../domesticGoals/main";
import DashboardFinances from "../../dashboard";
import TitleOfComponent from "../../../communs/titleOfComponent";

const ResumeFinances = () => {
	const months = [
		"Janeiro",
		"Fevereiro",
		"Março",
		"Abril",
		"Maio",
		"Junho",
		"Julho",
		"Agosto",
		"Setembro",
		"Outubro",
		"Novembro",
		"Dezembro",
	];

	const [date, setDate] = useState({
		month: months[new Date().getMonth()],
		year: new Date().getFullYear(),
		from: getTimestampInfomartions(new Date().getTime(), 0).firstDay,
		to: getTimestampInfomartions(new Date().getTime(), 0).lastDay,
	});

	return (
		<div className="finances-resume-main">
			<InputDateRange setDate={setDate} date={date} />
			<div className="finances-resume-box box">
				<ResumeGoals date={date} />
				<div className="finances-resume-dashboard-actives">
					<div className="finances-resume-dashboard">
						<TitleOfComponent title={`Resumo`} />
						<DashboardFinances
							month={date.month}
							year={date.year}
							from={date.from}
							to={date.to}
						/>
					</div>
					<Actives date={date} />
				</div>
			</div>
		</div>
	);
};

export default ResumeFinances;
