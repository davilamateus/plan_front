import Api from "../../axios";
import { ILogin } from "../../types/login/ILogin";


export const useLogin = () => {
    return async (user: ILogin) => {
        const res = await Api.post('/login', user)
            .then((data) => {
                console.log(data)
                return data;

            })
            .catch((error) => { return error });
        return res;
    }
};


