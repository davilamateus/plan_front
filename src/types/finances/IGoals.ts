import { IFinancesExpenseList } from "./IExpense";

export interface IFinancesGoalsList {
    id: number;
    type: number;
    title: string;
    value: number;
    icon: number;
    color: string;
    itens: IFinancesExpenseList[]
}

export interface IFinancesGoalsAdd {
    type: number;
    title: string;
    value: number;
    icon: number;
    color: string;
}


