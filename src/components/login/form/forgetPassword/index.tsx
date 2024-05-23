import { useEffect, useState } from 'react';
import { useForgetPasswordCreate } from '../../../../hooks/user/useForgetPasswordCreate';
import { isEmail } from '../../../../functions/isEmail';
import { IMessage } from '../../../../types/messages/IMenssage';
import InputEmail from '../../../communs/inputs/email';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import Message from '../../../messages';
import './style.scss';



const ForgetPassword = () => {

    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<IMessage>({ status: false })
    const [btnLoading, setBtnLoading] = useState<boolean>(false);

    const UseForgetPasswordCreate = useForgetPasswordCreate();

    const handleSubmit = () => {
        setBtnLoading(true);
        UseForgetPasswordCreate(email)
            .then((data: any) => {
                setEmail('');
                setBtnLoading(false);
                if (data.status === 200) {
                    setMessage({
                        title: 'New email required!',
                        description: 'We emailed instructions for creating a new password, please check your box and span emails.',
                        type: 'success',
                        status: true
                    });
                } else {
                    setMessage({
                        title: 'An error occurred!',
                        description: 'Unable to request a new password. Please try again later.',
                        type: 'error',
                        status: true
                    });
                }
            })
            .catch(() => {
                setBtnLoading(false)
                setMessage({
                    title: 'An error occurred!',
                    description: 'Unable to request a new password. Please try again later.',
                    type: 'error',
                    status: true
                });
            })
    };

    return (
        <>
            <div className='modal-forget-password'>
                <p>Type or email and we are going to email with
                    the instructions for creating a new password.</p>
                <InputEmail
                    title='Email:'
                    input={email}
                    setInput={setEmail}
                    placeholder='exemplo@email.com'
                />
                <ButtonSimple
                    title='Request new password'
                    type='success'
                    status={isEmail(email)}
                    action={handleSubmit}
                    loading={btnLoading}
                />
            </div>
            < Message message={message} setMessage={setMessage} />
        </>
    )
}

export default ForgetPassword;