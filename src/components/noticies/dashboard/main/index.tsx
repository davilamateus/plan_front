import { useEffect, useState } from "react";
import { useGetTrip } from "../../../../store/hooks/trip/useGetTrip";
import { useGetNoticies } from "../../../../hooks/city/useGetNoticies";
import NoticieDashboardCard from "../card";
import { IArticle } from "../../../../types/noticies/IArticle";
import "./style.scss";
import TitleOfComponentOnDashnboard from "../../../communs/titleOfComponentOnDashnboard";

const NoticiesDashboard = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [page, setPage] = useState(0);

    const UseGetTrip = useGetTrip();
    const UseGetNoticies = useGetNoticies();

    useEffect(() => {
        if (UseGetTrip.tripCountrySlug) {
            UseGetNoticies(UseGetTrip.tripCountrySlug)
                .then((data) => setArticles(data.data.results))
                .catch((error) => console.log(error));
        }
    }, [UseGetTrip]);

    const handleChangePage = (pageChange: number) => {
        setPage(page + pageChange);
    };

    return (
        <>
            <TitleOfComponentOnDashnboard
                title="Noticies"
                link="/noticies"
            />

            <div className="noticies-dashboard-main">
                <NoticieDashboardCard article={articles[page]} />
                <div className="noticies-dashboard-btn">
                    {page !== 0 ? (
                        <button
                            onClick={() => {
                                handleChangePage(-1);
                            }}>
                            back
                        </button>
                    ) : (
                        ""
                    )}
                    {page !== articles.length - 1 ? (
                        <button
                            onClick={() => {
                                handleChangePage(1);
                            }}>
                            next
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
};

export default NoticiesDashboard;
