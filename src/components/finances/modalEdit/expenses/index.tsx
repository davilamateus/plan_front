import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import './../style.scss';
import { IFinancesExpenseList } from "../../../../types/finances/IExpense";
import useEditExpense from "../../../../hooks/finances/expenses/useEditExpense";
import useDeleteExpense from "../../../../hooks/finances/expenses/useDeleteExpense";
import GetTimestampInfomartions from "../../../../functions/date/GetTimestampInfomartions";
import InputSelectCategory from "../../../communs/inputs/selecCategory";
import useGetDomesticGoals from "../../../../store/hooks/finances/useGetDomesticGoals";


interface type {
    expenses: IFinancesExpenseList;
    setOpened: Dispatch<SetStateAction<boolean>>;

}

const ModalEditExpenses = ({ expenses, setOpened }: type) => {

    const [btnLoading, setBtnLoading] = useState(false);
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);


    const [title, setTitle] = useState(expenses.title);
    const [value, setValue] = useState<number>(expenses.value);
    const [date, setDate] = useState<number>(expenses.date);
    const [financesGoalId, setFinancesGoalId] = useState<number | undefined>(expenses.financesGoalId);



    const UseEditExpenses = useEditExpense();
    const UseDeleteExpenses = useDeleteExpense();
    const UseGetDomesticGoals = useGetDomesticGoals();


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
                id: expenses.id,
                date,
                type: expenses.type,
                financesGoalId: financesGoalId
            },
            GetTimestampInfomartions(date, 0).firstDay,
            GetTimestampInfomartions(date, 0).lastDay,
            true
        ).then(() => {
            setOpened(false)
        })

    }

    console.log(financesGoalId)

    function deleteEntrace() {
        setBtnLoadingDelete(true)
        UseDeleteExpenses(expenses.id, expenses.type).then(() => {
            setOpened(false);
        });
    };


    return (
        < div className="edit-modal">
            <h2>Edit Expenses</h2>
            <form onSubmit={(e) => { e.preventDefault() }} >

                <InputSimple
                    title='Title:'
                    setInput={setTitle}
                    input={title}
                    placeholder="Type a title..."
                />
                <InputSelectCategory
                    title="Select a category:"
                    goals={UseGetDomesticGoals}
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
                    title="Delete expenses"
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