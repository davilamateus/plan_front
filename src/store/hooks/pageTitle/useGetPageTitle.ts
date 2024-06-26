import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'


export const useGetPageTitle = () => {

    const getPageTitle = useSelector((state: any) => state.pageTitle);
    const [pageTitle, setPageTitle] = useState(getPageTitle.pageTitle);

    useEffect(() => {
        setPageTitle(getPageTitle.pageTitle);
    }, [getPageTitle]);

    return pageTitle;

};


