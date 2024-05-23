import { useNavigate } from 'react-router';
import ButtonOptions from '../buttons/options';
import './style.scss';


interface type {
    title: string;
    link?: string;
}
const TitleOfComponentOnDashnboard = ({ title, link }: type) => {

    const UserNavigate = useNavigate();

    return (
        <div className='title-of-session-dashboard'>
            <h4>{title}</h4>
            {
                link &&
                <div onClick={() => UserNavigate(link)}>
                    <ButtonOptions />
                </div>
            }
        </div>
    )
}

export default TitleOfComponentOnDashnboard;