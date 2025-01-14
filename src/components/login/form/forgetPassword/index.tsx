import { Dispatch, SetStateAction, useState } from "react";
import {
	useNewPasswordCreateCode,
	useNewPasswordCheckedCode,
	useNewPassword,
} from "../../../../requests/user/useNewPasswordRequest";
import { isEmail } from "../../../../functions/isEmail";
import { IMessageActions } from "../../../../types/IMenssage";
import InputEmail from "../../../communs/inputs/email";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import Message from "../../../messages";
import InputPassword from "../../../communs/inputs/password";
import PasswordRequirments from "../../../communs/PasswordRequirments";
import InputCode from "../../../communs/inputs/code";
import "./style.scss";

interface type {
	setOpened: Dispatch<SetStateAction<boolean>>;
}
const ForgetPassword = ({ setOpened }: type) => {
	const [email, setEmail] = useState<string>("");
	const [code, setCode] = useState<string>("");
	const [step, setStep] = useState(`email`);
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState<IMessageActions>({ type: false });
	const [btnLoading, setBtnLoading] = useState<boolean>(false);

	const UseNewPassword = useNewPassword();
	const UseForgetPasswordCreate = useNewPasswordCreateCode();
	const UseNewPasswordCheckedCode = useNewPasswordCheckedCode();

	const handleSubmitEmail = () => {
		setBtnLoading(true);
		UseForgetPasswordCreate(email)
			.then((data: any) => {
				setEmail("");
				setBtnLoading(false);
				if (data.status === 200) {
					setStep(`code`);
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
	const handleSubmitCode = () => {
		setBtnLoading(true);
		UseNewPasswordCheckedCode(code)
			.then((data: any) => {
				setBtnLoading(false);
				if (data.status === 200) {
					setStep(`newPassword`);
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
	const handleSubmitPassword = () => {
		setBtnLoading(true);
		UseNewPassword(code, confirmPassword)
			.then((data: any) => {
				setCode("");
				setPassword(``);
				setConfirmPassword(``);
				setBtnLoading(false);
				if (data.status === 200) {
					setMessage({ type: `new_password_200` });
					setOpened(false);
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
			{step === "email" && (
				<div className="modal-forget-password">
					<p>
						Digite o seu email e siga as instruções enviadas para o seu email.
					</p>
					<InputEmail
						title="Email:"
						input={email}
						setInput={setEmail}
						placeholder="exemplo@email.com"
					/>
					<ButtonSimple
						title="Avançar"
						type="success"
						status={isEmail(email)}
						action={handleSubmitEmail}
						loading={btnLoading}
					/>
				</div>
			)}
			{step === "code" && (
				<div className="modal-forget-password">
					<p>Digite o código que você recebeu por email.</p>
					<InputCode
						title="Código:"
						input={code}
						setInput={setCode}
						placeholder=""
					/>
					<ButtonSimple
						title="Avançar"
						type="success"
						status={code !== ""}
						action={handleSubmitCode}
						loading={btnLoading}
					/>
				</div>
			)}
			{step === "newPassword" && (
				<div className="modal-forget-password">
					<p>Cadastre uma nova senha</p>
					<InputPassword
						title="Password:"
						setInput={(e) => setPassword(e)}
						input={password}
					/>
					<PasswordRequirments password={password} />
					<InputPassword
						title="Confirm Password:"
						setInput={(e) => setConfirmPassword(e)}
						input={confirmPassword}
					/>
					{confirmPassword !== "" && password !== confirmPassword && (
						<div className="req-password">
							<div>
								<div></div>
								Passwords must be the same.
							</div>
						</div>
					)}
					<ButtonSimple
						title="Salvar"
						type="success"
						status={confirmPassword !== ""}
						action={handleSubmitPassword}
						loading={btnLoading}
					/>
				</div>
			)}
			<Message message={message} />
		</>
	);
};

export default ForgetPassword;
