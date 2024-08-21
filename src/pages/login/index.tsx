import FormLoginComponent from "../../components/login/form/main";
import SloganComponent from "../../components/login/slogan";
import "./style.scss";

const Login = () => {
    return (
        <div className="login-main-component">
            <SloganComponent />
            <FormLoginComponent />
        </div>
    );
};

export default Login;
