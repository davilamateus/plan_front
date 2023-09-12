import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";
import IFinancesExpense from "../../../../types/finances/IExpense";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import useEditExpense from "../../../../hooks/finances/useEditExpense";
import './style.scss';
import useDeleteExpense from "../../../../hooks/finances/useDeleteExpense";

interface type {
    entrace: IFinancesExpense;
    setOpened: Dispatch<SetStateAction<boolean>>;

}

const ModalEditEntrances = ({ entrace, setOpened }: type) => {

    const [btnLoading, setBtnLoading] = useState(false);
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);

    const [title, setTitle] = useState(entrace.title);
    const [value, setValue] = useState<number>(entrace.value);
    const [date, setDate] = useState<number>(entrace.date);


    const UseEditExpense = useEditExpense();
    const UseDeleteExpense = useDeleteExpense();

    useEffect(() => {
        if (title && date && value) {
            setBtnStatus(true)
        } else {
            setBtnStatus(false)
        }
    }, [title, date, value])


    function editEntrace() {
        setBtnLoading(true)
        UseEditExpense(
            {
                title,
                value,
                type: 1,
                id: entrace.id,
                date
            }
        ).then(() => {
            setOpened(false)
        })

    }

    function deleteEntrace() {
        setBtnLoadingDelete(true)
        UseDeleteExpense(entrace.id, 1).then(() => {
            setOpened(false);
        })

    }

    console.log(date)

    return (
        < div className="edit-entrace">
            <h2>Edit Entrace</h2>
            <form onSubmit={(e) => { e.preventDefault() }} >

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
                    title="Save"
                    type='success'
                    action={() => { editEntrace() }}
                    status={btnStatus}
                    loading={btnLoading}
                />
                <ButtonSimple
                    title="Delete entrace"
                    type='delete'
                    action={() => { deleteEntrace() }}
                    status={true}
                    loading={btnLoadingDelete}
                />
            </form>
        </div>
    )
}

export default ModalEditEntrances;