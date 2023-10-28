import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import './../style.scss';
import { IFinancesExpenseAdd, IFinancesExpenseList } from "../../../../types/finances/IExpense";
import useEditExpense from "../../../../hooks/finances/expenses/useEditExpense";
import useDeleteExpense from "../../../../hooks/finances/expenses/useDeleteExpense";
import GetTimestampInfomartions from "../../../../functions/date/GetTimestampInfomartions";
import InputSelectCategory from "../../../communs/inputs/selecCategory";
import useGetDomesticGoals from "../../../../store/hooks/finances/useGetDomesticGoals";
import useGetTripGoals from "../../../../store/hooks/finances/useGetTripGoals";


interface type {
    expense: IFinancesExpenseList;
    setOpened: Dispatch<SetStateAction<boolean>>;

}

const ModalEditExpenses = ({ expense, setOpened }: type) => {

    const [btnLoading, setBtnLoading] = useState(false);
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);


    const [title, setTitle] = useState(expense.title);
    const [value, setValue] = useState<number>(expense.value);
    const [date, setDate] = useState<number>(expense.date);
    const [financesGoalId, setFinancesGoalId] = useState<number | undefined>(expense.financesGoalId);



    const UseEditExpenses = useEditExpense();
    const UseDeleteExpenses = useDeleteExpense();
    const UseGetDomesticGoals = useGetDomesticGoals();
    const UseGetTripGoals = useGetTripGoals();


    useEffect(() => {
        if (title && date && value) {
            setBtnStatus(true)
        } else {
            setBtnStatus(false)
        }
    }, [title, date, value])


    function editEntrace() {
        setBtnLoading(true)
        UseEditExpenses(
            {
                title,
                value,
                id: expense.id,
                date,
                type: expense.type,
                financesGoalId: financesGoalId,
                color: null
            },
            GetTimestampInfomartions(date, 0).firstDay,
            GetTimestampInfomartions(date, 0).lastDay,
            true
        ).then(() => {
            setOpened(false)
        })

    }


    function deleteEntrace() {
        setBtnLoadingDelete(true)
        UseDeleteExpenses(expense.id, expense.type).then(() => {
            setOpened(false);
        });
    };



    return (
        < div className="edit-modal">
            <form onSubmit={(e) => { e.preventDefault() }} >
                <InputSimple
                    title='Title:'
                    setInput={setTitle}
                    input={title}
                    placeholder="Type a title..."
                />
                <InputSelectCategory
                    title="Select a category:"
                    goals={expense.type === 1 ? UseGetDomesticGoals : UseGetTripGoals}
                    selectOption={financesGoalId}
                    setSelectOptions={setFinancesGoalId}
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
                    title="Delete expense"
                    type='delete'
                    action={() => { deleteEntrace() }}
                    status={true}
                    loading={btnLoadingDelete}
                />
            </form>
        </div>
    )
}

export default ModalEditExpenses;