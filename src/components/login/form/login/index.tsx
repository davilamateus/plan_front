import { ILogin } from "../../../../types/ILogin";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginApi } from "../../../../requests/login/useLogin";
import { IMessageActions } from "../../../../types/IMenssage";
import { isEmail } from "../../../../functions/isEmail";
import InputEmail from "../../../communs/inputs/email";
import InputPassword from "../../../communs/inputs/password";
import InputRadio from "../../../communs/inputs/radio";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import SocialLogin from "../social";
import BoxFullpage from "../../../communs/boxFullpage";
import Message from "../../../messages";
import ForgetPassword from "../forgetPassword";
import "./style.scss";

const LoginFormLogin = () => {
    const [modalForgetOpened, setModalForgetOpened] = useState<boolean>(false);
    const [message, setMessage] = useState<IMessageActions>({ type: false });
    const [form, setForm] = useState<ILogin>({ email: "", password: "", remember: false, loading: false });

    const UseLoginApi = useLoginApi();
    const UseNavigate = useNavigate();

    const handleSubmit = async () => {
        try {
            setForm((prev) => ({ ...prev, loading: true }));
            const data = await UseLoginApi(form);
            if (data.status === 200) {
                window.location.href = "/";
            } else if (data.status === 201) {
                UseNavigate("/createtripdetails");
            } else if (data.status === 203) {
                setMessage({ type: "login_error_unconfirm" });
            } else {
                setMessage({ type: "login_error_wrong" });
            }
        } catch (error) {
            setMessage({ type: "server_error" });
        } finally {
            setForm((prev) => ({ ...prev, loading: false }));
        }
    };

    return (
        <>
            <span>Enter with your login details.</span>
            <InputEmail
                title="Email:"
                placeholder="exemplo@email.com"
                setInput={(e) => setForm((prev) => ({ ...prev, email: e }))}
                input={form.email}
            />
            <InputPassword
                title="Password:"
                setInput={(e) => setForm((prev) => ({ ...prev, password: e }))}
                input={form.password}
            />
            <div className="remember">
                <InputRadio
                    select={form.remember}
                    setSelect={(e) => setForm((prev) => ({ ...prev, remember: e }))}
                />
                Remember-me
            </div>
            <ButtonSimple
                title="Enter"
                type="success"
                status={isEmail(form.email) && form.password !== ""}
                loading={form.loading}
                action={handleSubmit}
            />
            <div className="login-social">
                <p>Or enter with your account:</p>
                <SocialLogin />
            </div>
            <button
                onClick={() => {
                    setModalForgetOpened(true);
                }}
                className="forget-password-btn">
                Do you forget your password?
            </button>
            {modalForgetOpened && (
                <BoxFullpage
                    title="Forget Password"
                    setOpened={setModalForgetOpened}
                    content={<ForgetPassword />}
                />
            )}
            <Message message={message} />
        </>
    );
};

export default LoginFormLogin;
