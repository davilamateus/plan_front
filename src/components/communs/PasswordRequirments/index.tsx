import { useEffect, useState } from "react";
import "./style.scss";

const PasswordRequirments = ({ password }: { password: string }) => {
	const [requirements, setRequirements] = useState({
		min: false,
		upper: false,
		lower: false,
		number: false,
	});
	useEffect(() => {
		setRequirements((prevState) => ({
			...prevState,
			lower: password.search(/[a-z]/) >= 0,
			upper: password.search(/[A-Z]/) >= 0,
			number: password.search(/[0-9]/) >= 0,
			min: password.length >= 8,
		}));
	}, [password]);

	return password == "" ||
		(password !== "" &&
			requirements.number &&
			requirements.min &&
			requirements.upper &&
			requirements.lower) ? (
		<></>
	) : (
		<div className="req-password">
			<div className={requirements.upper ? "success" : ""}>
				<div></div>
				Maiúscula
			</div>
			<div className={requirements.lower ? "success" : ""}>
				<div></div>
				Minúscula
			</div>
			<div className={requirements.number ? "success" : ""}>
				<div></div>
				Número
			</div>

			<div className={requirements.min ? "success" : ""}>
				<div></div>
				Min 8 Caracter
			</div>
		</div>
	);
};

export default PasswordRequirments;
