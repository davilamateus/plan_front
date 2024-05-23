import { useGetFinanceResume } from "../../../store/hooks/finances/useGetFinanceResume";
import DoughnutHalf from "../comuns/doughnutHalf";
import FinanceSimpleResult from "../comuns/resume";
import TitleOfComponentOnDashnboard from "../../communs/titleOfComponentOnDashnboard";
import "./style.scss";

const FinancesDashboard = () => {
    const UseGetFinanceResume = useGetFinanceResume();

    return (
        <div className="finance-dashboard">
            <TitleOfComponentOnDashnboard
                link="/finances"
                title={`Finance resume`}
            />
            <div className="finances-resume box">
                <div className="finance-resume-components">
                    <div className="finances-resume-cards">
                        <FinanceSimpleResult
                            title={`Trip Goals`}
                            value={UseGetFinanceResume.tripGoals}
                        />
                        <FinanceSimpleResult
                            title={`Trip Paid`}
                            value={UseGetFinanceResume.tripExpenses}
                        />
                        <FinanceSimpleResult
                            title={`Cash In Hand`}
                            value={UseGetFinanceResume.cashInHand}
                        />
                        <FinanceSimpleResult
                            title={UseGetFinanceResume.missing < 0 ? `Missing to trip` : "Profit"}
                            value={UseGetFinanceResume.missing}
                        />
                    </div>
                    <DoughnutHalf
                        labels={UseGetFinanceResume.missing > 0 ? ["Total Paid", "Cash in Hand"] : []}
                        values={UseGetFinanceResume.missing ? [UseGetFinanceResume.tripExpense, UseGetFinanceResume.cashInHand > 0 ? UseGetFinanceResume.missing : 0] : []}
                        colors={UseGetFinanceResume.missing ? (UseGetFinanceResume.missing < 0 ? ["#6AD9A8", "#F1F180", "#edf0eeed"] : ["#6AD9A8"]) : []}
                        porcent={UseGetFinanceResume.missingPorcents}
                    />
                </div>
            </div>
        </div>
    );
};

export default FinancesDashboard;
