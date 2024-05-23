import React from 'react'
import useSetPageTitle from '../../store/hooks/pageTitle/useSetPageTitle';
import AdvicesMain from '../../components/advices/main';

const PageAdvices = () => {


    const setPageTitle = useSetPageTitle();

    setPageTitle('Advices');

    return (
        <AdvicesMain />
    )
}

export default PageAdvices