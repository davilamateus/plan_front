import Api from "../../axios";
import { IToDoListMain } from "../../types/toDoList/IToDoList";
import { useGetToDoListApi } from "./useGetToDoList";


export const useEditToDoList = () => {

    const UseGetToDoList = useGetToDoListApi();

    return async (todolistList: IToDoListMain) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        return Api.patch('/todolist/', todolistList, config)
            .then(() => {               // UseGetToDoList()
            })
            .catch((error) => console.log(error))
    }
};

