import Api from "../../axios";

const useCreateUser = () => {
    return async (email: string, password: string, name: string) => {
        const res = await Api.post('user/', { email: email, password: password, name: name })
            .then((data) => {
                return data;
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useCreateUser;