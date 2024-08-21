import TitleOfSession from "../../../communs/titleOfSession";
import TripGoalsCard from "../goals/card/main";
import "./style.scss";
import TripResume from "../resume";
import TitleOfComponent from "../../../communs/titleOfComponent";
import { IFinancesGoal } from "../../../../types/IFinances";
import { useContext } from "react";
import { UseFinanceContext } from "../../../../context/useFinanceContext";
import Skeleton from "react-loading-skeleton";

const TravelFinanceMain = () => {
    const finance = useContext(UseFinanceContext);

    return (
        <div className="trip-main">
            <TitleOfSession title="Trip" />
            <TitleOfComponent title="Goals" />
            <div className="trip-goals">
                {finance?.state.loaded ? (
                    finance.state.trip.goals.length > 0 ? (
                        finance.state.trip.goals.map((item: IFinancesGoal) => (
                            <TripGoalsCard
                                key={item.id}
                                goal={item}
                            />
                        ))
                    ) : (
                        " No goals added yet."
                    )
                ) : (
                    <>
                        <div className="trip-box box">
                            <Skeleton style={{ width: "210px", height: "248px" }} />
                        </div>
                        <div className="trip-box box">
                            <Skeleton style={{ width: "210px", height: "248px" }} />
                        </div>
                        <div className="trip-box box">
                            <Skeleton style={{ width: "210px", height: "248px" }} />
                        </div>
                        <div className="trip-box box">
                            <Skeleton style={{ width: "210px", height: "248px" }} />
                        </div>
                        <div className="trip-box box">
                            <Skeleton style={{ width: "210px", height: "248px" }} />
                        </div>
                    </>
                )}
            </div>
            <TripResume />
        </div>
    );
};

export default TravelFinanceMain;
