import Api from "../../../axios";
import { IFinancesEntraces } from "../../../types/finances/IEntraces";
import useGetEntracesApi from "./useGetEntraces";



const useEditEntraces = () => {

    const UseGetEntraces = useGetEntracesApi();

    return async (entrace: IFinancesEntraces) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const res = await Api.patch('/finances/entraces', entrace, config)
            .then(() => {
                UseGetEntraces(0, 10000000000000000000, true);

            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useEditEntraces;