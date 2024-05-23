import { useState } from "react";
import InputEmail from "../../../communs/inputs/email";
import InputPassword from "../../../communs/inputs/password";
import InputRadio from "../../../communs/inputs/radio";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import SocialLogin from "../social";
import { isEmail } from "../../../../functions/isEmail";
import { useLogin } from "../../../../hooks/user/useLogin";
import BoxFullpage from "../../../communs/boxFullpage";
import ForgetPassword from "../forgetPassword";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../../../../types/login/ILogin";
import { IMessage } from "../../../../types/messages/IMenssage";
import Message from "../../../messages";
import './style.scss';


const LoginFormLogin = () => {

    const [user, setUser] = useState<ILogin>({ email: '', password: '', remember: false })
    const [btnLoading, setBtnLoading] = useState<boolean>(false);
    const [modalForgetOpened, setModalForgetOpened] = useState<boolean>(false);
    const [message, setMessage] = useState<IMessage>({ status: false })

    const UseLogin = useLogin();
    const Navegation = useNavigate();

    const handleSubmit = () => {
        setBtnLoading(true);
        UseLogin(user)
            .then((data) => {
                sessionStorage.clear();
                localStorage.clear();
                if (data.status === 200 || data.status === 201) {
                    if (user.remember) {
                        localStorage.setItem('token', data.data.result);
                        sessionStorage.setItem('token', data.data.result);
                    } else {
                        sessionStorage.setItem('token', data.data.result);
                    }
                    if (data.status === 200) {
                        Navegation('/');
                    } else if (data.status === 201) {
                        Navegation('/createtripdetails');
                    }
                }
                else if (data.status === 203) {
                    setMessage({
                        title: 'Email not confirmed!',
                        description: 'You don’t confirmed your email, we emailagain, please check your box and span emails.',
                        type: 'atention',
                        status: true
                    })
                } else {
                    setMessage({
                        title: 'Email or password incorrect!',
                        description: 'You type your email or your password incorrectly.Please check your informations and try again.',
                        type: 'error',
                        status: true
                    })

                };
                setBtnLoading(false);
            })
    }


    return (
        <>
            <span>Enter with your login details.</span>
            <InputEmail
                title='Email:'
                placeholder='exemplo@email.com'
                setInput={(e: string) => setUser({ ...user, email: e })}
                input={user.email}
            />
            <InputPassword
                title='Password:'
                placeholder='********'
                setInput={(e: string) => setUser({ ...user, password: e })}
                input={user.password}
            />
            <div className="remember">
                <InputRadio
                    select={user.remember}
                    setSelect={(e: boolean) => setUser({ ...user, remember: e })}
                />
                Remember-me
            </div>
            <ButtonSimple
                title='Enter'
                type='success'
                status={isEmail(user.email) && user.password !== ''}
                action={handleSubmit}
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
            {modalForgetOpened &&
                <BoxFullpage
                    title='Forget Password'
                    setOpened={setModalForgetOpened}
                    content={<ForgetPassword />}
                />
            }
            <Message
                message={message}
                setMessage={setMessage}
            />
        </>

    )
}

export default LoginFormLogin;