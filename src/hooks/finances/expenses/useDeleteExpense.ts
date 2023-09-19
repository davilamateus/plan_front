import Api from "../../../axios";
import useGetGoalsApi from "../goals/useGetGoals";



const useDeleteExpense = () => {

    const UseGetGoalsApi = useGetGoalsApi();


    return async (id: number, type: number) => {
        const config = {
            headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` }
        };

        const res = await Api.delete(`/finances/expense?id=${id}`, config)
            .then(() => {
                UseGetGoalsApi(0, 100000000000000000, type, true);

            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useDeleteExpense;