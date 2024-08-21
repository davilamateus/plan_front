import DomesticGoalsCard from "../card/main";
import Skeleton from "react-loading-skeleton";
import TitleOfComponent from "../../../../communs/titleOfComponent";
import FinanceResumeCardOther from "../cardOther";
import { UseFinanceContext } from "../../../../../context/useFinanceContext";
import { useContext } from "react";
import { IFinancesGoal } from "../../../../../types/IFinances";
import "./style.scss";

const ResumeGoals = ({
    date
}: {
    date: {
        month: string;
        year: number;
        from: number;
        to: number;
    };
}) => {
    const finances = useContext(UseFinanceContext);

    const filter = finances?.state.domestic.goals.filter((goal) => goal.type === 1);

    return (
        <div className="finances-goals-main">
            <TitleOfComponent title="Domestic Goals" />

            <div className="finances-goals-cards">
                <FinanceResumeCardOther
                    key={0}
                    date={date}
                />
                {finances?.state.loaded ? (
                    filter && finances?.state.domestic.expenses.filter((expenses) => expenses.type === 1).length > 0 ? (
                        filter.map((item: IFinancesGoal) => (
                            <DomesticGoalsCard
                                key={item.id}
                                goal={item}
                                date={date}
                            />
                        ))
                    ) : (
                        "No goals added yet."
                    )
                ) : (
                    <>
                        <div className="goals-box box">
                            <div className="goals-left">
                                <div className="goal-circle">
                                    <Skeleton style={{ width: "48px", height: "48px", borderRadius: "48px" }} />
                                </div>
                                <div className="goal-porcent">
                                    <Skeleton style={{ width: "30px", height: "14px" }} />
                                </div>
                            </div>
                            <div className="goals-content">
                                <div>
                                    <Skeleton style={{ width: "90px", height: "14px" }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: "120px", height: "14px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="goals-box box">
                            <div className="goals-left">
                                <div className="goal-circle">
                                    <Skeleton style={{ width: "48px", height: "48px", borderRadius: "48px" }} />
                                </div>
                                <div className="goal-porcent">
                                    <Skeleton style={{ width: "30px", height: "14px" }} />
                                </div>
                            </div>
                            <div className="goals-content">
                                <div>
                                    <Skeleton style={{ width: "90px", height: "14px" }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: "120px", height: "14px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="goals-box box">
                            <div className="goals-left">
                                <div className="goal-circle">
                                    <Skeleton style={{ width: "48px", height: "48px", borderRadius: "48px" }} />
                                </div>
                                <div className="goal-porcent">
                                    <Skeleton style={{ width: "30px", height: "14px" }} />
                                </div>
                            </div>
                            <div className="goals-content">
                                <div>
                                    <Skeleton style={{ width: "90px", height: "14px" }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: "120px", height: "14px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="goals-box box">
                            <div className="goals-left">
                                <div className="goal-circle">
                                    <Skeleton style={{ width: "48px", height: "48px", borderRadius: "48px" }} />
                                </div>
                                <div className="goal-porcent">
                                    <Skeleton style={{ width: "30px", height: "14px" }} />
                                </div>
                            </div>
                            <div className="goals-content">
                                <div>
                                    <Skeleton style={{ width: "90px", height: "14px" }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: "120px", height: "14px" }} />
                                </div>
                            </div>
                        </div>
                        <div className="goals-box box">
                            <div className="goals-left">
                                <div className="goal-circle">
                                    <Skeleton style={{ width: "48px", height: "48px", borderRadius: "48px" }} />
                                </div>
                                <div className="goal-porcent">
                                    <Skeleton style={{ width: "30px", height: "14px" }} />
                                </div>
                            </div>
                            <div className="goals-content">
                                <div>
                                    <Skeleton style={{ width: "90px", height: "14px" }} />
                                </div>
                                <div>
                                    <Skeleton style={{ width: "120px", height: "14px" }} />
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ResumeGoals;
