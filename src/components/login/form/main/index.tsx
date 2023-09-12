import React, { useState } from 'react';
import LoginMenu from '../menu/menu';
import './style.scss';
import LoginFormLogin from '../login';
import RegisterFormLogin from '../register';

const FormLoginComponent = () => {

    const [menuSelect, setMenuSelect] = useState<string>('login');

    return (
        <div className='login-form-main box'>
            <div className="login-form-content">
                <LoginMenu menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
                {menuSelect === 'login' ? <LoginFormLogin /> : <RegisterFormLogin setMenuSelect={setMenuSelect} />}
            </div>
        </div>
    )
}

export default FormLoginComponent