import { useContext, useEffect, useState } from "react";
import { IAdvicesMain } from "../../../types/IAdvices";
import { useGetAdvices } from "../../../requests/useCityRequest";
import { UseTripContext } from "../../../context/useTripContext";
import BoxFullpage from "../../communs/boxFullpage";
import AdviceOpened from "../opened";
import TitleOfSession from "../../communs/titleOfSession";
import Skeleton from "react-loading-skeleton";
import "./style.scss";

const AdvicesPrincipal = () => {
	const [advices, setAdvices] = useState<IAdvicesMain[]>([]);
	const [count, setCount] = useState(0);
	const [slideStoped, setSlideStoped] = useState(false);
	const [opened, setOpened] = useState(false);
	const [effect, setEffect] = useState(true);

	const trip = useContext(UseTripContext);
	const fetchAdvices = useGetAdvices();

	useEffect(() => {
		if (trip?.state.tripLat) {
			fetchAdvices(trip.state.tripLat, trip.state.tripLon, "10000").then(
				(data) => setAdvices(data)
			);
		}
	}, [trip]);

	// SlideChange

	useEffect(() => {
		const interval = setInterval(() => {
			if (slideStoped !== true) {
				if (count < advices.length - 1) {
					setCount(count + 1);
				} else setCount(0);
			}
		}, 5000);
		return () => clearInterval(interval);
	}, [count, slideStoped, advices]);

	useEffect(() => {
		setSlideStoped(opened ? true : false);
	}, [opened]);

	// SlideEffect Zoom
	useEffect(() => {
		setEffect(count % 2 !== 0);
	}, [count]);

	return (
		<div>
			<TitleOfSession title={"Discovery"} />
			{advices.length > 0 ? (
				<div
					onClick={() => setOpened(true)}
					className={`principal-advices-background  box ${
						effect ?? "principal-advices-background-zoom"
					}`}
					style={{
						backgroundImage: `url(${advices[count].images[0].prefix}original${advices[count].images[0].suffix})`,
					}}
				>
					<div className="principal-advices-bottons">
						<div className="principal-advices-others-photos">
							{advices[count].images.map(
								(item, index) =>
									advices[index]?.geocodes.main.latitude && (
										<div
											onClick={() => setCount(index)}
											className="principal-advices-others-photo"
											key={index}
											style={{
												backgroundImage: `url(${item.prefix}original${item.suffix})`,
											}}
										></div>
									)
							)}
						</div>
						<div
							className="principal-advices-text"
							onClick={() => setOpened(true)}
						>
							<div className="principal-advices-categorie">
								<div
									className="principal-advices-categorie-icon"
									style={{
										backgroundImage: `url(${
											advices[count]?.categories[0]?.icon.prefix +
											"64" +
											advices[count]?.categories[0]?.icon.suffix
										})`,
									}}
								></div>
								<span>{advices[count]?.categories[0]?.plural_name}</span>
							</div>
							<div className="principal-advices-title">
								{advices[count]?.name}
							</div>
							<div className="principal-advices-adress">
								{advices[count]?.location.formatted_address}
							</div>
						</div>
					</div>
				</div>
			) : (
				<Skeleton style={{ width: "100%", height: "600px" }} />
			)}

			{opened ?? (
				<BoxFullpage
					content={<AdviceOpened advice={advices[count]} />}
					setOpened={setOpened}
				/>
			)}
		</div>
	);
};

export default AdvicesPrincipal;
