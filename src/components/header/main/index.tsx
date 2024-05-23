import { Outlet } from 'react-router-dom';
import { useGetPageTitle } from '../../../store/hooks/pageTitle/useGetPageTitle';
import { SkeletonTheme } from 'react-loading-skeleton'
import { IsLogged } from '../../../functions/isLogged';
import AvatarComponent from '../avatar';
import './style.scss';
import 'react-loading-skeleton/dist/skeleton.css'


const HeaderMain = () => {

    const UseGetPageTitle = useGetPageTitle();
    IsLogged();

    return (
        <SkeletonTheme baseColor="var(--background)" highlightColor="var(--higher)">
            <div className='page-container'>
                <div className="header">
                    <h3>{UseGetPageTitle}</h3>
                    <AvatarComponent />
                </div>
                <Outlet />
            </div>
        </SkeletonTheme>
    )
};

export default HeaderMain;