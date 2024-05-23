import { useEffect, useState } from 'react';
import { useGetNoticies } from '../../../hooks/city/useGetNoticies';
import { useGetTrip } from '../../../store/hooks/trip/useGetTrip';
import { IArticle } from '../../../types/noticies/IArticle';
import NoticiesCategories from '../categories'
import NoticiePrincipalCard from '../principalCard';
import NoticieList from '../list/main';
import './style.scss';
import { error } from 'console';


const NoticiesMain = () => {

  const [category, setCategory] = useState('');
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [nextPage, setNextPage] = useState();
  const [loading, setLoading] = useState(false)

  const UseGetTrip = useGetTrip();
  const UseGetNoticies = useGetNoticies();

  const handleGetNews = (page?: string) => {
    setLoading(true);
    UseGetNoticies(UseGetTrip.tripCountrySlug, category !== '' ? category : undefined, page !== '' ? page : undefined)
      .then((data) => {
        setArticles(oldArticles => [...oldArticles, ...data.data.results]);
        setArticles(oldArticles => {
          const uniqueArticles = oldArticles.filter((article, index, self) =>
            index === self.findIndex((a) => (
              a.title.toLowerCase().trim() === article.title.toLowerCase().trim()
            ))
          );
          return uniqueArticles;
        });
        setNextPage(data.data.nextPage);
      })
      .catch((error) => console.log(error))
    setLoading(false);

  };


  useEffect(() => {
    if (UseGetTrip.tripCountrySlug) {
      setArticles([])
      handleGetNews()
    }
  }, [category, UseGetTrip]);


  return (
    <div className='noticies-main'>
      <NoticiesCategories category={category} setCategory={setCategory} />
      <NoticiePrincipalCard article={articles[0]} />
      <NoticieList articles={articles.slice(0)} />
      {articles.length > 0 &&
        <button className='notices-view-more' onClick={() => handleGetNews(nextPage)}>
          {loading ?
            <img src="./../../../../gifs/btnloadin.gif" alt="loading" />
            : 'View more'}
        </button>
      }
    </div>
  )
}

export default NoticiesMain;