import { useEffect, useState } from "react";
import InputEmail from "../../../communs/inputs/email";
import InputPassword from "../../../communs/inputs/password";
import InputRadio from "../../../communs/inputs/radio";
import './style.scss';
import ButtonSimple from "../../../communs/buttons/simple/simple";
import SocialLogin from "../social";
import isEmail from "../../../../functions/isEmail";
import useLogin from "../../../../hooks/user/useLogin";
import BoxFullpage from "../../../communs/boxFullpage";
import ForgetPassword from "../forgetPassword";
import useSetMessage from "../../../../hooks/messages/useSetMessage";
import { useNavigate } from "react-router";

const LoginFormLogin = () => {


    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [remember, setRemember] = useState<boolean>(false);
    const [btnStatus, setBtnStatus] = useState<boolean>(false);
    const [btnLoading, setBtnLoading] = useState<boolean>(false);

    const [modalForgetOpened, setModalForgetOpened] = useState<boolean>(false);

    const UseLoginHook = useLogin();
    const setMessage = useSetMessage();
    const navegation = useNavigate();

    function login() {
        setBtnLoading(true)
        UseLoginHook(email, password, remember).then((data) => {
            if (data.status === 200) {
                if (remember) {
                    sessionStorage.clear();
                    localStorage.clear();
                    localStorage.setItem('token', data.data.token);
                    sessionStorage.setItem('token', data.data.token);
                    //set();
                    navegation('/');

                } else {
                    localStorage.clear();
                    sessionStorage.setItem('token', data.data.token);
                    //set();
                    navegation('/');
                }
                setMessage('', '', '');


            } else if (data.status === 201) {
                if (remember) {
                    sessionStorage.clear();
                    localStorage.clear();
                    localStorage.setItem('token', data.data.token);
                    sessionStorage.setItem('token', data.data.token);
                    //set();
                    navegation('/');

                } else {
                    localStorage.clear();
                    sessionStorage.setItem('token', data.data.token);
                    //set();
                    navegation('/');
                }
                console.log('aqui')
                navegation('/createuserdetails');
            }

            else if (data.status === 203) {
                setMessage('Email not confirmed!', 'You don’t confirmed your email, we emailagain, please check your box and span emails.', 'atention');
            } else {
                setMessage('Email or password incorrect!', 'You type your email or your password incorrectly.Please check your informations and try again.', 'error');
            };

            setBtnLoading(false);
        })
    }


    useEffect(() => {
        if (isEmail(email) && password !== '') {
            setBtnStatus(true);
        } else {
            setBtnStatus(false);
        }
    }, [email, password]);

    return (
        <>
            <span>Enter with your login details.</span>
            <InputEmail
                title='Email:'
                placeholder='exemplo@email.com'
                setInput={setEmail}
                input={email}
            />
            <InputPassword
                title='Password:'
                placeholder='********'
                setInput={setPassword}
                input={password}
            />
            <div className="remember">
                <InputRadio
                    select={remember}
                    setSelect={setRemember}
                />
                Remember-me
            </div>
            <ButtonSimple
                title='Enter'
                type='success'
                status={btnStatus}
                action={() => { login() }}
                loading={btnLoading}
            />
            <div className="login-social">
                <p>Or enter with your account:</p>
                <SocialLogin />
            </div>
            <button
                onClick={() => { setModalForgetOpened(true) }}
                className="forget-password-btn">
                Do you forget your password?
            </button>
            {modalForgetOpened ?
                <BoxFullpage
                    setOpened={setModalForgetOpened}
                    content={
                        <ForgetPassword />
                    }
                />
                : ''}
        </>

    )
}

export default LoginFormLogin;