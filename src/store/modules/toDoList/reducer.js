import produce from 'immer';
const toDoList = false
const INITIAL_STATE = {
    toDoList: toDoList
}

function ToDoList(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@toDoList/SET_TODOLIST': {
            return produce(state, (draft) => {
                draft.toDoList = action.toDoList;
            })

        }
        default:
            return state;
    }

}

export default ToDoList;