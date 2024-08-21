import Api from "../../axios";

export const useGetTripApi = () => {
    return async () => {
        return await Api.get("/trip")
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error));
    };
};
