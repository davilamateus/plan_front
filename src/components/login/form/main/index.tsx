import { useState } from "react";
import LoginMenu from "../menu";
import LoginFormLogin from "../login";
import RegisterFormLogin from "../register";
import "./style.scss";

const FormLoginComponent = () => {
    const [menuSelect, setMenuSelect] = useState<string>("login");
    return (
        <div className="login-form-main box">
            <div className="login-form-content">
                <LoginMenu
                    menuSelect={menuSelect}
                    setMenuSelect={setMenuSelect}
                />
                {menuSelect === "login" ? <LoginFormLogin /> : <RegisterFormLogin />}
            </div>
        </div>
    );
};

export default FormLoginComponent;
