import React from 'react'
import './style.scss'
import IArticle from '../../../../types/noticies/IArticle'
import Skeleton from 'react-loading-skeleton'

interface type {
    article: IArticle | boolean
}
const NoticieCard = ({ article }: type) => {

    return (
        article && article !== true ?
            <a className='box noticie-card' href={article.link} target="_blank">
                <div className="noticie-card-img" style={{ backgroundImage: `url(${article.image_url})` }}></div>
                <div className="notice-card-content">
                    <h4 className='notice-card-title'>{article.title}</h4>
                    <div className="notice-card-category">{article.category}</div>
                    <div>{article?.creator ? article.creator.map((item) => (
                        <>
                            <span>{item}</span> <br />
                        </>
                    )) : ''}</div>
                </div>
            </a> :
            <a className='box noticie-card' target="_blank">
                <Skeleton style={{ width: '100%', height: '160px', }} />
                <div className="notice-card-content">
                    <Skeleton style={{ width: '95%', height: '14pt', }} />
                    <Skeleton style={{ width: '100%', height: '14pt', }} />
                    <Skeleton style={{ width: '30%', height: '11pt', }} />
                    <Skeleton style={{ width: '36%', height: '11pt', }} />
                </div>



            </a>
    )
}

export default NoticieCard