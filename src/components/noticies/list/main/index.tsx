import { IArticle } from "../../../../types/ICity";
import TitleOfSession from "../../../communs/titleOfSession";
import NoticieCard from "../card";
import "./style.scss";

interface type {
    articles: IArticle[];
}

const NoticieList = ({ articles }: type) => {
    return (
        <div>
            <TitleOfSession title="Others News" />
            <div className="noticies-list">
                {articles.length > 0 ? (
                    articles.slice(1).map((article: any, index: number) => (
                        <NoticieCard
                            key={index}
                            article={article}
                        />
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
