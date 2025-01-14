import { Dispatch, SetStateAction } from "react";
import "./style.scss";

interface type {
    setMenuSelect: Dispatch<SetStateAction<string>>;
    menuSelect: String;
}

const LoginMenu = ({ setMenuSelect, menuSelect }: type) => {
    return (
        <div className="login-menu">
            <h2
                onClick={() => {
                    setMenuSelect("login");
                }}
                className={menuSelect === "login" ? "selection" : ""}>
                Entrar
            </h2>
            <h2
                onClick={() => {
                    setMenuSelect("register");
                }}
                className={menuSelect === "register" ? "selection" : ""}>
                Cadastrar
            </h2>
        </div>
    );
};

export default LoginMenu;
