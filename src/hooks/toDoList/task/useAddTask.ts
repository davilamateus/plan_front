import Api from "../../../axios";
import { IToDoListTasksAdd } from "../../../types/toDoList/IToDoList";
import { useGetToDoListApi } from "../useGetToDoList";


export const useAddToDoListTask = () => {

    const UseGetToDoListApi = useGetToDoListApi();

    return async (todolistTask: IToDoListTasksAdd) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const res = await Api.post('/todolist/tasks', todolistTask, config)
            .then(() => { UseGetToDoListApi() })
            .catch((error) => console.log(error));
        return res;
    }
};

