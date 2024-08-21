import { IToDoListActions, IToDoListMain } from "../types/IToDoList";

export const useToDoListInitialValue: IToDoListMain[] = [];

export const useToDoListReducer = (state: IToDoListMain[], action: IToDoListActions): IToDoListMain[] => {
    switch (action.type) {
        case "set":
            return action.payload;
        case "add":
            return [...state, action.payload];
        case "editPosition":
            return state.map((item) => {
                const updatedItem = action.payload.find((i) => i.id === item.id);
                return updatedItem ? updatedItem : item;
            });
        case "edit":
            return state.map((item) => (action.payload.id === item.id ? action.payload : item));
        case "delete":
            return state.filter((item) => item.id !== action.payload);

        case "addAttchament":
            return state.map((item) =>
                item.id === action.payload.toDoId
                    ? {
                          ...item,
                          toDoListAttchaments: [...item.toDoListAttchaments, action.payload.attchament]
                      }
                    : item
            );
        case "deleteAttchament":
            return state.map((item) =>
                item.id === action.payload.toDoId
                    ? {
                          ...item,
                          toDoListAttchaments: item.toDoListAttchaments.filter((attchament) => attchament.id !== action.payload.attchamentId)
                      }
                    : item
            );

        case "addComment":
            return state.map((item) =>
                item.id === action.payload.toDoId
                    ? {
                          ...item,
                          toDoListComments: [...item.toDoListComments, action.payload.comment]
                      }
                    : item
            );
        case "deleteComment":
            return state.map((item) =>
                item.id === action.payload.toDoId
                    ? {
                          ...item,
                          toDoListComments: item.toDoListComments.filter((comment) => comment.id !== action.payload.commentId)
                      }
                    : item
            );
        case "addTask":
            return state.map((item) =>
                item.id === action.payload.toDoId
                    ? {
                          ...item,
                          toDoListTasks: [...item.toDoListTasks, action.payload.task]
                      }
                    : item
            );
        case "editTask":
            return state.map((item) =>
                item.id === action.payload.toDoId
                    ? {
                          ...item,
                          toDoListTasks: item.toDoListTasks.map((task) =>
                              task.id === action.payload.taskId
                                  ? {
                                        ...task,
                                        status: action.payload.status
                                    }
                                  : task
                          )
                      }
                    : item
            );
        case "deleteTask":
            return state.map((item) =>
                item.id === action.payload.toDoId
                    ? {
                          ...item,
                          toDoListTasks: item.toDoListTasks.filter((comment) => comment.id !== action.payload.taskId)
                      }
                    : item
            );
        default:
            return state;
    }
};
