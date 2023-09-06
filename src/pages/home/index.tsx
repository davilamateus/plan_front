import React, { useEffect } from 'react'
import IsLogged from '../../functions/isLogged'
import useSetPageTitle from '../../store/hooks/pageTitle/useSetPageTitle';

const HomePage = () => {
    IsLogged();

    const setPageTitle = useSetPageTitle();

    setPageTitle('Dashboard');



    return (
        <div>index</div>
    )
}

export default HomePage