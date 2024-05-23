import RadioComponent from "../radio/main";
import Weather from "../weather";
import DaysToTravel from "../daysToTravel";
import NoticiesDashboard from "../noticies/dashboard/main";
import ToDoListDashboard from "../toDoList/dashboard";
import ExchangeDashboard from "../exchange/dashboard";
import AdsDashboard from "../ads/dashboard";
import AdvicesDashboard from "../advices/dashboard/main";
import FinancesDashboard from "../finances/dashboard";
import "./style.scss";

const HomeMain = () => {
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
                <FinancesDashboard />
                <AdsDashboard />
            </div>
            <div className="home-column-4">
                <AdvicesDashboard />
            </div>
        </div>
    );
};

export default HomeMain;
