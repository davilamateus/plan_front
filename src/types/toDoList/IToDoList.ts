export interface IToDoListMain {
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

}

export interface IToDoListAdd {
    title: string;
    description: string;
    date: number;
    color: string;
}

export interface IToDoListAttchament {
    title: string;
    link: string;
    toDoListId: number;
    id: number
}

export interface IToDoListComments {
    title: string;
    description: string;
    date: string;
    toDoListId: number;
    id: number;
    createdAt: Date
}

export interface IToDoListTasks {
    title: string;
    description: string;
    status: boolean;
    toDoListId: number;
    id: number
}


export interface IToDoListTasksAdd {
    title: string;
    description: string;
    toDoListId: number
}

export interface IToDoListCommentsAdd {
    title: string;
    description: string;
    toDoListId: number
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