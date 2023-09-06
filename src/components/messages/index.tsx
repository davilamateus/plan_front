import { useEffect, useState } from 'react';
import './style.scss';
import GetMessage from '../../store/hooks/messages/useGetMessage';
import SetMessage from '../../store/hooks/messages/useSetMessage';


const Message = () => {
    const message = GetMessage();
    const [animation, setAnimation] = useState<boolean>(false);

    useEffect(() => {
        if (message.title === '') {
            setAnimation(false);
        } else {
            setTimeout(() => {
                setAnimation(true)
            }, 100);
        }
    }, [message]);

    useEffect(() => {
        if (animation) {
            setTimeout(() => {
                close('', '', '')
            }, 100000);
        }
    }, [animation])

    const close = SetMessage();

    return (
        <>
            {message.title !== '' ?
                <div className={`message-box ${animation ? 'message-box-animation' : ''} color-${message.status} `}>
                    <div className={` message-box-img `}>
                        <img src={`./../../../icons/message-${message.status}.svg`} alt={message.status} />
                    </div>
                    <div className="message-box-white">
                        <div className='text'>
                            <h3>{message.title}</h3>
                            <p>
                                {message.text}
                            </p>
                            <div className={`message-time-box color-${message.status} ${animation ? 'message-time-box-animation' : ''}`}>
                            </div>
                        </div>
                        <div onClick={
                            () => {
                                close('', '', '');
                            }
                        } className='close'>
                            <img src="./../../../icons/btn-close.svg" alt="Close" />
                        </div>

                    </div>
                </div>
                : ''}
        </>
    )
}

export default Message;