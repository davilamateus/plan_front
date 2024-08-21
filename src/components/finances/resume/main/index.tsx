import { useState } from "react";
import { getTimestampInfomartions } from "../../../../functions/date/getTimestampInfomartions";
import Actives from "../actives";

import ResumeGrafic from "../resume";
import InputDateRange from "../dateRange";
import "./style.scss";
import ResumeGoals from "../domesticGoals/main";
import FinancesDashboard from "../../dashboard";
import TitleOfComponent from "../../../communs/titleOfComponent";

const ResumeFinances = () => {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    const [date, setDate] = useState({
        month: months[new Date().getMonth()],
        year: new Date().getFullYear(),
        from: getTimestampInfomartions(new Date().getTime(), 0).firstDay,
        to: getTimestampInfomartions(new Date().getTime(), 0).lastDay
    });

    return (
        <>
            <InputDateRange
                setDate={setDate}
                date={date}
            />
            <ResumeGoals date={date} />
            <div className="finance-resume-main">
                <div className="finances-resume-box">
                    <TitleOfComponent title={`Resume ${date.month}`} />
                    <FinancesDashboard
                        month={date.month}
                        year={date.year}
                        from={date.from}
                        to={date.to}
                    />
                </div>
                <Actives date={date} />
            </div>
        </>
    );
};

export default ResumeFinances;
