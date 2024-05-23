import Api from "../../../axios";
import useGetEntracesApi from "./useGetEntraces";


const useDeleteEntraces = () => {

    const UseGetEntraces = useGetEntracesApi();


    return async (id: number) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const res = await Api.delete(`/finances/entraces?id=${id}`, config)
            .then(() => UseGetEntraces())
            .catch((error) => console.log(error))
        return res;
    }
}

export default useDeleteEntraces;