import { Dispatch, SetStateAction, useState } from "react";
import { useCreateUser } from "../../../../hooks/user/useCreateUser";
import { isEmail } from "../../../../functions/isEmail";
import { IRegister } from "../../../../types/login/IRegister";
import { isPassword } from "../../../../functions/isPassword";
import { IMessage } from "../../../../types/messages/IMenssage";
import InputEmail from "../../../communs/inputs/email";
import InputPassword from "../../../communs/inputs/password";
import InputSimple from "../../../communs/inputs/simples";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import PasswordRequirments from "../../../communs/PasswordRequirments";
import SocialLogin from "../social";
import Message from "../../../messages";
import './style.scss';

interface type {
    setMenuSelect: Dispatch<SetStateAction<string>>;
}

const RegisterFormLogin = ({ setMenuSelect }: type) => {
    const [user, setUser] = useState<IRegister>({ name: '', email: '', password: '', confirmPassword: '' })
    const [btnLoading, setBtnLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<IMessage>({ status: false })

    const UseHookCreateUser = useCreateUser();

    const handleRegister = () => {
        setBtnLoading(true);
        UseHookCreateUser(user)
            .then((data) => {
                setBtnLoading(false);
                if (data.status === 200) {
                    setMessage({
                        title: 'User registered with success!',
                        description: 'All right here. Now please check your box email and your span for confirming your account.',
                        type: 'success',
                        status: true
                    });
                    // setMenuSelect('login');
                } else if (data.status === 201) {
                    setMessage({
                        title: 'Email already used!',
                        description: 'That email already used before. Please to choose other email and try again.',
                        type: 'atention',
                        status: true
                    });
                } else {
                    setMessage({
                        title: 'Error',
                        description: 'Please to try again.',
                        type: 'error',
                        status: true
                    });
                }
            })
            .catch(() => {
                setMessage({
                    title: 'Error',
                    description: 'Please to try again.',
                    type: 'error',
                    status: true
                });
            })
    };


    return (
        <>
            <span>Fill in with your details.</span>
            <InputSimple
                title='Full Name:'
                placeholder='Josh Drake'
                setInput={(e) => setUser({ ...user, name: e })}
                input={user.name}
            />
            <InputEmail
                title='Email:'
                placeholder='exemplo@email.com'
                setInput={(e) => setUser({ ...user, email: e })}
                input={user.email}
            />
            <InputPassword
                title='Password:'
                placeholder='********'
                setInput={(e) => setUser({ ...user, password: e })}
                input={user.password}
            />
            <PasswordRequirments password={user.password} />
            <InputPassword
                title='Confirm Password:'
                placeholder='********'
                setInput={(e) => setUser({ ...user, confirmPassword: e })}
                input={user.confirmPassword}
            />
            {user.confirmPassword == '' || user.password == user.confirmPassword ? '' :
                <div className="req-password">
                    <div >
                        <div></div>
                        Passwords must be the same.
                    </div>
                </div>
            }

            <ButtonSimple
                title='Register'
                type='success'
                status={user.name !== '' && isEmail(user.email) && isPassword(user.password) && (user.password === user.confirmPassword)}
                action={handleRegister}
                loading={btnLoading}
            />
            <div className="login-social">
                <p>Or register with your account:</p>
                <SocialLogin />
            </div>
            <Message
                message={message}
                setMessage={setMessage}
            />

        </>

    )
}

export default RegisterFormLogin;