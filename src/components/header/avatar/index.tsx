import useGetAvatar from '../../../store/hooks/avatar/useGetAvatar';
import './style.scss';
import { BASE_URL } from '../../../axios';
import ButtonOptions from '../../communs/buttons/options';
import Skeleton from 'react-loading-skeleton';

const AvatarComponent = () => {
    const UseGetAvatar = useGetAvatar();

    console.log(UseGetAvatar)

    return (
        <div >
            {UseGetAvatar.name ?
                <div className='avatar-box'>
                    <div className="avatar-text">
                        <span className='avatar-name'>{UseGetAvatar.name}</span>
                        <span className='avatar-country'> {UseGetAvatar.country_trip} - {UseGetAvatar.country_trip}</span>
                    </div>
                    <div className="avatar-photo-box">
                        <div
                            style={{
                                backgroundImage: `url(${BASE_URL}imagens/user/${UseGetAvatar.photo !== null ? UseGetAvatar.photo : 'default.jpeg    '}`
                            }}
                            className="avatar-photo"
                        >
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
        </div>
    )
}

export default AvatarComponent;