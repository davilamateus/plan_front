import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import InputEmail from '../../../communs/inputs/email';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import './style.scss';
import useForgetPasswordCreate from '../../../../hooks/user/useForgetPasswordCreate';
import isEmail from '../../../../functions/isEmail';
import useSetMessage from '../../../../store/hooks/messages/useSetMessage';



const ForgetPassword = () => {

    const [email, setEmail] = useState<string>('');
    const [btnStatus, setBtnStatus] = useState<boolean>(false);
    const [btnLoading, setBtnLoading] = useState<boolean>(false);

    const UseForgetPasswordCreate = useForgetPasswordCreate();
    const setMessage = useSetMessage();

    useEffect(() => {
        if (isEmail(email)) {
            setBtnStatus(true);
        } else {
            setBtnStatus(false);
        }
    }, [email]);

    function passwordNew() {
        setBtnLoading(true);
        UseForgetPasswordCreate(email)
            .then((data: any) => {
                setEmail('');
                setBtnLoading(false)
                if (data.status === 200) {
                    setMessage('New email required!', 'We emailed instructions for creating a new password, please check your box and span emails.', 'success');
                } else {
                    setMessage('An error occurred!', 'Unable to request a new password. Please try again later.', 'error');
                }
            }).catch((error) => {
                setBtnLoading(false)
                setMessage('An error occurred!', 'Unable to request a new password. Please try again later.', 'error');
                console.log(error);
            })
    };

    return (
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
                status={btnStatus}
                action={() => { passwordNew() }}
                loading={btnLoading}
            />
        </div>
    )
}

export default ForgetPassword