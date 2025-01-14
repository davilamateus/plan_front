import { format, addMonths, startOfMonth, endOfMonth } from "date-fns";
import { ptBR } from "date-fns/locale";

export const getTimestampInfomartions = (
	timestamp: string | number | Date,
	monthOffset: number
) => {
	const date = new Date(timestamp);
	const adjustedDate = addMonths(date, monthOffset);

	const monthName = format(adjustedDate, "MMMM", { locale: ptBR });
	const monthNameShort = format(adjustedDate, "MMM", { locale: ptBR });

	const firstDay = startOfMonth(adjustedDate).getTime();
	const lastDay = endOfMonth(adjustedDate).getTime();

	return {
		nameOfMonth: monthName,
		nameOfMonthShort: monthNameShort,
		firstDay,
		lastDay,
	};
};
