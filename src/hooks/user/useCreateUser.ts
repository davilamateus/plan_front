import Api from "../../axios";
import { IRegister } from "../../types/login/IRegister";

export const useCreateUser = () => {
    return async (user: IRegister) => {
        const res = await Api.post('user/', user)
            .then((data) => { return data; })
            .catch((error) => { return error })
        return res;
    }
}

