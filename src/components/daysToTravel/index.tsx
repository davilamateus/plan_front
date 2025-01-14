import { useState, useEffect, useContext } from "react";
import { UseTripContext } from "../../context/useTripContext";
import Skeleton from "react-loading-skeleton";
import "./style.scss";

const DashboardDaysToTravel = () => {
	const [DashboardDaysToTravel, setDashboardDaysToTravel] = useState(0);
	const now = new Date().getTime();
	const trip = useContext(UseTripContext);

	useEffect(() => {
		if (trip?.state && trip.state.when > 0) {
			const tripDate = new Date(trip.state.when).getTime();
			const difference = tripDate - now;
			const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
			setDashboardDaysToTravel(days);
		}
	}, [trip]);

	return (
		<div className="DashboardDaysToTravel-box box">
			{trip?.state.loaded ? (
				DashboardDaysToTravel >= 0 ? (
					<>
						<span>
							Você chegar em {` `}
							<span className="DashboardDaysToTravel-city">
								{trip?.state.tripCity}
							</span>
						</span>
						<h2>{DashboardDaysToTravel.toString()}</h2>
						<span>{DashboardDaysToTravel > 1 ? "dias." : "dia."}</span>
					</>
				) : (
					<>
						<div>
							Você chegou a{" "}
							<span className="DashboardDaysToTravel-city">
								{trip?.state.tripCity}
							</span>
						</div>
						<h2>{(DashboardDaysToTravel * -1).toString()}</h2>
						<span>{DashboardDaysToTravel > 1 * -1 ? "dias." : "dia."}</span>
					</>
				)
			) : (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyItems: "center",
						alignItems: "center",
						gap: "4px",
					}}
				>
					<Skeleton style={{ width: "98px", height: "10px" }} />
					<Skeleton style={{ width: "68px", height: "48px" }} />
					<Skeleton style={{ width: "48px", height: "10px" }} />
				</div>
			)}
		</div>
	);
};

export default DashboardDaysToTravel;
