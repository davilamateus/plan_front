import { format, addMonths, startOfMonth, endOfMonth } from 'date-fns';

export const getTimestampInfomartions = (timestamp: string | number | Date, monthOffset: number) => {
    const date = new Date(timestamp);
    const adjustedDate = addMonths(date, monthOffset);

    const monthName = format(adjustedDate, 'MMMM');
    const monthNameShort = format(adjustedDate, 'MMM');

    const firstDay = startOfMonth(adjustedDate).getTime();

    const lastDay = endOfMonth(adjustedDate).getTime();

    return {
        nameOfMonth: monthName,
        nameOfMonthShort: monthNameShort,
        firstDay,
        lastDay
    };
}
