import useSetPageTitle from '../../store/hooks/pageTitle/useSetPageTitle';
import MainFinances from '../../components/finances/main';
import ExchangeMain from '../../components/exchange/main';

const PageExchange = () => {

    const setPageTitle = useSetPageTitle();

    setPageTitle('Exchange');

    return (
        <ExchangeMain />
    )
}

export default PageExchange