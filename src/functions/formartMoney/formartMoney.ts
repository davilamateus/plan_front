export const formartMoney = (value: number) => {
    const numberSplit = value.toString().split("");
    const numberAddPoint = numberSplit.slice(0, numberSplit.length - 2).join("") + "." + numberSplit.slice(numberSplit.length - 2, numberSplit.length).join("");
    const numberFormat = numberAddPoint.toString().replace(/\d(?=(\d{3})+\.)/g, "$&,");
    const numberMoreSig = `$ ${numberFormat}`;

    if (value === 0) {
        return "$ 0.00";
    } else {
        if (numberSplit.length < 3) {
            return `$ 0${numberFormat}`;
        } else {
            return numberMoreSig;
        }
    }
};
