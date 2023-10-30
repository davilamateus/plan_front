import React, { useEffect, useState } from 'react'
import NoticiesCategories from '../categories'
import './style.scss';
import useGetAvatar from '../../../store/hooks/avatar/useGetAvatar';
import NoticiePrincipalCard from '../principalCard';
import NoticieList from '../list/main';
import Api from '../../../axios';


const NoticiesMain = () => {


  const [category, setCategory] = useState('');
  const [articles, setArticles] = useState<any>([]);
  const [nextPage, setNextPage] = useState('');
  const [loading, setLoading] = useState(false)


  const UseGetAvatar = useGetAvatar();






  function fetchNews(page: string) {
    setLoading(true);
    Api.get(`/noticies/articles?country=${UseGetAvatar.country_code}&image=1&${category !== '' ? 'category=' + category : ''}${page !== '' ? 'page=' + page : ''}`)
      .then((data: any) => {
        setArticles((articles: any) => [...articles].concat(data.data.results));
        setNextPage(data.data.nextPage);
        setLoading(false)

      })
      .catch(error => {
        setLoading(false)
        console.error('erro:', error);
      });
  }

  useEffect(() => {
    if (UseGetAvatar.country_code !== '') {
      fetchNews('');
    }
  }, [category, UseGetAvatar]);



  return (
    <div className='noticies-main'>
      <NoticiesCategories category={category} setCategory={setCategory} />
      <NoticiePrincipalCard article={articles[0]} />
      <NoticieList articles={articles.slice(0)} />
      {articles.length > 0 ?
        <button className='notices-view-more' onClick={() => fetchNews(nextPage)}>
          {loading ?
            <img src="./../../../../gifs/btnloadin.gif" alt="loading" />
            : 'View more'}

        </button>
        : ''}
    </div>
  )
}

export default NoticiesMain