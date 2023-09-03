import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import InputEmail from '../../../communs/inputs/email';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import './style.scss';
import useForgetPasswordCreate from '../../../../hooks/user/useForgetPasswordCreate';
import isEmail from '../../../../functions/isEmail';



const ForgetPassword = () => {

    const [email, setEmail] = useState<string>('');
    const [btnStatus, setBtnStatus] = useState<boolean>(false);
    const [btnLoading, setBtnLoading] = useState<boolean>(false);

    const UseForgetPasswordCreate = useForgetPasswordCreate();

    useEffect(() => {
        if (isEmail(email)) {
            setBtnStatus(true);
        } else {
            setBtnStatus(false);
        }
    }, [email]);

    function passwordNew() {
        setBtnLoading(true);
        UseForgetPasswordCreate(email).then((data) => {
            console.log(data)
        })
    };

    return (
        <div className='modal-forget-password'>
            <h2>Forget Password</h2>
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