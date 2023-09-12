import { Dispatch, SetStateAction, useEffect } from "react";
import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";

interface type {
    setDate: Dispatch<SetStateAction<number>>;
    setTitle: Dispatch<SetStateAction<string>>;
    setBtnStatus: Dispatch<SetStateAction<boolean>>;
    setValue: Dispatch<SetStateAction<number>>;
    date: number;
    title: string;
    value: number | undefined;
}

const ModalAddEntrances = ({ setBtnStatus, setTitle, title, setValue, value, date, setDate }: type) => {

    useEffect(() => {
        if (title && date && value) {
            setBtnStatus(true)
        } else {
            setBtnStatus(false)
        }
    }, [title, date, value])

    return (
        <>
            <InputSimple
                title='Title:'
                setInput={setTitle}
                input={title}
                placeholder="Type a title..."
            />
            <InputDate
                title='Date:'
                date={date}
                setDate={setDate}
            />
            <InputMoney
                title='Valor:'
                setInput={setValue}
                input={value}
            />
        </>
    )
}

export default ModalAddEntrances;