import Api from "../../axios";
import { IToDoListAdd } from "../../types/toDoList/IToDoList";
import { useGetToDoListApi } from "./useGetToDoList";



const useAddToDoList = () => {

    const UseGetToDoListApi = useGetToDoListApi();

    return async (todolist: IToDoListAdd) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const res = await Api.post('/todolist', todolist, config)
            .then(() => {
                UseGetToDoListApi()
            })
            .catch((error) => console.log(error));
        return res;
    }
}

export default useAddToDoList;