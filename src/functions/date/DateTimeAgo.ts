export const dateTimeAgo = (date: Date): string => {
	const now = new Date();

	const isFuture = date.getTime() > now.getTime();
	const seconds = Math.abs(Math.floor((now.getTime() - date.getTime()) / 1000));

	if (isFuture) {
		if (seconds < 60) {
			return `Em ${seconds} segundo${seconds !== 1 ? "s" : ""}`;
		} else if (seconds < 3600) {
			const minutes = Math.floor(seconds / 60);
			return `Em ${minutes} minuto${minutes !== 1 ? "s" : ""}`;
		} else if (seconds < 86400) {
			const hours = Math.floor(seconds / 3600);
			return `Em ${hours} hora${hours !== 1 ? "s" : ""}`;
		} else if (seconds < 2592000) {
			const days = Math.floor(seconds / 86400);
			return `Em ${days} dia${days !== 1 ? "s" : ""}`;
		} else {
			const months = Math.floor(seconds / 2592000);
			return `Em ${months} mês${months !== 1 ? "es" : ""}`;
		}
	} else {
		if (seconds < 60) {
			return `${seconds} segundo${seconds !== 1 ? "s" : ""} atrás`;
		} else if (seconds < 3600) {
			const minutes = Math.floor(seconds / 60);
			return `${minutes} minuto${minutes !== 1 ? "s" : ""} atrás`;
		} else if (seconds < 86400) {
			const hours = Math.floor(seconds / 3600);
			return `${hours} hora${hours !== 1 ? "s" : ""} atrás`;
		} else if (seconds < 2592000) {
			const days = Math.floor(seconds / 86400);
			return `${days} dia${days !== 1 ? "s" : ""} atrás`;
		} else {
			const months = Math.floor(seconds / 2592000);
			return `${months} mês${months !== 1 ? "es" : ""} atrás`;
		}
	}
};
