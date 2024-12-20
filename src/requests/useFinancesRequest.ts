import Api from "../axios";
import { IFinancesEntrace, IFinancesEntracesAdd, IFinancesExpense, IFinancesGoal } from "../types/IFinances";

export const useGetFinancesRequest = () => {
    return async () => {
        return await Api.get("/finances")
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useAddEntracesRequest = () => {
    return async (entrace: IFinancesEntracesAdd) => {
        return await Api.post("/finances/entraces", entrace)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useEditEntracesRequest = () => {
    return async (entrace: IFinancesEntrace) => {
        return await Api.patch("/finances/entraces", entrace);
    };
};

export const useDeleteEntracesRequest = () => {
    return async (id: number) => {
        return await Api.delete(`/finances/entraces?id=${id}`);
    };
};

export const useAddGoalsRequest = () => {
    return async (goals: IFinancesGoal) => {
        console.log("o goals", goals);
        return await Api.post("/finances/goals", goals)
            .then((data) => {
                return data.data;
            })
            .catch((error) => console.log(error));
    };
};

export const useEditGoalsRequest = () => {
    return async (goal: IFinancesGoal) => {
        return await Api.patch("/finances/goals/", goal);
    };
};

export const useDeleteGoalsRequest = () => {
    return async (goal: IFinancesGoal) => {
        return await Api.delete(`/finances/goals?id=${goal.id}`);
    };
};

export const useAddExpenseRequest = () => {
    return async (finances: IFinancesExpense) => {
        return await Api.post("/finances/expenses", finances);
    };
};

export const useDeleteExpenseRequest = () => {
    return async (expense: IFinancesExpense) => {
        return await Api.delete(`/finances/expenses?id=${expense.id}`);
    };
};

export const useEditExpenseRequest = () => {
    return async (finances: IFinancesExpense) => {
        return await Api.patch("/finances/expenses", finances);
    };
};
