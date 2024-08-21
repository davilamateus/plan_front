import Api from "../../axios";

export const useForgetPasswordCreate = () => {
    return async (email: string) => {
        const res = await Api.post(`/forgetpassword`, { email: email })
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error));
        return res;
    };
};
