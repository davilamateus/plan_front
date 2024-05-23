import Api from "../../../axios";
import useSetDomesticGoals from "../../../store/hooks/finances/useSetDomesticGoals";
import useSetTripGoals from "../../../store/hooks/finances/useSetTripGoals";

export const useGetGoalsApi = () => {
    let token = localStorage.getItem("token") || sessionStorage.getItem("token");

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    const UseSetDomesticGoals = useSetDomesticGoals();
    const UseSetTripGoals = useSetTripGoals();

    return async (type: number) => {
        const res = await Api.get(`/finances/goals?type=${type}`, config)
            .then((data: any) => {
                if (type == 1) {
                    UseSetDomesticGoals(data.data);
                } else if (type == 2) {
                    UseSetTripGoals(data.data);
                }
            })
            .catch((error) => console.log(error));
        return res;
    };
};
