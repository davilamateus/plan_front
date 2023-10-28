import React from 'react'
import useSetPageTitle from '../../store/hooks/pageTitle/useSetPageTitle';
import NoticiesMain from '../../components/noticies/main';

const NoticesPage = () => {

    const setPageTitle = useSetPageTitle();

    setPageTitle('Noticies');
    return (
        <NoticiesMain />
    )
}

export default NoticesPage