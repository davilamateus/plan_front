import React from 'react'
import IArticle from '../../../types/noticies/IArticle'
import './style.scss';
import DateTimeAgo from '../../../functions/date/DateTimeAgo';
import TitleOfComponent from '../../communs/titleOfComponent';
import Skeleton from 'react-loading-skeleton';

interface type {
    article: IArticle;
}

const NoticiePrincipalCard = ({ article }: type) => {
    return (
        article ?
            <div>
                <TitleOfComponent title='Last News' />
                <a className="principal-article box" href={article.link} target="_blank" rel="noreferrer">
                    <div className="principal-article-img" style={{ backgroundImage: `url(${article.image_url})` }}></div>
                    <div className="principal-article-content">
                        <h2 className='principal-article-content-title'>{article.title}</h2>
                        <div className="princpal-article-content-category">
                            {article.category.map((item) => (
                                <span>{item}</span>
                            ))}</div>
                        <div className='princpal-article-content-description'>
                            {article.content !== null ? (article.content).split('').slice(0, 735)?.join('') + '...' : ''}
                        </div>

                        <div className="principal-article-content-creator">
                            {article?.creator ? article.creator.map((item) => (
                                <>
                                    <span>{item}</span> <br />
                                </>
                            )) : ''}</div>
                        <div className="principal-article-content-data">
                            {DateTimeAgo(new Date(article.pubDate))}
                        </div>
                    </div>

                </a>
            </div> :
            <div>
                <TitleOfComponent title='Last News' />
                <a className="principal-article box" >
                    <div className="principal-article-img" >
                        <Skeleton style={{ width: '100%', height: '100%', }} />
                    </div>
                    <div className="principal-article-content">
                        <Skeleton style={{ width: '80%', height: '22pt', }} />
                        <Skeleton style={{ width: '90%', height: '22pt', }} />
                        <Skeleton style={{ width: '69px', height: '11pt', }} />
                        <Skeleton style={{ width: '100%', height: '14pt', marginBottom: '8px' }} count={7} />

                        <Skeleton style={{ width: '99px', height: '11pt', }} />
                        <Skeleton style={{ width: '59px', height: '11pt', }} />

                    </div>
                </a >

            </div >
    )
}

export default NoticiePrincipalCard