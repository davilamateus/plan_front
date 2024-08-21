import Api from "../../axios";

export const useForgetPasswordNewPassword = () => {
    return async (token: string, password: string) => {
        const res = await Api.patch(`/newpassword/${token}`, { password: password })
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error));
        return res;
    };
};
