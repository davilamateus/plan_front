import { useState } from "react";
import { useRegisterApi } from "../../../../requests/login/useRegister";
import { isEmail } from "../../../../functions/isEmail";
import { isPassword } from "../../../../functions/isPassword";
import { IMessageActions } from "../../../../types/IMenssage";
import { IRegister } from "../../../../types/ILogin";
import InputEmail from "../../../communs/inputs/email";
import InputPassword from "../../../communs/inputs/password";
import InputSimple from "../../../communs/inputs/simples";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import PasswordRequirments from "../../../communs/PasswordRequirments";
import SocialLogin from "../social";
import Message from "../../../messages";

const RegisterFormLogin = () => {
	const [message, setMessage] = useState<IMessageActions>({ type: false });
	const [form, setForm] = useState<IRegister>({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
		loading: false,
	});

	const UseRegisterApi = useRegisterApi();

	const handleRegister = async () => {
		setForm((prev) => ({ ...prev, loading: true }));

		try {
			const data = await UseRegisterApi(form);
			if (data.status === 200) {
				setMessage({ type: "register_success" });
			} else if (data.status === 201) {
				setMessage({ type: "register_error_used" });
			} else {
				setMessage({ type: "server_error" });
			}
		} catch {
			setMessage({ type: "server_error" });
		} finally {
			setForm((prev) => ({ ...prev, loading: false }));
		}
	};

	return (
		<>
			<p>Fill in with your details.</p>
			<InputSimple
				title="Nome:"
				placeholder="Pedro da Silva"
				setInput={(e) => setForm((prev) => ({ ...prev, name: e }))}
				input={form.name}
			/>
			<InputEmail
				title="Email:"
				placeholder="exemplo@email.com"
				setInput={(e) => setForm((prev) => ({ ...prev, email: e }))}
				input={form.email}
			/>
			<InputPassword
				title="Senha:"
				setInput={(e) => setForm((prev) => ({ ...prev, password: e }))}
				input={form.password}
			/>
			<PasswordRequirments password={form.password} />
			<InputPassword
				title="Confirme a senha:"
				setInput={(e) => setForm((prev) => ({ ...prev, confirmPassword: e }))}
				input={form.confirmPassword}
			/>
			{form.confirmPassword !== "" &&
				form.password !== form.confirmPassword && (
					<div className="req-password">
						<div>
							<div></div>
							As senhas precisam ser iguais.
						</div>
					</div>
				)}

			<ButtonSimple
				title="Cadastrar"
				type="success"
				status={
					form.name !== "" &&
					isEmail(form.email) &&
					isPassword(form.password) &&
					form.password === form.confirmPassword
				}
				action={handleRegister}
				loading={form.loading}
			/>
			<div className="login-social">
				<p>Ou cadastra-se pela sua conta:</p>
				<SocialLogin />
			</div>
			<Message message={message} />
		</>
	);
};

export default RegisterFormLogin;
