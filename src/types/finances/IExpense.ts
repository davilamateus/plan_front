export interface IFinancesExpenseList {
    id: number;
    type: number;
    title: string;
    value: number;
    date: number;
}

export interface IFinancesExpenseAdd {
    type: number;
    title: string;
    value: number;
    date: number;
}

