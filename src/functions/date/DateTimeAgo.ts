export const dateTimeAgo = (date: Date): string => {
    const now = new Date();

    const isFuture = date.getTime() > now.getTime();
    const seconds = Math.abs(Math.floor((now.getTime() - date.getTime()) / 1000));

    if (isFuture) {
        if (seconds < 60) {
            return `In ${seconds} second${seconds !== 1 ?? "s"}`;
        } else if (seconds < 3600) {
            const minutes = Math.floor(seconds / 60);
            return `In ${minutes} minute${minutes !== 1 ? "s" : ""}`;
        } else if (seconds < 86400) {
            const hours = Math.floor(seconds / 3600);
            return `In ${hours} hour${hours !== 1 ? "s" : ""}`;
        } else if (seconds < 2592000) {
            const days = Math.floor(seconds / 86400);
            return `In ${days} day${days !== 1 ? "s" : ""}`;
        } else {
            const months = Math.floor(seconds / 2592000);
            return `In ${months} month${months !== 1 ? "s" : ""}`;
        }
    } else {
        if (seconds < 60) {
            return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
        } else if (seconds < 3600) {
            const minutes = Math.floor(seconds / 60);
            return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
        } else if (seconds < 86400) {
            const hours = Math.floor(seconds / 3600);
            return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
        } else if (seconds < 2592000) {
            const days = Math.floor(seconds / 86400);
            return `${days} day${days !== 1 ? "s" : ""} ago`;
        } else {
            const months = Math.floor(seconds / 2592000);
            return `${months} month${months !== 1 ? "s" : ""} ago`;
        }
    }
};
