import { IArticle } from "../../../types/noticies/IArticle";
import { dateTimeAgo } from "../../../functions/date/dateTimeAgo";
import Skeleton from "react-loading-skeleton";
import TitleOfSession from "../../communs/titleOfSession";
import "./style.scss";

interface type {
    article: IArticle;
}

const NoticiePrincipalCard = ({ article }: type) => {
    return article ? (
        <div>
            <TitleOfSession title="Last News" />
            <a
                className="principal-article box"
                href={article.link}
                target="_blank"
                rel="noreferrer">
                <div
                    className="principal-article-img"
                    style={{ backgroundImage: `url(${article.image_url})` }}></div>
                <div className="principal-article-content">
                    <h2 className="principal-article-content-title">{article.title}</h2>
                    <div className="princpal-article-content-category">
                        {article.category.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </div>

                    <div className="principal-article-content-creator">
                        {article?.creator
                            ? article.creator.map((item, index) => (
                                  <div key={index}>
                                      <span>{item}</span> <br />
                                  </div>
                              ))
                            : ""}
                    </div>
                    <div className="principal-article-content-data">{dateTimeAgo(new Date(article.pubDate))}</div>
                </div>
            </a>
        </div>
    ) : (
        <div>
            <TitleOfSession title="Last News" />
            <a className="principal-article box">
                <div className="principal-article-img">
                    <Skeleton style={{ width: "100%", height: "100%" }} />
                </div>
                <div className="principal-article-content">
                    <Skeleton style={{ width: "80%", height: "22pt" }} />
                    <Skeleton style={{ width: "90%", height: "22pt" }} />
                    <Skeleton style={{ width: "69px", height: "11pt" }} />
                    <Skeleton
                        style={{ width: "100%", height: "14pt", marginBottom: "8px" }}
                        count={7}
                    />
                    <Skeleton style={{ width: "99px", height: "11pt" }} />
                    <Skeleton style={{ width: "59px", height: "11pt" }} />
                </div>
            </a>
        </div>
    );
};

export default NoticiePrincipalCard;
