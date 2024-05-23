import Api from "../../axios";
import { useSetUser } from "../../store/hooks/user/useSetUser";

export const useGetUserApi = () => {
    const UseSetUser = useSetUser();

    return async (token: string) => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const res = await Api.get('/user', config)
            .then((data) => {
                UseSetUser(data.data)
                return data;
            })
            .catch((error) => {
                return error
            })
        return res;
    }
};

