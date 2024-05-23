import { useEffect, useState } from "react";
import { IToDoListMain } from "../../../types/toDoList/IToDoList";
import { useGetToDoList } from "../../../store/hooks/toDoList/useGetToDoList";
import ToDoListCard from "../card";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
import TitleOfComponentOnDashnboard from "../../communs/titleOfComponentOnDashnboard";

const ToDoListDashboard = () => {
    const [toDoList, setToDoList] = useState<IToDoListMain[]>([]);
    const UseGetToDoList = useGetToDoList();

    useEffect(() => {
        if (UseGetToDoList.length > 0) {
            const filteredToDoList = UseGetToDoList.filter((todolist: IToDoListMain) => {
                return todolist.status !== 3;
            });
            setToDoList(filteredToDoList);
        }
    }, [UseGetToDoList]);

    return (
        <div>
            <TitleOfComponentOnDashnboard
                title="To do list"
                link="/todolist"
            />
            <div className=" toDoList-dashboard">
                <div className=" list-todolist">
                    {toDoList.length > 0 ? (
                        toDoList.map((item) => (
                            <ToDoListCard
                                toDoList={item}
                                key={item.id}
                            />
                        ))
                    ) : (
                        <div className=" list-todolist">
                            <Skeleton style={{ width: "100%", height: "90px", marginBottom: "8px" }} />
                            <Skeleton style={{ width: "100%", height: "90px", marginBottom: "8px" }} />
                            <Skeleton style={{ width: "100%", height: "90px", marginBottom: "8px" }} />
                            <Skeleton style={{ width: "100%", height: "90px", marginBottom: "8px" }} />
                            <Skeleton style={{ width: "100%", height: "90px", marginBottom: "8px" }} />
                            <Skeleton style={{ width: "100%", height: "90px", marginBottom: "8px" }} />
                            <Skeleton style={{ width: "100%", height: "90px", marginBottom: "8px" }} />
                            <Skeleton style={{ width: "100%", height: "90px", marginBottom: "8px" }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ToDoListDashboard;
