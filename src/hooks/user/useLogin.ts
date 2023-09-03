import Api from "../../axios";


function useLogin() {

    return async (email: string, password: string, remember: boolean) => {
        const body = { email: email, password: password }
        const res = await Api.post('/login', body)
            .then((data) => { return data; })
            .catch((error) => { return error });
        return res;
    }

}

export default useLogin;

