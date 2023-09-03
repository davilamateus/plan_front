import SloganComponent from '../slogan';
import FormLoginComponent from '../form/main';
import './style.scss';

const LoginMainComponent = () => {
    return (
        <div className='login-main-component'>
            <SloganComponent />
            <FormLoginComponent />
        </div>
    )
}

export default LoginMainComponent