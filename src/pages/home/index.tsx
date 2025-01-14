import { IsLogged } from "../../functions/isLogged";
import { useContext, useEffect } from "react";
import { UseTitleContext } from "../../context/useTitleContext";
import { getTimestampInfomartions } from "../../functions/date/getTimestampInfomartions";
import TitleSession from "../../components/communs/titleSession";
import DashboardAds from "../../components/ads";
import DashboardExchange from "../../components/exchange/dashboard";
import DashboardFinances from "../../components/finances/dashboard";
import DashboardNoticies from "../../components/noticies/dashboard/main";
import DashboardDaysToTravel from "../../components/daysToTravel";
import DashboardRadio from "../../components/radio";
import DashboardToDoList from "../../components/toDoList/dashboard";
import DashboardWeather from "../../components/weather";
import "./style.scss";

const PageHome = () => {
	const title = useContext(UseTitleContext);
	useEffect(() => {
		title.setTitle("Dashboard");
	}, []);
	return (
		<div className="home ">
			<div className="home-column-1">
				<div className="home-weather-dayToTrip">
					<DashboardWeather />
					<DashboardDaysToTravel />
				</div>
				<div>
					<DashboardNoticies />
				</div>
				<DashboardRadio />
			</div>
			<div className="home-column-2">
				<DashboardToDoList />
			</div>
			<div className="home-column-3">
				<DashboardExchange />
				<div className="home-dashboard-finances">
					<TitleSession title="Gestão de Gastos" link="/financeiro" />

					<DashboardFinances
						month={
							getTimestampInfomartions(new Date().getTime(), 0).nameOfMonth
						}
						year={new Date().getFullYear()}
						from={getTimestampInfomartions(new Date().getTime(), 0).firstDay}
						to={getTimestampInfomartions(new Date().getTime(), 0).lastDay}
					/>
				</div>
				<DashboardAds />
			</div>
		</div>
	);
};

export default PageHome;
