import Api from "../../../axios";
import useSetEntraces from "../../../store/hooks/finances/useSetEntraces";




const useGetEntracesApi = () => {


    const UseSetEntrace = useSetEntraces();

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return async () => {
        const res = await Api.get(`/finances/entraces`, config)
            .then((data) => UseSetEntrace(data.data))
            .catch((error) => console.log(error))
        return res;
    }
}

export default useGetEntracesApi;