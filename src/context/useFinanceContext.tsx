import { createContext, ReactNode, useEffect, useReducer } from "react";
import { IFinanceContext, IFinancesEntrace, IFinancesEntracesAdd, IFinancesExpense, IFinancesGoal } from "../types/IFinances";
import {
    useAddEntracesRequest,
    useAddExpenseRequest,
    useAddGoalsRequest,
    useDeleteEntracesRequest,
    useDeleteExpenseRequest,
    useDeleteGoalsRequest,
    useEditEntracesRequest,
    useEditExpenseRequest,
    useEditGoalsRequest,
    useGetFinancesRequest
} from "../requests/useFinancesRequest";
import { inicialFinanceValue, useFinanceReduce } from "../reducers/useFinancesReducer";

export const UseFinanceContext = createContext<IFinanceContext | null>(null);

type prop = {
    children: ReactNode;
};
export const UseFinanceContextProvider = ({ children }: prop) => {
    const [state, dispatch] = useReducer(useFinanceReduce, inicialFinanceValue);
    const UseGetFinancesRequest = useGetFinancesRequest();
    const UseAddEntracesRequest = useAddEntracesRequest();
    const UseEditEntracesRequest = useEditEntracesRequest();
    const UseDeleteEntracesRequest = useDeleteEntracesRequest();
    const UseAddGoalsRequest = useAddGoalsRequest();
    const UseEditGoalsRequest = useEditGoalsRequest();
    const UseDeleteGoalsRequest = useDeleteGoalsRequest();
    const UseAddExpenseRequest = useAddExpenseRequest();
    const UseEditExpenseRequest = useEditExpenseRequest();
    const UseDeleteExpenseRequest = useDeleteExpenseRequest();

    useEffect(() => {
        if (state.loaded == false) {
            UseGetFinancesRequest().then((data) => {
                dispatch({ type: "set", payload: data });
            });
        }
    }, [state]);

    const addEntrace = (entrace: IFinancesEntracesAdd) => {
        try {
            UseAddEntracesRequest(entrace).then((data) => {
                dispatch({ type: "addEntrace", payload: data });
            });
        } catch (error) {
            console.error("Error adding entrace :", error);
        }
    };
    const editEntrace = (entrace: IFinancesEntrace) => {
        try {
            UseEditEntracesRequest(entrace).then(() => {
                dispatch({ type: "editEntrace", payload: entrace });
            });
        } catch (error) {
            console.error("Error editing entrace :", error);
        }
    };
    const deleteEntrace = (entrace: IFinancesEntrace) => {
        try {
            UseDeleteEntracesRequest(entrace.id).then(() => {
                dispatch({ type: "deleteEntrace", payload: entrace });
            });
        } catch (error) {
            console.error("Error editing entrace :", error);
        }
    };

    const addGoal = (goal: IFinancesGoal) => {
        try {
            UseAddGoalsRequest(goal).then(() => {
                dispatch({ type: "addGoal", payload: goal });
            });
        } catch (error) {
            console.error("Error adding goal :", error);
        }
    };
    const editGoal = (goal: IFinancesGoal) => {
        try {
            UseEditGoalsRequest(goal).then(() => {
                dispatch({ type: "editGoal", payload: goal });
            });
        } catch (error) {
            console.error("Error editing goal :", error);
        }
    };
    const deleteGoal = (goal: IFinancesGoal) => {
        try {
            UseDeleteGoalsRequest(goal).then(() => {
                dispatch({ type: "deleteGoal", payload: goal });
            });
        } catch (error) {
            console.error("Error deleting goal :", error);
        }
    };

    const addExpense = (expense: IFinancesExpense) => {
        try {
            UseAddExpenseRequest(expense).then((data) => {
                dispatch({ type: "addExpense", payload: data.data });
            });
        } catch (error) {
            console.error("Error adding expense :", error);
        }
    };
    const editExpense = (expense: IFinancesExpense) => {
        try {
            UseEditExpenseRequest(expense).then(() => {
                dispatch({ type: "editExpense", payload: expense });
            });
        } catch (error) {
            console.error("Error editing expense :", error);
        }
    };
    const deleteExpense = (expense: IFinancesExpense) => {
        try {
            UseDeleteExpenseRequest(expense).then(() => {
                dispatch({ type: "deleteExpense", payload: expense });
            });
        } catch (error) {
            console.error("Error deleting expense :", error);
        }
    };

    return (
        <UseFinanceContext.Provider
            value={{
                state,
                addEntrace,
                editEntrace,
                deleteEntrace,
                addGoal,
                editGoal,
                deleteGoal,
                addExpense,
                editExpense,
                deleteExpense
            }}>
            {children}
        </UseFinanceContext.Provider>
    );
};
