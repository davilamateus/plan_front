import { useContext } from "react";
import { UseToDoListContext } from "../../../context/useToDoListContext";
import ToDoListCard from "../card";
import TitleOfComponentOnDashnboard from "../../communs/titleOfComponentOnDashnboard";
import Skeleton from "react-loading-skeleton";
import "./style.scss";

const ToDoListDashboard = () => {
    const toDoList = useContext(UseToDoListContext);

    return (
        <div>
            <TitleOfComponentOnDashnboard
                title="To do list"
                link="/todolist"
            />
            <div className=" toDoList-dashboard">
                <div className=" list-todolist">
                    {toDoList !== null ? (
                        toDoList?.state?.map((item) => (
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
