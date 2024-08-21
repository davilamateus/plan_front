import { useContext, useState } from "react";
import { UseTitleContext } from "../../context/useTitleContext";
import ButtonAdd from "../../components/communs/buttons/add";
import FinancesEntraces from "../../components/finances/entraces/main";
import FinancesMenuAdd from "../../components/finances/menuAdd";
import ResumeFinances from "../../components/finances/resume/main";
import TravelFinanceMain from "../../components/finances/travel/main";
import "./style.scss";
const PageFinances = () => {
    const [opened, setOpened] = useState(false);

    const title = useContext(UseTitleContext);
    title.setTitle("Finances");

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

export default PageFinances;
