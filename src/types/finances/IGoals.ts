import { IFinancesExpense } from "./IExpense";

export interface IFinancesGoal {
    id?: number;
    type: number;
    title: string;
    value: number;
    valueItens: number;
    icon: number;
    color: string;
    itens: IFinancesExpense[];
}
