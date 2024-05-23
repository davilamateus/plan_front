import React from 'react'
import useSetPageTitle from '../../store/hooks/pageTitle/useSetPageTitle';
import MyAccountMain from '../../components/myaccount/main';

const PageMyAccoount = () => {


    const setPageTitle = useSetPageTitle();

    setPageTitle('My Account');

    return (
        <MyAccountMain />
    )
}

export default PageMyAccoount