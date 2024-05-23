export interface IFinancesEntracesMain {
    month: string;
    year: number;
    monthsFromNow: number;
    totalValue: number;
    itens: IFinancesEntrace[];
}

export interface IFinancesEntrace {
    id?: number;
    title: string;
    value: number;
    date: number;
}

export interface IFinancesEntracesAdd {
    title: string;
    value: number;
    date: number;
}

