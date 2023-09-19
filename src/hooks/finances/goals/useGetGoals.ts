import Api from "../../../axios";
import useSetDomesticGoals from "../../../store/hooks/finances/useSetDomesticGoals";


const useGetGoalsApi = () => {
    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
    };

    const UseSetDomesticGoals = useSetDomesticGoals();


    return async (fromDate: Number, toDate: number, type: number, save: boolean) => {
        const res = await Api.get(`/finances/goals?fromDate=${fromDate}&toDate=${toDate}&type=${type}`, config)
            .then((data: any) => {
                if (save) {
                    if (type == 1) {
                        UseSetDomesticGoals(data.data);
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