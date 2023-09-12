import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputEmail from "../../../communs/inputs/email";
import InputPassword from "../../../communs/inputs/password";
import './style.scss';
import ButtonSimple from "../../../communs/buttons/simple/simple";
import SocialLogin from "../social";
import isEmail from "../../../../functions/isEmail";
import useSetMessage from "../../../../store/hooks/messages/useSetMessage";
import InputSimple from "../../../communs/inputs/simples";
import useCreateUser from "../../../../hooks/user/useCreateUser";

interface type {
    setMenuSelect: Dispatch<SetStateAction<string>>;
}

const RegisterFormLogin = ({ setMenuSelect }: type) => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [btnStatus, setBtnStatus] = useState<boolean>(false);
    const [btnLoading, setBtnLoading] = useState<boolean>(false);


    // useStates Requirements 
    const [min, setMin] = useState(false);
    const [upper, setUpper] = useState(false);
    const [lower, setLower] = useState(false);
    const [number, setNumber] = useState(false);


    useEffect(() => {
        passwordCreateChange(password)
    }, [lower, min, number, password, upper])



    function passwordCreateChange(value: string) {
        if (value.search(/[a-z]/) >= 0) { setLower(true) } else { setLower(false) };
        if (value.search(/[A-Z]/) >= 0) { setUpper(true) } else { setUpper(false) };
        if (value.search(/[0-9]/) >= 0) { setNumber(true) } else { setNumber(false) };
        if (value.length >= 8) { setMin(true) } else { setMin(false) };
    }

    useEffect(() => {
        if (name !== '' && isEmail(email) && upper && lower && min && number && password == confirmPassword) {
            setBtnStatus(true);
        } else {
            setBtnStatus(false);
        }
    }, [name, email, password, confirmPassword])



    const UseHookCreateUser = useCreateUser();
    const setMessage = useSetMessage();

    function register() {
        setBtnLoading(true);
        UseHookCreateUser(email, password, name).then((data: any) => {
            setBtnLoading(false);

            if (data.status === 203) {
                setMenuSelect('login')
                setMessage('Email already used!', 'That email already used before. Please to choose other email and try again.', 'atention');

            } else if (data.status === 200) {
                setMenuSelect('login')
                setMessage('User registered with success!', 'All right here. Now please check your box email and your span for confirming your account.', 'success');
            } else {
                setMessage('Error!', 'Please to try again.', 'error');
            };
        });
    };



    return (
        <>
            <span>Fill in with your details.</span>
            <InputSimple
                title='Full Name:'
                placeholder='Josh Drake'
                setInput={setName}
                input={name}
            />
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
            {password == '' || password !== '' && (number && min && upper && lower) ? '' :
                <div className="req-password">
                    <div className={upper ? 'success' : ''} >
                        <div></div>
                        Upper case
                    </div>
                    <div className={lower ? 'success' : ''} >
                        <div></div>
                        Lower case
                    </div>
                    <div className={number ? 'success' : ''} >
                        <div></div>
                        Number
                    </div>

                    <div className={min ? 'success' : ''} >
                        <div></div>
                        Min 8 Caracters
                    </div>
                </div>
            }
            <InputPassword
                title='Confirm Password:'
                placeholder='********'
                setInput={setConfirmPassword}
                input={confirmPassword}
            />
            {confirmPassword == '' || password == confirmPassword ? '' :
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
                status={btnStatus}
                action={() => { register() }}
                loading={btnLoading}
            />
            <div className="login-social">
                <p>Or register with your account:</p>
                <SocialLogin />
            </div>

        </>

    )
}

export default RegisterFormLogin;