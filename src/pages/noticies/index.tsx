import { useContext, useEffect, useState } from "react";
import { UseTitleContext } from "../../context/useTitleContext";
import { UseTripContext } from "../../context/useTripContext";
import { useGetNoticies } from "../../requests/useCityRequest";
import { IArticle } from "../../types/ICity";
import NoticiesCategories from "../../components/noticies/categories";
import NoticieList from "../../components/noticies/list/main";
import NoticiePrincipalCard from "../../components/noticies/principalCard";
import "./style.scss";

const NoticesPage = () => {
	const title = useContext(UseTitleContext);
	useEffect(() => {
		title.setTitle("Noticias");
	}, []);
	const [category, setCategory] = useState("");
	const [articles, setArticles] = useState<IArticle[]>([]);
	const [nextPage, setNextPage] = useState();
	const [loading, setLoading] = useState(false);
	const [empty, setEmpty] = useState(false);

	const trip = useContext(UseTripContext);
	const fetchNoticies = useGetNoticies();

	const handleGetNews = (page?: string) => {
		setEmpty(false);
		if (trip?.state) {
			setLoading(true);
			fetchNoticies(
				trip.state.tripCountrySlug,
				category !== "" ? category : undefined,
				page !== "" ? page : undefined
			)
				.then((data) => {
					if (data.results.length > 0) {
						setArticles((oldArticles) => [...oldArticles, ...data.results]);
						setArticles((oldArticles) => {
							return oldArticles.filter(
								(article, index, self) =>
									index ===
									self.findIndex(
										(a) =>
											a.title.toLowerCase().trim() ===
											article.title.toLowerCase().trim()
									)
							);
						});
						setNextPage(data.nextPage);
					} else {
						setEmpty(true);
					}
				})
				.catch((error) => console.log(error));
			setLoading(false);
		}
	};

	useEffect(() => {
		if (trip?.state.loaded) {
			setArticles([]);
			handleGetNews();
		}
	}, [category, trip]);

	console.log(nextPage);
	return (
		<div className="noticies-main">
			<NoticiesCategories category={category} setCategory={setCategory} />
			{empty ? (
				<p>Nenhum artigo encontrado nessa categoria. Tente outra categoria.</p>
			) : (
				<>
					<NoticiePrincipalCard article={articles[0]} />
					<NoticieList articles={articles.slice(0)} />
				</>
			)}
			{nextPage && (
				<button
					className="notices-view-more"
					onClick={() => handleGetNews(nextPage)}
				>
					{loading ? (
						<img src="./../../../../gifs/btnloadin.gif" alt="loading" />
					) : (
						"Ver Mais"
					)}
				</button>
			)}
		</div>
	);
};

export default NoticesPage;
