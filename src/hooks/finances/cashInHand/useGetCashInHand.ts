import Api from "../../../axios";
import useSetCashInHand from "../../../store/hooks/finances/useSetCashInHand";




const useGetCashInHandApi = () => {


    const UseSetCashInHand = useSetCashInHand();


    const config = {
        headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
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