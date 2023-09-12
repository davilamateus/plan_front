import IFinancesExpense from "./IExpense";

export interface IFinancesGoalsList {
    id: number;
    type: number;
    title: string;
    value: number;
    icon: number;
    color: string;
    itens: IFinancesExpense[]
}

export interface IFinancesGoalsAdd {
    type: number;
    title: string;
    value: number;
    icon: number;
    color: string;
}


