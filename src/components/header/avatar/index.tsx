import { useGetUser } from '../../../store/hooks/user/useGetUser';
import { useGetTrip } from '../../../store/hooks/trip/useGetTrip';
import { BASE_URL } from '../../../axios';
import ButtonOptions from '../../communs/buttons/options';
import Skeleton from 'react-loading-skeleton';
import './style.scss';

const AvatarComponent = () => {
    const UseGetUser = useGetUser();
    const UseGetTrip = useGetTrip();

    return (
        < >
            {UseGetUser && UseGetTrip ?
                <div className='avatar-box'>
                    <div className="avatar-text">
                        <span className='avatar-name'>{UseGetUser.name}</span>
                        <span className='avatar-country'> {UseGetTrip.tripCity} - {UseGetTrip.tripCountry}</span>
                    </div>
                    <div className="avatar-photo-box">
                        <div style={{ backgroundImage: `url(${BASE_URL}imagens/user/${UseGetUser.photo !== null ? UseGetUser.photo : 'default.jpeg    '}` }}
                            className="avatar-photo">
                        </div>
                        <ButtonOptions />
                    </div>
                </div>
                :
                <div className='avatar-box'>
                    <div className="avatar-text">
                        <Skeleton style={{ width: '120px', height: '18px', margin: '10px -0px 00px 0px' }} />
                        <Skeleton style={{ width: '100px', height: '14px', }} />
                    </div>
                    <div className="avatar-photo-box">
                        <Skeleton style={{ borderRadius: '72px', width: '48px', height: '48px', margin: '10px -0px 00px 0px' }} />
                        <ButtonOptions />
                    </div>
                </div>}
        </>
    )
};

export default AvatarComponent;