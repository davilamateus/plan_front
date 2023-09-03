import Api from "../../axios";

const useForgetPasswordNewPassword = () => {
    return async (token: string, password: string) => {
        const res = await Api.patch(`/forgetpassword/${token}`, { password: password })
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useForgetPasswordNewPassword;