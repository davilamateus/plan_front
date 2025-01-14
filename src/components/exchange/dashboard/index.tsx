import { useContext, useEffect, useState } from "react";
import { UseTripContext } from "../../../context/useTripContext";
import Api from "../../../axios";
import TitleSession from "../../communs/titleSession";
import Skeleton from "react-loading-skeleton";
import "./stype.scss";
import {
	Chart as ChartJS,
	LineElement,
	PointElement,
	LinearScale,
	CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

const DashboardExchange = () => {
	const [dataValue, setDataValue] = useState<number[]>([]);
	const [loaded, setLoaded] = useState(false);
	const UseTrip = useContext(UseTripContext);

	useEffect(() => {
		const fetchExchange = async () => {
			if (UseTrip?.state.currentCurrency && UseTrip.state.tripCurrency !== "") {
				try {
					const { data } = await Api.get(
						`cities/exchange?tripCurrency=${UseTrip.state.tripCurrency}&currentCurrency=${UseTrip.state.currentCurrency}`
					);
					setDataValue(data);
					setLoaded(true);
				} catch (error) {
					console.log(error);
				}
			}
		};
		fetchExchange();
	}, [UseTrip]);

	const data = {
		labels: ["-6d", "-5d", "-4d", "-3d", "-2d", "-1d", "Hóje"],
		datasets: [
			{
				data: dataValue.length > 0 ? dataValue : [1, 1, 1, 1, 1, 1, 1],
				fill: false,
				borderColor:
					dataValue.length > 0
						? dataValue[5] < dataValue[6]
							? " #FA385F"
							: "#6AD9A8"
						: "#dfdfdf",
				pointRadius: 1.3,
				borderWidth: 3,
				tension: 0.4,
			},
		],
	};

	const options = {
		plugins: {
			labels: {
				display: false,
			},
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				display: false,
			},
			x: {
				display: false,
			},
		},
		responsive: true,
	};

	return (
		<div className="exchange-dashboard">
			<TitleSession title="Cotação" link="/exchange" />
			<div className="box">
				<div style={{ width: "100%", height: "108px" }}>
					<Line
						style={{ position: "absolute", marginTop: "2%" }}
						height={60}
						data={data}
						options={options}
					/>
				</div>
				<div className="exchange-dashboard-texts">
					{loaded ? (
						<div>
							{UseTrip?.state.tripCurrency}{" "}
							<h4
								className="exchange-value"
								style={{
									color:
										dataValue.length > 0
											? dataValue[5] < dataValue[6]
												? " #FA385F"
												: "#6AD9A8"
											: "#dfdfdf",
								}}
							>
								{dataValue[0]}
							</h4>
						</div>
					) : (
						<Skeleton style={{ width: "124px", height: "18pt" }} />
					)}
				</div>
			</div>
		</div>
	);
};

export default DashboardExchange;
