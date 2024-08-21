import { dateTimeAgo } from "../../../../functions/date/dateTimeAgo";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
import { IArticle } from "../../../../types/ICity";

interface type {
    article: IArticle | undefined;
}

const NoticieDashboardCard = ({ article }: type) => {
    return article ? (
        <div>
            <a
                className="principal-dashboard-article box"
                href={article.link}
                target="_blank"
                rel="noreferrer">
                <div
                    className="principal-dashboard-article-img"
                    style={{ backgroundImage: `url(${article.image_url})` }}></div>
                <div className="principal-dashboard-article-content">
                    <h4 className="principal-dashboard-article-content-title">{article.title}</h4>
                    <div className="princpal-article-dashboard-content-category">
                        {article.category.map((item, index) => (
                            <span key={index}>{item}</span>
                        ))}
                    </div>

                    <div className="principal-dashboard-article-content-creator">
                        {article?.creator
                            ? article.creator.map((item, index) => (
                                  <div key={index}>
                                      <span>{item}</span> <br />
                                  </div>
                              ))
                            : ""}
                    </div>
                    <div className="principal-dashboard-article-content-data">{dateTimeAgo(new Date(article.pubDate))}</div>
                </div>
            </a>
        </div>
    ) : (
        <div>
            <a className="principal-dashboard-article box">
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
            </a>
        </div>
    );
};

export default NoticieDashboardCard;
