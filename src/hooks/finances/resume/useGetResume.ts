import Api from "../../../axios";
import useSetFinanceResume from "../../../store/hooks/finances/useSetFinanceResume";




export const useGetFinanceResumeApi = () => {

    const UseSetFinanceResume = useSetFinanceResume();

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return async () => {
        const res = await Api.get(`/finances/resume`, config)
            .then((data) => {
                UseSetFinanceResume(data.data);

            })
            .catch((error) => console.log(error))
        return res;
    }
}

