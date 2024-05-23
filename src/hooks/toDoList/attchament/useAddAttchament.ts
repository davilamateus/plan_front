import Api from "../../../axios";
import { IToDoListAttchamentsAdd } from "../../../types/toDoList/IToDoList";
import { useGetToDoListApi } from "../useGetToDoList";



export const useAddAttchament = () => {

    const UseGetToDoListApi = useGetToDoListApi();

    return async (todolistAttchament: IToDoListAttchamentsAdd) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = { headers: { Authorization: `Bearer ${token}` } };

        const res = await Api.post('/todolist/attchaments', todolistAttchament, config)
            .then(() => { UseGetToDoListApi() })
            .catch((error) => console.log(error));
        return res;
    }
};

