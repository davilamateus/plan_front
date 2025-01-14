import { dateTimeAgo } from "../../../../functions/date/dateTimeAgo";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
import { IArticle } from "../../../../types/ICity";

interface type {
	article: IArticle | undefined;
	action: (number: number) => void;
}

const NoticieDashboardCard = ({ article, action }: type) => {
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
			<div
				style={{ backgroundImage: `url(${article.image_url})` }}
				className="principal-dashboard-article box"
			>
				<div className="principal-dashboard-article-content">
					<div className="articles-controller">
						<svg
							onClick={() => {
								action(-1);
							}}
							xmlns="http://www.w3.org/2000/svg"
							width="52.199"
							height="91.34"
							viewBox="0 0 52.199 91.34"
						>
							<path
								id="Path_2959"
								data-name="Path 2959"
								d="M45.67,15.631,11.233,50.259a6.55,6.55,0,0,1-9.306,0,6.656,6.656,0,0,1,0-9.368L40.687,1.917A6.514,6.514,0,0,1,45.67.009a6.514,6.514,0,0,1,4.984,1.908L89.413,40.891a6.655,6.655,0,0,1,0,9.368,6.549,6.549,0,0,1-9.305,0Z"
								transform="translate(0 91.34) rotate(-90)"
								fill="#fff"
							/>
						</svg>
						<svg
							onClick={() => {
								action(+1);
							}}
							xmlns="http://www.w3.org/2000/svg"
							width="52.199"
							height="91.34"
							viewBox="0 0 52.199 91.34"
						>
							<path
								id="Path_2959"
								data-name="Path 2959"
								d="M45.67,36.568,11.233,1.94a6.55,6.55,0,0,0-9.306,0,6.656,6.656,0,0,0,0,9.368L40.687,50.282a6.514,6.514,0,0,0,4.983,1.908,6.514,6.514,0,0,0,4.984-1.908L89.413,11.308a6.655,6.655,0,0,0,0-9.368,6.549,6.549,0,0,0-9.305,0Z"
								transform="translate(0 91.34) rotate(-90)"
								fill="#fff"
							/>
						</svg>
					</div>
					<a href={article.link} target="_blank" rel="noreferrer">
						<div className="principal-dashboard-article-info">
							<div className="princpal-article-dashboard-content-category">
								{article.category.map((item, index) => (
									<span key={index}>{categoriesPT[item]}</span>
								))}
							</div>
							<div className="principal-dashboard-article-content-data">
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

								<span>{dateTimeAgo(new Date(article.pubDate))}</span>
							</div>
						</div>
						<h2 className="principal-dashboard-article-content-title">
							{article.title}
						</h2>
					</a>
				</div>
			</div>
		</div>
	) : (
		<div>
			<div className="principal-dashboard-article-skeleton  principal-dashboard-article box">
				<div className="principal-dashboard-article-img">
					<Skeleton style={{ width: "100%", height: "100%" }} />
				</div>
				<div className="principal-dashboard-article-content">
					<Skeleton style={{ width: "80%", height: "16pt" }} />
					<Skeleton style={{ width: "90%", height: "16pt" }} />
					<Skeleton style={{ width: "69px", height: "11pt" }} />
					<Skeleton
						style={{ width: "100%", height: "9pt", marginBottom: "4px" }}
						count={3}
					/>
					<Skeleton style={{ width: "99px", height: "11pt" }} />
					<Skeleton style={{ width: "59px", height: "11pt" }} />
				</div>
			</div>
		</div>
	);
};

export default NoticieDashboardCard;
