import React, { Dispatch, SetStateAction } from 'react'

import './style.scss';

interface type {
    category: string;
    setCategory: Dispatch<SetStateAction<string>>;
}

const NoticiesCategories = ({ category, setCategory }: type) => {
    return (
        <div className='noticies-categories'>
            <li className={category == '' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('') }}>All Categories</li>
            <li className={category == 'business' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('business') }}>Business</li>
            <li className={category == 'entertainment' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('entertainment') }}>Entertainment</li>
            <li className={category == 'environment' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('environment') }}>Environment</li>
            <li className={category == 'science' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('science') }}>Science</li>
            <li className={category == 'health' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('health') }}>Health</li>
            <li className={category == 'sports' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('sports') }}>Sports</li>
            <li className={category == 'technology' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('technology') }}>Technology</li>
            <li className={category == 'food' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('food') }}>Food</li>
            <li className={category == 'politics' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('politics') }}>Politics</li>
            <li className={category == 'top' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('top') }}>Top</li>
            <li className={category == 'tourism' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('tourism') }}>Tourism</li>
            <li className={category == 'world' ? 'notices-categorie-active' : ''} onClick={() => { setCategory('world') }}>World</li>
        </div>
    )
}

export default NoticiesCategories