import Api from "../../axios";
import useSetToDoList from "../../store/hooks/toDoList/useSetToDoList";




const useGetToDoListApi = () => {


    const UseSetToDoList = useSetToDoList();

    let token = localStorage.getItem('token') || sessionStorage.getItem('token');

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };

    return async () => {
        const res = await Api.get(`/todolist`, config)
            .then((data) => {
                UseSetToDoList(data.data);

            })
            .catch((error) => console.log(error))
        return res;
    }
}

export default useGetToDoListApi;