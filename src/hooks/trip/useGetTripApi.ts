import Api from "../../axios";
import { useSetTrip } from "../../store/hooks/trip/useSetTrip";

export const useGetTripApi = () => {
    const UseSetTrip = useSetTrip();
    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    return async () => {
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        const res = await Api.get('trip', config)
            .then((data) => {
                UseSetTrip(data.data);
                return data;
            })
            .catch((error) => error);
        return res;
    }
};







