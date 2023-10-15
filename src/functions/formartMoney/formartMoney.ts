export default function FormartMoney(value: number) {

    const numberSplit = (value.toString()).split('');
    const numberAddPoint = ((numberSplit.slice(0, numberSplit.length - 2).join('')) + '.' + (numberSplit.slice(numberSplit.length - 2, numberSplit.length)).join(''));
    const numberFormat = numberAddPoint.toString().replace(/\d(?=(\d{3})+\.)/g, '$&,');
    const numberMoreSig = `R$ ${numberFormat}`;

    if (value == 0) {
        return 'R$ 0.00';
    } else {
        return numberMoreSig;

    }


};