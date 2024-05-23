import Skeleton from "react-loading-skeleton"
import TitleOfSession from "../../../communs/titleOfSession"
import { useGetTripGoals } from "../../../../store/hooks/finances/useGetTripGoals"
import TripGoalsCard from "../goals/card/main"
import "./style.scss"
import TripResume from "../resume"
import TitleOfComponent from "../../../communs/titleOfComponent"
import { IFinancesGoal } from "../../../../types/finances/IGoals"

const TravelFinanceMain = () => {
    const UseGetTripGoals = useGetTripGoals()

    return (
        <div className="trip-main">
            <TitleOfSession title="Trip" />
            <TitleOfComponent title="Goals" />
            <div className="trip-goals">
                {UseGetTripGoals.length == 1 ? (
                    "No goals added yet."
                ) : UseGetTripGoals.length > 0 ? (
                    <>
                        {UseGetTripGoals.map((item: IFinancesGoal) =>
                            item.title === "Others" && item.valueItens === 0 ? (
                                ""
                            ) : (
                                <TripGoalsCard
                                    key={item.id}
                                    goal={item}
                                />
                            )
                        )}
                    </>
                ) : (
                    <></>
                )}
            </div>
            <TripResume />
        </div>
    )
}

export default TravelFinanceMain
