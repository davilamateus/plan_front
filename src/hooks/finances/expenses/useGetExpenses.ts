import Api from "../../../axios";
import useSetDomesticCosts from "../../../store/hooks/finances/useSetDomesticCosts";
import useSetEntraces from "../../../store/hooks/finances/useSetEntraces";



const useGetExpenseApi = () => {


    const UseSetEntrace = useSetEntraces();
    const UseSetDomesticCosts = useSetDomesticCosts();

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return async (fromDate: Number, toDate: number, type: number, save: boolean) => {
        const res = await Api.get(`/finances/expense?fromDate=${fromDate}&toDate=${toDate}&type=${type}`, config)
            .then((data) => {
                if (save) {
                    if (type == 0) {
                        UseSetEntrace(data.data);
                    } else if (type == 1) {
                        UseSetDomesticCosts(data.data);
                    }

                }
                else {
                    return data

                }
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useGetExpenseApi;