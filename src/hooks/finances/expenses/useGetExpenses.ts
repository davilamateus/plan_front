import Api from "../../../axios";
import useSetDomesticCosts from "../../../store/hooks/finances/useSetDomesticCosts";
import useSetEntraces from "../../../store/hooks/finances/useSetEntraces";
import useSetTripCosts from "../../../store/hooks/finances/useSetTripCosts";



const useGetExpenseApi = () => {


    const UseSetEntrace = useSetEntraces();
    const UseSetDomesticCosts = useSetDomesticCosts();
    const UseSetTripsCosts = useSetTripCosts();

    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
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
                    else if (type == 2) {
                        UseSetTripsCosts(data.data);
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