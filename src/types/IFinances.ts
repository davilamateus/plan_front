export interface IFinancesEntrace {
    id: number;
    title: string;
    value: number;
    date: number;
    color: string;
}

export interface IFinancesEntracesAdd {
    title: string;
    value: number;
    date: number;
}

export interface IFinancesExpense {
    id: number;
    type: number;
    title: string;
    value: number;
    date: number;
    color: string;
    financesGoalId: number | null;
}

export interface IFinancesGoal {
    id: number;
    type: number;
    title: string;
    value: number;
    icon: number;
    color: string;
}

export type IFinanceContext = {
    state: IFinanceMain;
    addEntrace: (entraces: IFinancesEntracesAdd) => void;
    editEntrace: (entraces: IFinancesEntrace) => void;
    deleteEntrace: (entraces: IFinancesEntrace) => void;
    addGoal: (goal: IFinancesGoal) => void;
    editGoal: (goal: IFinancesGoal) => void;
    deleteGoal: (goal: IFinancesGoal) => void;
    addExpense: (goal: IFinancesExpense) => void;
    editExpense: (goal: IFinancesExpense) => void;
    deleteExpense: (goal: IFinancesExpense) => void;
};

export type IFinanceMain = {
    entraces: IFinancesEntrace[];
    domestic: { goals: IFinancesGoal[]; expenses: IFinancesExpense[] };
    trip: { goals: IFinancesGoal[]; expenses: IFinancesExpense[] };
    loaded: boolean;
};

export type IFinanceAction =
    | {
          type: "set";
          payload: IFinanceMain;
      }
    | { type: "addEntrace"; payload: IFinancesEntrace }
    | { type: "editEntrace"; payload: IFinancesEntrace }
    | { type: "deleteEntrace"; payload: IFinancesEntrace }
    | { type: "addGoal"; payload: IFinancesGoal }
    | { type: "editGoal"; payload: IFinancesGoal }
    | { type: "deleteGoal"; payload: IFinancesGoal }
    | { type: "addExpense"; payload: IFinancesExpense }
    | { type: "editExpense"; payload: IFinancesExpense }
    | { type: "deleteExpense"; payload: IFinancesExpense };

export type IFinanceResume = {
    tripGoals: number;
    tripExpenses: number;
    cashInHand: number;
    missing: number;
    missingPorcents: number;
};

export interface IBarData {
    title: string[];
    value: number[];
}
