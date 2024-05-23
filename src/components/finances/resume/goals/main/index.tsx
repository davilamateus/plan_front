import DomesticGoalsCard from "../card/main";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
import TitleOfSession from "../../../../communs/titleOfComponent";
import { useGetDomesticGoals } from "../../../../../store/hooks/finances/useGetDomesticGoals";
import { IFinancesGoal } from "../../../../../types/finances/IGoals";

import FinanceResumeCardOther from "../cardOther";

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
    const UseGetDometicGoals = useGetDomesticGoals();

    return (
        <div className="finances-goals-main">
            <TitleOfSession title="Domestic Goals" />
            <div className="finances-goals-cards">
                {UseGetDometicGoals.domesticGoals !== false ? (
                    UseGetDometicGoals.length > 0 ? (
                        UseGetDometicGoals.map((item: IFinancesGoal) =>
                            item.title == "Others" ? (
                                <FinanceResumeCardOther
                                    date={date}
                                    expenses={item.itens}
                                />
                            ) : (
                                <DomesticGoalsCard
                                    key={item.id}
                                    goal={item}
                                    date={date}
                                />
                            )
                        )
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
