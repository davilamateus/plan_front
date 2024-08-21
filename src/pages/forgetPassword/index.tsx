import { Link, useNavigate, useParams } from "react-router-dom";
import InputPassword from "../../components/communs/inputs/password";
import PasswordRequirments from "../../components/communs/PasswordRequirments";
import LogoBottom from "../../components/communs/logoBottom";
import { useState } from "react";
import ButtonSimple from "../../components/communs/buttons/simple/simple";
import { isPassword } from "../../functions/isPassword";
import { useForgetPasswordNewPassword } from "../../requests/user/useForgetPasswordNewPassword";
import { IMessageActions } from "../../types/IMenssage";
import "./style.scss";
import Message from "../../components/messages";

const ForgetPassword = () => {
    const [password, setPassword] = useState({ password: "", confirmPassword: "" });
    const [btnLoading, setBtnLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<IMessageActions>({ type: false });

    const UseParams = useParams();
    const UserNavigate = useNavigate();
    const UseForgetNewPassword = useForgetPasswordNewPassword();
    const handleSubmit = () => {
        setBtnLoading(true);
        if (UseParams.token) {
            UseForgetNewPassword(UseParams.token, password.password)
                .then((data: any) => {
                    if (data.status == 200) {
                        setMessage({
                            type: "new_password_200"
                        });
                        setTimeout(() => {
                            UserNavigate("/login");
                        }, 5000);
                    } else if (data.status === 201) {
                        setMessage({
                            type: "new_password_201"
                        });
                    } else {
                        setMessage({
                            type: "server_error"
                        });
                    }
                })
                .catch(() => {
                    setMessage({
                        type: "server_error"
                    });
                });
        }
    };
    return (
        <>
            <div className="new-password-main">
                <div className="new-password-content">
                    <img
                        className="person"
                        src="./../../../../img/person2.png"
                    />
                    <div className="new-password-text box">
                        <h3>New Password</h3>
                        <p>Enter a new password.</p>
                        <InputPassword
                            title="Password:"
                            setInput={(e) => setPassword({ ...password, password: e })}
                            input={password.password}
                        />
                        <PasswordRequirments password={password.password} />

                        <InputPassword
                            title="Confirm Password:"
                            setInput={(e) => setPassword({ ...password, confirmPassword: e })}
                            input={password.confirmPassword}
                        />
                        {password.confirmPassword == "" || password.password == password.confirmPassword ? (
                            ""
                        ) : (
                            <div className="req-password">
                                <div>
                                    <div></div>
                                    Passwords must be the same.
                                </div>
                            </div>
                        )}
                        <ButtonSimple
                            title="Save"
                            type="success"
                            status={isPassword(password.password) && password.password === password.confirmPassword}
                            action={handleSubmit}
                            loading={btnLoading}
                        />
                    </div>
                </div>
                <footer>
                    <Link to="/">
                        <LogoBottom />
                    </Link>
                </footer>
            </div>
            <Message message={message} />
        </>
    );
};

export default ForgetPassword;
