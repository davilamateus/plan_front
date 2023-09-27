export default function FormartMoney(value: number) {

    const sig = '$';
    const valueSplited = (value.toString()).split('');
    const valueBig = valueSplited.slice(0, valueSplited.length - 2).join('');
    const valueCents = valueSplited.slice(valueSplited.length - 2, valueSplited.length).join('');

    const valueFormated = `${sig} ${+(valueBig) > 0 ? valueBig : 0}.${valueCents}`;

    return valueFormated;
}