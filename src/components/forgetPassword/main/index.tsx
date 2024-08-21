import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { isPassword } from "../../../functions/isPassword";
import { IMessage, IMessageActions } from "../../../types/IMenssage";
import { useForgetPasswordNewPassword } from "../../../requests/user/useForgetPasswordNewPassword";
import LogoBottom from "../../communs/logoBottom";
import ButtonSimple from "../../communs/buttons/simple/simple";
import InputPassword from "../../communs/inputs/password";
import PasswordRequirments from "../../communs/PasswordRequirments";
import Message from "../../messages";
import "./style.scss";

const ForgetPasswordComponent = () => {
    const [password, setPassword] = useState({ password: "", confirmPassword: "" });
    const [btnLoading, setBtnLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<IMessageActions>({ type: false });

    const UseParams = useParams();
    const UserNavigate = useNavigate();
    const UseForgetNewPassword = useForgetPasswordNewPassword();

    const handleSubmit = () => {
        setBtnLoading(true);
        if (UseParams.token) {
            UseForgetNewPassword(UseParams.token, password.password).then((data: any) => {
                /*
                    if (data.status == 200) {
                        setMessage({
                            title: "Password changed successfully!",
                            description: "We changed your password and now we will redirect you to the login paget.",
                            type: "success",
                            status: true
                        });
                        setTimeout(() => {
                            UserNavigate("/login");
                        }, 5000);
                    } else {
                        setMessage({
                            title: "An error occurred!",
                            description: "Unable to request a new password. Please try again later.",
                            type: "error",
                            status: true
                        });
                    }
                })
                .catch(() => {
                    setMessage({
                        title: "An error occurred!",
                        description: "Unable to request a new password. Please try again later.",
                        type: "error",
                        status: true
                    });
                    */
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
        </>
    );
};

//<Message message={message} setMessage={setMessage}/>
export default ForgetPasswordComponent;
