import Api from "../../axios";

const useGetUserDetails = () => {
    return async (token: string) => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const res = await Api.get('/userdetails', config)
            .then((data) => {
                console.log(data)
                return data
            })
            .catch((error) => {
                return error.response
            })
        return res;
    }
}

export default useGetUserDetails;