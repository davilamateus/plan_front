import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import './../style.scss';
import { IFinancesExpenseList } from "../../../../types/finances/IExpense";
import useEditEntraces from "../../../../hooks/finances/entraces/useEditEntraces";
import useDeleteEntraces from "../../../../hooks/finances/entraces/useDeleteEntraces";


interface type {
    entrace: IFinancesExpenseList;
    setOpened: Dispatch<SetStateAction<boolean>>;

}

const ModalEditEntrances = ({ entrace, setOpened }: type) => {

    const [btnLoading, setBtnLoading] = useState(false);
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);

    const [title, setTitle] = useState(entrace.title);
    const [value, setValue] = useState<number>(entrace.value);
    const [date, setDate] = useState<number>(entrace.date);


    const UseEditEntraces = useEditEntraces();
    const UseDeleteEntraces = useDeleteEntraces();

    useEffect(() => {
        if (title && date && value) {
            setBtnStatus(true)
        } else {
            setBtnStatus(false)
        }
    }, [title, date, value])


    function editEntrace() {
        setBtnLoading(true)
        UseEditEntraces(
            {
                title,
                value,
                id: entrace.id,
                date
            }
        ).then(() => {
            setOpened(false)
        })

    }

    function deleteEntrace() {
        setBtnLoadingDelete(true)
        UseDeleteEntraces(entrace.id).then(() => {
            setOpened(false);
        });
    };


    return (
        < div className="edit-modal">
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