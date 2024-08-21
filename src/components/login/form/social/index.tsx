import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router";
import useLoginSocial from "../../../../requests/login/useLoginSocial";

const SocialLogin = () => {
    const navegation = useNavigate();

    const UseLoginSocial = useLoginSocial();
    const handleGoogleLoginSuccess = (credentialResponse: any) => {
        const jwt: any = jwtDecode(credentialResponse?.credential);
        if (jwt) {
            UseLoginSocial(jwt.email, jwt.name, jwt.jti).then((data) => {
                if (data.status === 200) {
                    sessionStorage.clear();
                    localStorage.clear();
                    localStorage.setItem("token", data.data.token);
                    sessionStorage.setItem("token", data.data.token);
                    window.location.href = "/";
                } else if (data.status === 201) {
                    sessionStorage.clear();
                    localStorage.clear();
                    localStorage.setItem("token", data.data.token);
                    sessionStorage.setItem("token", data.data.token);

                    navegation("/createtripdetails");
                }
            });
        }
    };

    return (
        <div className="social-login-component">
            <GoogleOAuthProvider clientId="391344467336-dbg7nf62iqr7d1902tej9behpdjqtnnm.apps.googleusercontent.com">
                <GoogleLogin
                    onSuccess={handleGoogleLoginSuccess}
                    onError={() => {
                        console.log("Login Failed");
                    }}
                />
            </GoogleOAuthProvider>
        </div>
    );
};

export default SocialLogin;
