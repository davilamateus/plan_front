import Api from "../../axios";
import { ILogin } from "../../types/ILogin";

export const useLoginApi = () => {
    return async (user: ILogin) => {
        return await Api.post("/login", user)
            .then((data) => {
                sessionStorage.clear();
                localStorage.clear();
                if (user.remember) {
                    localStorage.setItem("token", data.data.result);
                    sessionStorage.setItem("token", data.data.result);
                } else {
                    sessionStorage.setItem("token", data.data.result);
                }
                return data;
            })
            .catch((error) => {
                return error;
            });
    };
};
