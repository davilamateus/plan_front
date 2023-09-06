import React, { useState } from 'react'
import AvatarComponent from '../avatar';
import useGetPageTitle from '../../../store/hooks/pageTitle/useGetPageTitle';
import { Outlet } from 'react-router-dom';
import './style.scss';
import IsLogged from '../../../functions/isLogged';
import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

interface type {
    title: string;
}
const HeaderMain = () => {

    const getPageTitle = useGetPageTitle();
    IsLogged();

    return (
        <SkeletonTheme baseColor="var(--background)" highlightColor="var(--higher)">
            <div className='page-container'>
                <div className="header">
                    <h2>{getPageTitle}</h2>
                    <AvatarComponent />
                </div>
                <Outlet />
            </div>
        </SkeletonTheme>
    )
}

export default HeaderMain