export type IToDoListMain = {
    title: string;
    description: string;
    date: number;
    status: number;
    color: string;
    position: number;
    id: number;
    toDoListAttchaments: IToDoListAttchament[];
    toDoListComments: IToDoListComments[];
    toDoListTasks: IToDoListTasks[];
};

export type IToDoListActions =
    | {
          type: "add";
          payload: IToDoListMain;
      }
    | { type: "set"; payload: IToDoListMain[] }
    | { type: "delete"; payload: number }
    | { type: "edit"; payload: IToDoListMain }
    | { type: "editPosition"; payload: IToDoListMain[] }
    | { type: "addAttchament"; payload: { toDoId: number; attchament: IToDoListAttchament } }
    | { type: "deleteAttchament"; payload: { toDoId: number; attchamentId: number } }
    | { type: "addComment"; payload: { toDoId: number; comment: IToDoListComments } }
    | { type: "deleteComment"; payload: { toDoId: number; commentId: number } }
    | { type: "addTask"; payload: { toDoId: number; task: IToDoListTasks } }
    | { type: "editTask"; payload: { toDoId: number; taskId: number; status: boolean } }
    | { type: "deleteTask"; payload: { toDoId: number; taskId: number } };

export type IToDoListContext = {
    state: IToDoListMain[];
    addToDoList: (toDoList: IToDoListAdd) => void;
    deleteToDoList: (id: number) => void;
    editToDoList: (toDoItem: IToDoListMain) => void;
    editPosition: (toDoItem: IToDoListMain[]) => void;
    addAttchament: (toDoId: number, attchament: IToDoListAttchamentsAdd) => void;
    deleteAttchament: (toDoId: number, attchamentId: number) => void;
    addComment: (toDoId: number, comment: IToDoListCommentsAdd) => void;
    deleteComment: (toDoId: number, commentID: number) => void;
    addTask: (toDoId: number, task: IToDoListTasksAdd) => void;
    editTask: (toDoId: number, taskId: number, status: boolean) => void;
    deleteTask: (toDoId: number, taskId: number) => void;
    loaded: boolean;
};

export type IToDoListAdd = {
    title: string;
    description: string;
    date: number;
    color: string;
};

export interface IToDoListAttchament {
    title: string;
    link: string;
    toDoListId: number;
    id: number;
}

export interface IToDoListComments {
    title: string;
    description: string;
    date: string;
    toDoListId: number;
    id: number;
    createdAt: Date;
}

export interface IToDoListTasks {
    title: string;
    description: string;
    status: boolean;
    toDoListId: number;
    id: number;
}

export interface IToDoListTasksAdd {
    title: string;
    description: string;
    toDoListId: number;
}

export interface IToDoListCommentsAdd {
    title: string;
    description: string;
    toDoListId: number;
}

export interface IToDoListAttchamentsAdd {
    title: string;
    link: string;
    toDoListId: number;
}

export interface ITodolistPosition {
    id: number;
    status: number;
    position: number;
}
