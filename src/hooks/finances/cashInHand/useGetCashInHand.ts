import Api from "../../../axios";
import useSetCashInHand from "../../../store/hooks/finances/useSetCashInHand";




const useGetCashInHandApi = () => {


    const UseSetCashInHand = useSetCashInHand();

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return async () => {
        const res = await Api.get(`/finances/cashinhand`, config)
            .then((data) => {
                UseSetCashInHand(data.data);

            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useGetCashInHandApi;