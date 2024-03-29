import Api from "../../../axios";
import useSetEntraces from "../../../store/hooks/finances/useSetEntraces";




const useGetEntracesApi = () => {


    const UseSetEntrace = useSetEntraces();

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return async (fromDate: Number, toDate: number, save: boolean) => {
        const res = await Api.get(`/finances/entraces?fromDate=${fromDate}&toDate=${toDate}`, config)
            .then((data) => {
                if (save) {
                    UseSetEntrace(data.data);
                }
                else {
                    return data;

                }
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useGetEntracesApi;