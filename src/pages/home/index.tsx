import React, { useEffect } from 'react'
import IsLogged from '../../functions/isLogged'
import useSetPageTitle from '../../store/hooks/pageTitle/useSetPageTitle';
import HomeMain from '../../components/home/main';

const HomePage = () => {
    IsLogged();

    const setPageTitle = useSetPageTitle();

    setPageTitle('Dashboard');



    return (
        <HomeMain />
    )
}

export default HomePage