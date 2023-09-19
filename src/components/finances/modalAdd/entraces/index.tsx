import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import useAddEntraces from "../../../../hooks/finances/entraces/useAddEntraces";


const ModalAddEntrances = () => {

    const [title, setTitle] = useState<string>('');
    const [date, setDate] = useState(new Date().getTime());
    const [value, setValue] = useState(0);
    const [btnLoading, setBtnLoading] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);

    const UseAddEntraces = useAddEntraces();

    useEffect(() => {
        if (title && date && value) {
            setBtnStatus(true)
        } else {
            setBtnStatus(false)
        }
    }, [title, date, value])


    function addEntrace() {
        setBtnLoading(true);

        const entrace = {
            type: 0,
            title,
            value,
            date
        }
        UseAddEntraces(entrace);
        setTitle('');
        setValue(0);
        setDate(new Date().getTime());
        setBtnLoading(false);
    }

    return (
        <div className="modal-box-opened">
            <h3>Add Entrace</h3>
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
            <ButtonSimple
                title='Add'
                type='success'
                status={btnStatus}
                loading={btnLoading}
                action={() => { addEntrace() }}
            />
        </div>
    )
}

export default ModalAddEntrances;