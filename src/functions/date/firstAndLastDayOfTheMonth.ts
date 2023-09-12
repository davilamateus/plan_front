export default function GetFirstAndLastDayTimestamps(timestamp: string | number | Date, monthOffset: number) {
    const date = new Date(timestamp);

    // Aplica o deslocamento de meses
    date.setMonth(date.getMonth() + monthOffset);

    // Obtém o nome do mês em inglês
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthNamesShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[date.getMonth()];
    const monthNameShort = monthNamesShort[date.getMonth()];

    // Define o primeiro milissegundo do mês
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    const firstDayTimestamp = date.getTime();

    // Define o último milissegundo do mês
    date.setMonth(date.getMonth() + 1);
    date.setTime(date.getTime() - 1);
    const lastDayTimestamp = date.getTime();

    return {
        nameOfMonth: monthName,
        nameOfMonthShort: monthNameShort,
        firstDay: firstDayTimestamp,
        lastDay: lastDayTimestamp
    };
}