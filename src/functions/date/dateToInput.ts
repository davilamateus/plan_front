export const dateToInput = (date: number) => {
    const formattedDate = new Date(date * 1).toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    return formattedDate;
}
