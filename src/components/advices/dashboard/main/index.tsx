import { useContext, useEffect, useState } from "react";
import { IAdvicesMain } from "../../../../types/IAdvices";
import { useGetAdvices } from "../../../../requests/useCityRequest";
import { UseTripContext } from "../../../../context/useTripContext";
import AdviceCategorieCard from "../card";
import BoxFullpage from "../../../communs/boxFullpage";
import AdviceOpened from "../../opened";
import Skeleton from "react-loading-skeleton";
import TitleSession from "../../../communs/titleSession";
import "./style.scss";

const AdvicesDashboard = () => {
	const [advices, setAdvices] = useState<IAdvicesMain[]>([]);
	const [opened, setOpened] = useState(false);
	const [selectAdvice, setSelectAdvice] = useState<IAdvicesMain>();

	const trip = useContext(UseTripContext);
	const UseGetAdvices = useGetAdvices();

	useEffect(() => {
		if (trip?.state) {
			UseGetAdvices(trip.state.tripLat, trip.state.tripLon, "10000").then(
				(data) => {
					if (data) {
						setAdvices(data);
					}
				}
			);
		}
	}, [trip]);

	return (
		<div>
			<TitleSession link="/advices" title={`Advices`} />
			<div>
				{advices.length > 0 ? (
					<div className="advice-categorie-cards-dashboard ">
						<div className="advice-categorie-scroll-dashboard">
							{advices.map((advice, index) => (
								<AdviceCategorieCard
									key={index}
									advice={advice}
									selectAdvice={setSelectAdvice}
									setOpened={setOpened}
								/>
							))}
						</div>
					</div>
				) : (
					<div className="advice-categorie-cards-dashboard">
						<div className="advice-categorie-scroll-dashboard">
							<Skeleton style={{ width: "200px", height: "300px" }} />
							<Skeleton style={{ width: "200px", height: "300px" }} />
							<Skeleton style={{ width: "200px", height: "300px" }} />
							<Skeleton style={{ width: "200px", height: "300px" }} />
							<Skeleton style={{ width: "200px", height: "300px" }} />
							<Skeleton style={{ width: "200px", height: "300px" }} />
							<Skeleton style={{ width: "200px", height: "300px" }} />
						</div>
					</div>
				)}
				{selectAdvice && opened && (
					<BoxFullpage
						setOpened={setOpened}
						content={<AdviceOpened advice={selectAdvice} />}
					/>
				)}
			</div>
		</div>
	);
};

export default AdvicesDashboard;
