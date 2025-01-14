import { dateTimeAgo } from "../../../functions/date/dateTimeAgo";
import Skeleton from "react-loading-skeleton";
import TitleOfSession from "../../communs/titleOfSession";
import "./style.scss";
import { IArticle } from "../../../types/ICity";

interface type {
	article: IArticle;
}

const NoticiePrincipalCard = ({ article }: type) => {
	const categoriesPT: Record<string, string> = {
		business: "negócios",
		crime: "crime",
		domestic: "doméstico",
		education: "educação",
		entertainment: "entretenimento",
		environment: "meio ambiente",
		food: "alimentação",
		health: "saúde",
		lifestyle: "estilo de vida",
		other: "outros",
		politics: "política",
		science: "ciência",
		sports: "esportes",
		technology: "tecnologia",
		top: "principais",
		tourism: "turismo",
		world: "mundo",
	};
	return article ? (
		<div>
			<a
				className="principal-article box"
				href={article.link}
				target="_blank"
				rel="noreferrer"
				style={{ backgroundImage: `url(${article.image_url})` }}
			>
				<div className="principal-article-content">
					<h2 className="principal-article-content-title">{article.title}</h2>
					<div className="princpal-article-content-info">
						<div className="princpal-article-content-category">
							{article.category.map((item, index) => (
								<span key={index}>{categoriesPT[item]}</span>
							))}
						</div>
						<div className="principal-article-content-data">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="14"
								viewBox="0 0 14 14"
							>
								<path
									id="time-quarter-to-svgrepo-com"
									d="M14,7A7,7,0,0,1,0,7,.583.583,0,1,1,1.167,7,5.833,5.833,0,1,0,7,1.167.583.583,0,0,1,7,0,7.008,7.008,0,0,1,14,7ZM5.995,6.417H4.667a.583.583,0,1,0,0,1.167H5.995A1.163,1.163,0,1,0,7.583,5.995V4.083a.583.583,0,1,0-1.167,0V5.995a1.167,1.167,0,0,0-.422.422ZM1.066,5.124a.583.583,0,1,0-.583-.583.583.583,0,0,0,.583.583Zm1.4-2.087a.583.583,0,1,0-.583-.583A.583.583,0,0,0,2.462,3.037Zm2.075-1.38a.583.583,0,1,0-.583-.583A.583.583,0,0,0,4.538,1.657Z"
									fill="#d0d0d0"
								/>
							</svg>
							{dateTimeAgo(new Date(article.pubDate))}
						</div>
					</div>
				</div>
			</a>
		</div>
	) : (
		<div>
			<a className="principal-article box"></a>
		</div>
	);
};

export default NoticiePrincipalCard;
