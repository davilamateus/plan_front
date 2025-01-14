import LoginForm from "../../components/login/form/main";
import Slogan from "../../components/login/slogan";
import "./style.scss";

const PageLogin = () => {
	return (
		<div className="page-login">
			<Slogan />
			<LoginForm />
		</div>
	);
};

export default PageLogin;
