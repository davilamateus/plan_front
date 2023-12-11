import { useNavigate } from 'react-router';
import './style.scss';
import ButtonOptions from '../buttons/options';

interface type {
    title: string;
    link?: string;
}
const TitleOfComponentOnDashnboard = ({ title, link }: type) => {

    const nav = useNavigate()

    function click(link: string) {
        nav(link);
    }


    return (
        <div className='title-of-session-dashboard'>
            <h4>{title}</h4>
            {
                link ?
                    <div onClick={() => click(link)}>
                        <ButtonOptions />
                    </div>
                    : ''
            }
        </div>
    )
}

export default TitleOfComponentOnDashnboard;