import { useState } from "react";
import ButtonAdd from "./../../communs/buttons/add";
import FinancesMenuAdd from "../menuAdd";
import TitleOfSession from "../../communs/titleOfSession";
import ResumeFinances from "../resume/main";
import FinancesEntraces from "../entraces/main";
import TravelFinanceMain from "../travel/main";
import "./style.scss";

const MainFinances = () => {
    const [opened, setOpened] = useState(false);

    return (
        <div className="finances-page">
            <ButtonAdd
                setOpened={setOpened}
                opened={opened}
                content={<FinancesMenuAdd setOpened={setOpened} />}
            />
            <FinancesEntraces />
            <hr />
            <ResumeFinances />
            <hr />
            <TravelFinanceMain />
        </div>
    );
};

export default MainFinances;
