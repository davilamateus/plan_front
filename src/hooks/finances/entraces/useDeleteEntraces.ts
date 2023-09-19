import Api from "../../../axios";
import useGetEntracesApi from "./useGetEntraces";


const useDeleteEntraces = () => {

    const UseGetEntraces = useGetEntracesApi();


    return async (id: number) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };

        const res = await Api.delete(`/finances/entraces?id=${id}`, config)
            .then(() => {
                UseGetEntraces(0, 100000000000000000, true);
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useDeleteEntraces;