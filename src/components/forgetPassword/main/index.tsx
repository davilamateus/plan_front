import { Link, useNavigate, useParams } from "react-router-dom";
import LogoBottom from "../../communs/logoBottom";
import './style.scss';
import ButtonSimple from "../../communs/buttons/simple/simple";
import { useEffect, useState } from "react";
import InputPassword from "../../communs/inputs/password";
import useForgetPasswordNewPassword from "../../../hooks/user/useForgetPasswordNewPassword";
import useSetMessage from "../../../hooks/messages/useSetMessage";


const ForgetPasswordComponent = () => {

    const [btnLoading, setBtnLoading] = useState<boolean>(false);
    const [btnStatus, setBtnStatus] = useState<boolean>(false);
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const params = useParams();
    const navigate = useNavigate();
    const UseForgetNewPassword = useForgetPasswordNewPassword();
    const setMessage = useSetMessage();


    // useStates Requirements 
    const [min, setMin] = useState(false);
    const [upper, setUpper] = useState(false);
    const [lower, setLower] = useState(false);
    const [number, setNumber] = useState(false);


    useEffect(() => {
        passwordCreateChange(password);
    }, [lower, min, number, password, upper]);



    function passwordCreateChange(value: string) {
        if (value.search(/[a-z]/) >= 0) { setLower(true) } else { setLower(false) };
        if (value.search(/[A-Z]/) >= 0) { setUpper(true) } else { setUpper(false) };
        if (value.search(/[0-9]/) >= 0) { setNumber(true) } else { setNumber(false) };
        if (value.length >= 8) { setMin(true) } else { setMin(false) };
    }

    useEffect(() => {
        if (upper && lower && min && number && password == confirmPassword) {
            setBtnStatus(true);
        } else {
            setBtnStatus(false);
        }
    }, [password, confirmPassword]);

    function newPassword() {
        setBtnLoading(true);
        if (params.token) {
            UseForgetNewPassword(params.token, password)
                .then((data: any) => {
                    if (data.status == 200) {
                        setMessage('Password changed successfully!', 'We changed your password and now we will redirect you to the login page', 'success');
                        setTimeout(() => {
                            navigate('/login');
                        }, 5000);
                    } else {
                        setMessage('An error occurred!', 'Unable to request a new password. Please try again later.', 'error');

                    }
                }).catch((error) => {
                    setMessage('An error occurred!', 'Unable to request a new password. Please try again later.', 'error');
                    console.log(error)
                })
        }
    }

    return (
        <div className='new-password-main'>
            <div className="new-password-content">
                <img className='person' src="./../../../../img/person2.png" />
                <div className="new-password-text box">
                    <h2>New Password</h2>
                    <p>Enter a new password.</p>
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
                        title='Save'
                        type='success'
                        status={btnStatus}
                        action={() => { newPassword() }}
                        loading={btnLoading}
                    />
                </div>
            </div>
            <footer>
                <Link to='/'>
                    <LogoBottom />
                </Link>
            </footer>

        </div>)
}

export default ForgetPasswordComponent;