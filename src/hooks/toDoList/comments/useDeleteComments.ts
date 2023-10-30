import Api from "../../../axios";
import useGetToDoListApi from "../useGetToDoList";

const useDeleteComments = () => {

    const UseGetToDoList = useGetToDoListApi();
    return async (id: number) => {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };


        Api.delete(`/todolist/comment?id=${id}`, config)
            .then(() => {
                UseGetToDoList()

            })
            .catch((error) => console.log(error))
    }
}

export default useDeleteComments;