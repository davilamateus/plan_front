import Api from "../../../axios";
import { IToDoListAttchamentsAdd } from "../../../types/toDoList/IToDoList";
import useGetToDoListApi from "../useGetToDoList";



const useAddAttchament = () => {

    const UseGetToDoListApi = useGetToDoListApi();

    return async (todolistAttchament: IToDoListAttchamentsAdd) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const res = await Api.post('/todolist/attchament', todolistAttchament, config)
            .then(() => {
                UseGetToDoListApi()
            })
            .catch((error) => console.log(error));
        return res;
    }
}

export default useAddAttchament;