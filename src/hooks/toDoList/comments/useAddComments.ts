import Api from "../../../axios";
import { IToDoListCommentsAdd } from "../../../types/toDoList/IToDoList";
import { useGetToDoListApi } from "../useGetToDoList";


export const useAddComments = () => {

    const UseGetToDoListApi = useGetToDoListApi();

    return async (todolistComment: IToDoListCommentsAdd) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = { headers: { Authorization: `Bearer ${token}` } };

        const res = await Api.post('/todolist/comments', todolistComment, config)
            .then(() => { UseGetToDoListApi() })
            .catch((error) => console.log(error));
        return res;
    }
}

