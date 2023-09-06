import { Dispatch, SetStateAction } from "react";
import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";

interface type {
    setTitle: Dispatch<SetStateAction<string>>;
    setValue: Dispatch<SetStateAction<string | undefined>>;
    title: string;
    value: string | undefined;
}

const ModalAddEntrances = ({ setTitle, title, setValue, value }: type) => {
    return (
        <div>
            <InputSimple
                title='Title:'
                setInput={setTitle}
                input={title}
                placeholder="Type a title..."
            />
            <InputMoney
                title='Title:'
                setInput={setValue}
                input={value}
                placeholder="1000.00"
            />
        </div>
    )
}

export default ModalAddEntrances;