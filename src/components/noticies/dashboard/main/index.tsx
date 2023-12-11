import React, { useEffect, useState } from 'react'
import './style.scss';
import useGetAvatar from '../../../../store/hooks/avatar/useGetAvatar';
import Api from '../../../../axios';
import NoticieDashboardPrincipal from '../principal';



const NoticiesDashboard = () => {

    const [articles, setArticles] = useState<any>([]);
    const [page, setPage] = useState(0);


    const UseGetAvatar = useGetAvatar();


    function fetchNews(page: string) {
        Api.get(`/noticies/articles?country=${UseGetAvatar.country_code}&image=1`)
            .then((data: any) => {
                setArticles((articles: any) => [...articles].concat(data.data.results));


            })
            .catch(error => {
            });
    }
    useEffect(() => {
        if (UseGetAvatar.country_code !== '') {
            fetchNews('');
        }
    }, [UseGetAvatar]);

    function changePage(pageChange: number) {
        setPage(page + (pageChange))
    }



    return (
        <div className='noticies-dashboard-main'>
            <NoticieDashboardPrincipal article={articles[page]} />
            <div className="noticies-dashboard-btn">
                {page !== 0 ?
                    <button onClick={() => { changePage(-1) }}>back</button>
                    : ''}
                {page !== articles.length ?
                    <button onClick={() => { changePage(1) }}>next</button>
                    : ''}
            </div>

        </div>
    )
}

export default NoticiesDashboard