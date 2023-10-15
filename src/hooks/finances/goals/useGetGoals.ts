import Api from "../../../axios";
import useSetDomesticGoals from "../../../store/hooks/finances/useSetDomesticGoals";
import useSetTripGoals from "../../../store/hooks/finances/useSetTripGoals";


const useGetGoalsApi = () => {
    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const UseSetDomesticGoals = useSetDomesticGoals();
    const UseSetTripGoals = useSetTripGoals();


    return async (fromDate: Number, toDate: number, type: number, save: boolean) => {
        const res = await Api.get(`/finances/goals?fromDate=${fromDate}&toDate=${toDate}&type=${type}`, config)
            .then((data: any) => {
                console.log('Data', data)
                if (save) {
                    if (type == 1) {
                        UseSetDomesticGoals(data.data);
                    } else if (type == 2) {
                        UseSetTripGoals(data.data);

                    }
                } else {
                    return data

                }
            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useGetGoalsApi;