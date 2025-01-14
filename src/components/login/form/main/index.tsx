import { useState } from "react";
import LoginMenu from "../menu";
import LoginFormLogin from "../login";
import LoginFormRegister from "../register";
import "./style.scss";

const LoginForm = () => {
	const [menuSelect, setMenuSelect] = useState<string>("login");
	return (
		<div className="login-form box">
			<div className="login-form-content">
				<LoginMenu menuSelect={menuSelect} setMenuSelect={setMenuSelect} />
				{menuSelect === "login" ? <LoginFormLogin /> : <LoginFormRegister />}
			</div>
		</div>
	);
};

export default LoginForm;
