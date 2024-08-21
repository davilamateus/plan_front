import { IsLogged } from "../../functions/isLogged";
import { useContext } from "react";
import { UseTitleContext } from "../../context/useTitleContext";
import { getTimestampInfomartions } from "../../functions/date/getTimestampInfomartions";
import AdsDashboard from "../../components/ads";
import AdvicesDashboard from "../../components/advices/dashboard/main";
import DaysToTravel from "../../components/daysToTravel";
import ExchangeDashboard from "../../components/exchange/dashboard";
import FinancesDashboard from "../../components/finances/dashboard";
import NoticiesDashboard from "../../components/noticies/dashboard/main";
import RadioComponent from "../../components/radio";
import ToDoListDashboard from "../../components/toDoList/dashboard";
import Weather from "../../components/weather";
import TitleOfComponentOnDashnboard from "../../components/communs/titleOfComponentOnDashnboard";
import "./style.scss";

const HomePage = () => {
    IsLogged();

    const title = useContext(UseTitleContext);
    title.setTitle("Dashboard");

    return (
        <div className="home-main ">
            <div className="home-column-1">
                <div className="home-weather-dayToTrip">
                    <Weather />
                    <DaysToTravel />
                </div>
                <div>
                    <NoticiesDashboard />
                </div>
                <RadioComponent />
            </div>
            <div className="home-column-2">
                <ToDoListDashboard />
            </div>
            <div className="home-column-3">
                <ExchangeDashboard />
                <div>
                    <TitleOfComponentOnDashnboard
                        title="Finances Resume"
                        link="/finances"
                    />
                    <FinancesDashboard
                        month={getTimestampInfomartions(new Date().getTime(), 0).nameOfMonth}
                        year={new Date().getFullYear()}
                        from={getTimestampInfomartions(new Date().getTime(), 0).firstDay}
                        to={getTimestampInfomartions(new Date().getTime(), 0).lastDay}
                    />
                </div>
                <AdsDashboard />
            </div>
            <div className="home-column-4">
                <AdvicesDashboard />
            </div>
        </div>
    );
};

export default HomePage;
