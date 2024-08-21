import { useContext, useEffect, useState } from "react";
import { useGetNoticies } from "../../../../requests/useCityRequest";
import { UseTripContext } from "../../../../context/useTripContext";
import NoticieDashboardCard from "../card";
import TitleOfComponentOnDashnboard from "../../../communs/titleOfComponentOnDashnboard";
import "./style.scss";
import { IArticle } from "../../../../types/ICity";

const NoticiesDashboard = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);
    const [page, setPage] = useState(0);

    const trip = useContext(UseTripContext);
    const UseGetNoticies = useGetNoticies();

    useEffect(() => {
        if (trip?.state) {
            UseGetNoticies(trip.state.tripCountrySlug).then((data) => {
                if (data) {
                    setArticles(data);
                }
            });
        }
    }, [trip]);

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
