import { IFinanceAction, IFinanceMain } from "../types/IFinances";

export const inicialFinanceValue = {
    entraces: [],
    domestic: {
        goals: [],
        expenses: []
    },
    trip: {
        goals: [],
        expenses: []
    },
    loaded: false
};

export const useFinanceReduce = (state: IFinanceMain, action: IFinanceAction) => {
    switch (action.type) {
        case "set":
            return { ...action.payload, loaded: true };
        case "addEntrace":
            return { ...state, entraces: [...state.entraces, action.payload] };
        case "editEntrace":
            const newEntrace = state.entraces.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                } else {
                    return item;
                }
            });
            return { ...state, entraces: newEntrace };
        case "deleteEntrace":
            return { ...state, entraces: state.entraces.filter((item) => item.id !== action.payload.id) };
        case "addGoal":
            if (action.payload.type === 1) {
                const newGoals = { ...state.domestic, goals: [...state.domestic.goals, action.payload] };
                return { ...state, domestic: newGoals };
            } else {
                const newGoals = { ...state.trip, goals: [...state.trip.goals, action.payload] };
                return { ...state, trip: newGoals };
            }
        case "editGoal":
            if (action.payload.type === 1) {
                const editedItem = state.domestic.goals.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return item;
                    }
                });
                const newGoals = { ...state.domestic, goals: editedItem };
                return { ...state, domestic: newGoals };
            } else {
                const editedItem = state.trip.goals.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return item;
                    }
                });
                const newGoals = { ...state.trip, goals: editedItem };
                return { ...state, trip: newGoals };
            }
        case "deleteGoal":
            if (action.payload.type === 1) {
                const newGoals = {
                    ...state.domestic,
                    goals: state.domestic.goals.filter((goal) => goal.id !== action.payload.id),
                    expenses: state.domestic.expenses.map((item) => {
                        if (item.financesGoalId === action.payload.id) {
                            return { ...item, financesGoalId: null };
                        } else {
                            return item;
                        }
                    })
                };
                return { ...state, domestic: newGoals };
            } else {
                const newGoals = {
                    ...state.domestic,
                    goals: state.trip.goals.filter((goal) => goal.id !== action.payload.id),
                    expenses: state.trip.expenses.map((item) => {
                        if (item.financesGoalId === action.payload.id) {
                            return { ...item, financesGoalId: null };
                        } else {
                            return item;
                        }
                    })
                };
                return { ...state, trip: newGoals };
            }
        case "addExpense":
            if (action.payload.type === 1) {
                const newDomestic = { ...state.domestic, expenses: [...state.domestic.expenses, action.payload] };
                return { ...state, domestic: newDomestic };
            } else {
                const newTrip = { ...state.trip, expenses: [...state.trip.expenses, action.payload] };
                return { ...state, trip: newTrip };
            }
        case "editExpense":
            if (action.payload.type === 1) {
                const editedItem = state.domestic.expenses.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return item;
                    }
                });
                const newExpenses = { ...state.domestic, expenses: editedItem };
                return { ...state, domestic: newExpenses };
            } else {
                const editedItem = state.trip.expenses.map((item) => {
                    if (item.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return item;
                    }
                });
                const newExpenses = { ...state.trip, expenses: editedItem };
                return { ...state, trip: newExpenses };
            }
        case "deleteExpense":
            if (action.payload.type === 1) {
                const deleteItens = state.domestic.expenses.filter((item) => item.id !== action.payload.id);
                const newExpenses = { ...state.domestic, expenses: deleteItens };
                return { ...state, domestic: newExpenses };
            } else {
                const deleteItens = state.trip.expenses.filter((item) => item.id !== action.payload.id);
                const newExpenses = { ...state.trip, expenses: deleteItens };
                return { ...state, trip: newExpenses };
            }
        default:
            return state;
    }
};
