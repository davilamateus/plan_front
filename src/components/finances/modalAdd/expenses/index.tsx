import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import InputSelectCategory from "../../../communs/inputs/selecCategory";
import useGetDomesticGoals from "../../../../store/hooks/finances/useGetDomesticGoals";
import useGetTripGoals from "../../../../store/hooks/finances/useGetTripGoals";
import useAddExpense from "../../../../hooks/finances/expenses/useAddExpense";
import useGetGoalsApi from "../../../../hooks/finances/goals/useGetGoals";


interface type {
    type: number;
    setOpened: Dispatch<SetStateAction<boolean>>;

}

const ModalAddExpenses = ({ type, setOpened }: type) => {

    const [btnLoading, setBtnLoading] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);


    const [title, setTitle] = useState('');
    const [value, setValue] = useState<number>(0);
    const [date, setDate] = useState<number>(new Date().getTime());
    const [financesGoalId, setFinancesGoalId] = useState<number | undefined>(undefined);



    const UseGetDomesticGoals = useGetDomesticGoals();
    const UseGetTripGoals = useGetTripGoals();
    const UseAddExpenses = useAddExpense();


    useEffect(() => {
        if (title && date && value) {
            setBtnStatus(true)
        } else {
            setBtnStatus(false)
        }
    }, [title, date, value])


    function addExpense() {
        setBtnLoading(true)
        UseAddExpenses(
            {
                title,
                value,
                date,
                type: type,
                financesGoalId: financesGoalId
            },

        ).then(() => {

            setOpened(false)
        })

    }






    return (
        < div className="edit-modal">
            <h2>Add Expenses</h2>
            <form onSubmit={(e) => { e.preventDefault() }} >

                <InputSimple
                    title='Title:'
                    setInput={setTitle}
                    input={title}
                    placeholder="Type a title..."
                />
                <InputSelectCategory
                    title="Select a category:"
                    goals={type === 1 ? UseGetDomesticGoals : UseGetTripGoals}
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
                    title="Add"
                    type='success'
                    action={() => { addExpense() }}
                    status={btnStatus}
                    loading={btnLoading}
                />

            </form>
        </div>
    )
}

export default ModalAddExpenses;