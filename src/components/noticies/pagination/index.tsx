import React from 'react'

interface type {
    pageCount: number;
    nextPage: string;
    onClickLastPage: () => void;
    onClickNextPage: () => void;
}

const NoticesPagination = ({ pageCount, nextPage, onClickLastPage, onClickNextPage }: type) => {
    return (
        <div>
            {pageCount !== 1 ?
                <button onClick={() => { onClickLastPage() }}>Last</button>
                : ''}
            {nextPage ?
                <button onClick={() => { onClickNextPage() }}>Next</button>
                : ''}
        </div>)
}

export default NoticesPagination