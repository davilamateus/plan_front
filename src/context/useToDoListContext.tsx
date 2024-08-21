import { createContext, ReactNode, useReducer, useEffect, useState } from "react";
import { IToDoListAdd, IToDoListAttchamentsAdd, IToDoListCommentsAdd, IToDoListContext, IToDoListMain, IToDoListTasksAdd } from "../types/IToDoList";
import { useToDoListInitialValue, useToDoListReducer } from "../reducers/useToDoListReduce";
import { useAddAttchament, useAddComments, useAddTask, useAddToDoList, useDeleteAttchament, useDeleteComments, useDeleteTask, useDeleteToDoList, useEditPositionToDoList, useEditTask, useEditToDoList, useGetToDoList } from "../requests/useToDoListRequest";

export const UseToDoListContext = createContext<IToDoListContext | null>(null);

type prop = {
    children: ReactNode;
};
export const UseToDoListContextProvider = ({ children }: prop) => {
    const [state, dispatch] = useReducer(useToDoListReducer, useToDoListInitialValue);
    const [loaded, setLoaded] = useState(false);

    const UseGetToDoList = useGetToDoList();
    const UseAddToDoList = useAddToDoList();
    const UseEditToDoList = useEditToDoList();
    const UseEditPositionToDoList = useEditPositionToDoList();
    const UseDeleteToDoList = useDeleteToDoList();
    const UseAddAttchament = useAddAttchament();
    const UseDeleteAttchament = useDeleteAttchament();
    const UseAddComments = useAddComments();
    const UseDeleteComments = useDeleteComments();
    const UseAddTask = useAddTask();
    const UseEditTask = useEditTask();
    const UseDeleteTask = useDeleteTask();

    useEffect(() => {
        if (!loaded) {
            try {
                UseGetToDoList().then((data) => {
                    dispatch({ type: "set", payload: data });
                    setLoaded(true);
                });
            } catch (error) {
                console.error("Error getting to do list:", error);
            }
        }
    }, [loaded]);

    const addToDoList = (toDoList: IToDoListAdd) => {
        try {
            UseAddToDoList(toDoList).then((data) => {
                dispatch({ type: "add", payload: data });
            });
        } catch (error) {
            console.error("Error adding todo item:", error);
        }
    };

    const editToDoList = (toDoItem: IToDoListMain) => {
        try {
            UseEditToDoList(toDoItem);
            dispatch({ type: "edit", payload: toDoItem });
        } catch (error) {
            console.error("Error editing todo item:", error);
        }
    };
    const editPosition = async (toDoList: IToDoListMain[]) => {
        try {
            UseEditPositionToDoList(toDoList);
            dispatch({ type: "editPosition", payload: toDoList });
        } catch (error) {
            console.error("Error editing todo item:", error);
        }
    };

    const deleteToDoList = (toDoId: number) => {
        try {
            UseDeleteToDoList(toDoId);
            dispatch({ type: "delete", payload: toDoId });
        } catch (error) {
            console.error("Error deleting todo item:", error);
        }
    };

    const addAttchament = (toDoId: number, attchament: IToDoListAttchamentsAdd) => {
        try {
            UseAddAttchament(attchament).then((data) => {
                dispatch({ type: "addAttchament", payload: { toDoId, attchament: data } });
            });
        } catch (error) {
            console.error("Error adding todo attchament:", error);
        }
    };
    const deleteAttchament = (toDoId: number, attchamentId: number) => {
        try {
            UseDeleteAttchament(attchamentId);
            dispatch({ type: "deleteAttchament", payload: { toDoId, attchamentId } });
        } catch (error) {
            console.error("Error deleting todo attchament:", error);
        }
    };

    const addComment = (toDoId: number, comment: IToDoListCommentsAdd) => {
        try {
            UseAddComments(comment).then((data) => {
                dispatch({ type: "addComment", payload: { toDoId, comment: data } });
            });
        } catch (error) {
            console.error("Error adding todo comment:", error);
        }
    };
    const deleteComment = (toDoId: number, commentId: number) => {
        try {
            UseDeleteComments(commentId);
            dispatch({ type: "deleteComment", payload: { toDoId, commentId } });
        } catch (error) {
            console.error("Error deleting todo comment:", error);
        }
    };

    const addTask = (toDoId: number, task: IToDoListTasksAdd) => {
        try {
            UseAddTask(task).then((data) => {
                dispatch({ type: "addTask", payload: { toDoId, task: data } });
            });
        } catch (error) {
            console.error("Error adding todo task:", error);
        }
    };
    const editTask = async (toDoId: number, taskId: number, status: boolean) => {
        try {
            UseEditTask(taskId, status);
            dispatch({ type: "editTask", payload: { toDoId, taskId, status } });
        } catch (error) {
            console.error("Error editing todo task:", error);
        }
    };
    const deleteTask = (toDoId: number, taskId: number) => {
        try {
            UseDeleteTask(taskId);
            dispatch({ type: "deleteTask", payload: { toDoId, taskId } });
        } catch (error) {
            console.error("Error deleting todo task:", error);
        }
    };

    return (
        <UseToDoListContext.Provider
            value={{
                state,
                addToDoList,
                deleteToDoList,
                editToDoList,
                editPosition,
                addAttchament,
                deleteAttchament,
                addComment,
                deleteComment,
                addTask,
                editTask,
                deleteTask,
                loaded
            }}>
            {children}
        </UseToDoListContext.Provider>
    );
};
