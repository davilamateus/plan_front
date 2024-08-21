import Api from "../../axios";

export const useRegisterApi = () => {
    return async (user: any) => {
        const res = await Api.post("user/", user)
            .then((data) => {
                return data;
            })
            .catch((error) => {
                return error;
            });
        return res;
    };
};
