

export interface IFinancesExpense {
    id?:number;
    type: number;
    title: string;
    value: number;
    date: number;
    financesGoalId: number | undefined;
}

