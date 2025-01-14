import { useContext, useEffect, useState } from "react";
import { useGetNoticies } from "../../../../requests/useCityRequest";
import { UseTripContext } from "../../../../context/useTripContext";
import { IArticle } from "../../../../types/ICity";
import NoticieDashboardCard from "../card";
import TitleSession from "../../../communs/titleSession";
import "./style.scss";

const DashboardNoticies = () => {
	const [articles, setArticles] = useState<IArticle[]>([]);
	const [count, setCount] = useState(0);

	const trip = useContext(UseTripContext);
	const UseGetNoticies = useGetNoticies();

	useEffect(() => {
		if (trip?.state) {
			UseGetNoticies(trip.state.tripCountrySlug).then((data) => {
				if (data) {
					setArticles(data.results);
				}
			});
		}
	}, [trip]);

	useEffect(() => {
		const interval = setInterval(() => {
			handleChangePage(1);
		}, 10000);
		return () => clearInterval(interval);
	}, [count, articles]);

	const handleChangePage = (pageChange: number) => {
		if (count + pageChange >= articles.length) {
			setCount(0);
		} else if (count + pageChange <= 0) {
			setCount(articles.length - 1);
		} else {
			setCount(count + pageChange);
		}
	};

	return (
		<>
			<TitleSession title="Notícias" link="/noticies" />
			<div className="noticies-dashboard-main">
				<NoticieDashboardCard
					article={articles[count]}
					action={handleChangePage}
				/>
			</div>
		</>
	);
};

export default DashboardNoticies;
