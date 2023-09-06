import useSetPageTitle from '../../store/hooks/pageTitle/useSetPageTitle';
import MainFinances from '../../components/finances/main';

const PageFinances = () => {

    const setPageTitle = useSetPageTitle();

    setPageTitle('Finances');

    return (
        <MainFinances />
    )
}

export default PageFinances