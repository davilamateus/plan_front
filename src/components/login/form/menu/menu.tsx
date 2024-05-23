import { Dispatch, SetStateAction } from 'react';
import './style.scss';


interface type {
    setMenuSelect: Dispatch<SetStateAction<string>>;
    menuSelect: String;
}

const LoginMenu = ({ setMenuSelect, menuSelect }: type) => {

    return (
        <div className="login-menu">
            <button
                onClick={() => { setMenuSelect('login') }}
                className={menuSelect === 'login' ? 'selection' : ''}>
                Login
            </button>
            <button
                onClick={() => { setMenuSelect('register') }}
                className={menuSelect === 'register' ? 'selection' : ''}>
                Register
            </button>
        </div>)
}

export default LoginMenu;