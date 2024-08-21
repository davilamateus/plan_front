import { useState } from "react";
import { useForgetPasswordCreate } from "../../../../requests/user/useForgetPasswordCreate";
import { isEmail } from "../../../../functions/isEmail";
import { IMessageActions } from "../../../../types/IMenssage";
import InputEmail from "../../../communs/inputs/email";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import Message from "../../../messages";
import "./style.scss";

const ForgetPassword = () => {
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<IMessageActions>({ type: false });
    const [btnLoading, setBtnLoading] = useState<boolean>(false);

    const UseForgetPasswordCreate = useForgetPasswordCreate();

    const handleSubmit = () => {
        setBtnLoading(true);
        UseForgetPasswordCreate(email)
            .then((data: any) => {
                setEmail("");
                setBtnLoading(false);
                if (data.status === 200) {
                    setMessage({ type: "new_password" });
                } else if (data.status === 404) {
                    setMessage({ type: "new_password_404" });
                } else {
                    setMessage({ type: "server_error" });
                }
            })
            .catch(() => {
                setBtnLoading(false);
                setMessage({ type: "server_error" });
            });
    };

    return (
        <>
            <div className="modal-forget-password">
                <p>Type or email and we are going to email with the instructions for creating a new password.</p>
                <InputEmail
                    title="Email:"
                    input={email}
                    setInput={setEmail}
                    placeholder="exemplo@email.com"
                />
                <ButtonSimple
                    title="Request new password"
                    type="success"
                    status={isEmail(email)}
                    action={handleSubmit}
                    loading={btnLoading}
                />
            </div>
            <Message message={message} />
        </>
    );
};

export default ForgetPassword;
