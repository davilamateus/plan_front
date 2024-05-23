import Api from "../../../axios";
import useSetEntraces from "../../../store/hooks/finances/useSetEntraces";
import { IFinancesEntracesAdd } from "../../../types/finances/IEntraces";
import useGetEntracesApi from "./useGetEntraces";



const useAddEntraces = () => {

    const UseGetEntracesApi = useGetEntracesApi();

    return async (entrace: IFinancesEntracesAdd) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const res = await Api.post('/finances/entraces', entrace, config)
            .then(() => {UseGetEntracesApi() })
            .catch((error) => console.log(error));
        return res;
    }
}

export default useAddEntraces;