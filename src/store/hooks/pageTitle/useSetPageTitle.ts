
import { useDispatch } from 'react-redux';

function useSetPageTitle() {
    const dispatch = useDispatch();
    return (title: string) => {
        const pageTitle = title
        dispatch({
            type: '@pageTitle/SET_PAGE-TITLE', pageTitle
        });

    }
}

export default useSetPageTitle;