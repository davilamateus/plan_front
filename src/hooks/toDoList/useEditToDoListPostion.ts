import Api from "../../axios";
import { ITodolistPosition } from "../../types/toDoList/IToDoList";
import useGetToDoListApi from "./useGetToDoList";


interface type {
    ItodolistList: ITodolistPosition[]
}


const useEditToDoListPostion = () => {

    const UseGetToDoList = useGetToDoListApi();



    return async (ItodolistList: ITodolistPosition[]) => {
        console.log(ItodolistList)
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        const body = {
            todolistList: ItodolistList
        }
        Api.patch('/todolist/position', body, config)
            .then((data) => {
                setTimeout(() => {
                    UseGetToDoList()
                }, 2000);

            })
            .catch((error) => console.log(error))
    }
}

export default useEditToDoListPostion;