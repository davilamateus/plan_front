import { Link, useNavigate, useParams } from "react-router-dom";
import LogoBottom from "../../communs/logoBottom";
import './style.scss';
import ButtonSimple from "../../communs/buttons/simple/simple";
import { useEffect, useState } from "react";
import useConfirmEmail from "../../../hooks/user/useConfirmEmail";


const ConfirmEmailComponent = () => {

    const [btnLoading, setBtnLoading] = useState<boolean>(true);
    const [btnStatus, setBtnStatus] = useState<boolean>(false);
    const [title, setTitle] = useState('Verifying your token.');
    const [text, setText] = useState('We are validating your token, please wait a few seconds.');

    const params = useParams();
    const UseConfirmEmailHook = useConfirmEmail();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.token) {
            console.log(params.token);
            UseConfirmEmailHook(params.token).then((data) => {
                setBtnLoading(false);
                setBtnStatus(true);
                if (data.status === 200) {
                    setTitle('All very well!');
                    setText('We validated your email and now you can enjoy the best travel planning tool on the market.');
                }
                else if (data.status === 203) {
                    setTitle('Token already used.');
                    setText('You have already used this token before. Try logging in again.');

                } else {
                    setTitle('Oops! A problem happened.');
                    setText('Unable to validate your email, please try later.');
                }
            })


        }
    }, [params]);

    return (
        <div className='confirm-email-main'>
            <div className="confirm-email-content">
                <img className='person' src="./../../../../img/person2.png" />
                <div className="confirm-email-text box">
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <ButtonSimple
                        title='Go to login page'
                        type='success'
                        status={btnStatus}
                        action={() => { navigate('/login') }}
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

export default ConfirmEmailComponent;