import React from 'react'
import IArticle from '../../../../types/noticies/IArticle'
import NoticieCard from '../card'
import TitleOfComponent from '../../../communs/titleOfComponent'
import './style.scss'

interface type {
    articles: IArticle[]
}

const NoticieList = ({ articles }: type) => {
    return (
        articles.length > 0 ?
            <div>
                <TitleOfComponent title='Others News' />
                <div className='noticies-list' >
                    {articles.slice(1).map((article: any, index: number) => (
                        <NoticieCard key={index} article={article} />
                    ))}
                </div>
            </div>
            :
            <>
                <TitleOfComponent title='Others News' />
                <div className='noticies-list' >
                    <NoticieCard article={false} />
                    <NoticieCard article={false} />
                    <NoticieCard article={false} />
                    <NoticieCard article={false} />
                    <NoticieCard article={false} />
                    <NoticieCard article={false} />
                    <NoticieCard article={false} />
                    <NoticieCard article={false} />
                    <NoticieCard article={false} />
                </div>
            </>
    )
}

export default NoticieList;