import Api from "../../axios";

export const useGetUserApi = () => {
    return async () => {
        return await Api.get("user")
            .then((data) => {
                return data;
            })
            .catch((error) => {
                return error;
            });
    };
};
