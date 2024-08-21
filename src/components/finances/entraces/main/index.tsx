import GraficOfBar from "../grafic/grafic";
import TitleOfSession from "../../../communs/titleOfSession";
import "./style.scss";

const FinancesEntraces = () => {
    return (
        <>
            <TitleOfSession title="Entraces" />
            <div className="finances-entraces-grafic">
                <GraficOfBar />
            </div>
        </>
    );
};

export default FinancesEntraces;
