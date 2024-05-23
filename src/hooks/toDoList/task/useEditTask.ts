import Api from "../../../axios";
import { useGetToDoListApi } from "../useGetToDoList";

export const useEditToDoListTask = () => {

    const UseGetToDoList = useGetToDoListApi();
    return async (id: number, status: boolean) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        Api.patch('/todolist/tasks', { id, status }, config)
            .then(() => { UseGetToDoList() })
            .catch((error) => console.log(error))
    }
}

