import Api from "../../../axios";
import useGetToDoListApi from "../useGetToDoList";

const useEditToDoListTask = () => {

    const UseGetToDoList = useGetToDoListApi();
    return async (id: number, status: boolean) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const body = {
            id,
            status
        }
        Api.patch('/todolist/task', body, config)
            .then(() => {
                UseGetToDoList()

            })
            .catch((error) => console.log(error))
    }
}

export default useEditToDoListTask;