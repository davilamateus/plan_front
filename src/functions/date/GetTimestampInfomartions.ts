import { format, addMonths, startOfMonth, endOfMonth } from 'date-fns';

export default function GetTimestampInfomartions(timestamp: string | number | Date, monthOffset: number) {
    const date = new Date(timestamp);

    // Aplica o deslocamento de meses usando date-fns
    const adjustedDate = addMonths(date, monthOffset);

    const monthName = format(adjustedDate, 'MMMM');
    const monthNameShort = format(adjustedDate, 'MMM');

    // Define o primeiro milissegundo do mês
    const firstDay = startOfMonth(adjustedDate).getTime();

    // Define o último milissegundo do mês
    const lastDay = endOfMonth(adjustedDate).getTime();

    return {
        nameOfMonth: monthName,
        nameOfMonthShort: monthNameShort,
        firstDay,
        lastDay
    };
}
