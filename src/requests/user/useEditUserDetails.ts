import Api from "../../axios";
import { IUser } from "../../types/IUser";

const useEditUserDetails = () => {
    return async (user: IUser) => {
        return await Api.patch("userdetails/", user)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export default useEditUserDetails;
