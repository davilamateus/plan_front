import Api from "../../../axios";
import { IFinancesEntrace } from "../../../types/finances/IEntraces";
import useGetEntracesApi from "./useGetEntraces";



const useEditEntraces = () => {

    const UseGetEntraces = useGetEntracesApi();

    return async (entrace: IFinancesEntrace) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const res = await Api.patch('/finances/entraces', entrace, config)
            .then(() =>UseGetEntraces() )
            .catch((error) => console.log(error))
        return res;
    }
}

export default useEditEntraces;