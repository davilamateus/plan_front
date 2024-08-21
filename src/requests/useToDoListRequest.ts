import Api from "../axios";
import {
    IToDoListAdd,
    IToDoListAttchamentsAdd,
    IToDoListCommentsAdd,
    IToDoListMain,
    IToDoListTasksAdd
} from "../types/IToDoList";

export const useGetToDoList = () => {
    return async () => {
        return await Api.get(`/todolist`)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useEditToDoList = () => {
    return async (todolistList: IToDoListMain) => {
        return await Api.patch("/todolist/", todolistList)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};
export const useEditPositionToDoList = () => {
    return async (todolistList: IToDoListMain[]) => {
        return await Api.patch("/todolist/position", todolistList)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useDeleteToDoList = () => {
    return async (id: number) => {
        return await Api.delete(`/todolist?id=${id}`)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useAddToDoList = () => {
    return async (todolist: IToDoListAdd) => {
        return await Api.post("/todolist", todolist)
            .then((data) => {
                console.log(data);
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useAddTask = () => {
    return async (todolistTask: IToDoListTasksAdd) => {
        return await Api.post("/todolist/tasks", todolistTask)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useDeleteTask = () => {
    return async (id: number) => {
        return await Api.delete(`/todolist/tasks?id=${id}`)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useEditTask = () => {
    return async (id: number, status: boolean) => {
        return await Api.patch("/todolist/tasks", { id, status })
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useAddComments = () => {
    return async (todolistComment: IToDoListCommentsAdd) => {
        return await Api.post("/todolist/comments", todolistComment)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};
export const useDeleteComments = () => {
    return async (id: number) => {
        return await Api.delete(`/todolist/comments?id=${id}`)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useAddAttchament = () => {
    return async (todolistAttchament: IToDoListAttchamentsAdd) => {
        return await Api.post("/todolist/attchaments", todolistAttchament)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useDeleteAttchament = () => {
    return async (id: number) => {
        return await Api.delete(`/todolist/attchaments?id=${id}`)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useUploadAttchament = () => {
    return async (file: File) => {
        const formData = new FormData();
        formData.append("file", file);
        return await Api.post("/todolist/attchaments/upload", formData)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};
