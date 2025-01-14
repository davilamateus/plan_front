import { IArticle } from "../../../../types/ICity";
import NoticieCard from "../card";
import "./style.scss";

interface type {
	articles: IArticle[];
}

const NoticieList = ({ articles }: type) => {
	return (
		<div>
			<div className="noticies-list">
				{articles.length > 0 ? (
					articles
						.slice(1)
						.map((article: any, index: number) => (
							<NoticieCard key={index} article={article} />
						))
				) : (
					<>
						<NoticieCard />
						<NoticieCard />
						<NoticieCard />
						<NoticieCard />
						<NoticieCard />
						<NoticieCard />
						<NoticieCard />
						<NoticieCard />
						<NoticieCard />
					</>
				)}
			</div>
		</div>
	);
};

export default NoticieList;
