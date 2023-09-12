
export default function getMonthNameFromTimestamp(timestamp: number) {
    const months = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    const date = new Date(timestamp);
    const monthIndex = date.getMonth();


    return months[monthIndex];
}