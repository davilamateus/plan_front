import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useGetDomesticGoals } from "../../../../store/hooks/finances/useGetDomesticGoals";
import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import InputSelectCategory from "../../../communs/inputs/selecCategory";
import { useGetTripGoals } from "../../../../store/hooks/finances/useGetTripGoals";
import useAddExpense from "../../../../hooks/finances/expenses/useAddExpense";
import useEditExpense from "../../../../hooks/finances/expenses/useEditExpense";
import { IFinancesExpense } from "../../../../types/finances/IExpense";
import useDeleteExpense from "../../../../hooks/finances/expenses/useDeleteExpense";
import "./../style.scss";

interface type {
    type: number;
    setOpened: (e: boolean) => void;
    expenseEdit?: IFinancesExpense;
}

const ModalExpenses = ({ type, setOpened, expenseEdit }: type) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);

    const [expense, setExpense] = useState<IFinancesExpense>(
        expenseEdit || {
            type,
            title: "",
            value: 0,
            date: new Date().getTime(),
            financesGoalId: undefined
        }
    );

    const UseGetDomesticGoals = useGetDomesticGoals();
    const UseGetTripGoals = useGetTripGoals();
    const UseAddExpenses = useAddExpense();
    const UseEditExpense = useEditExpense();
    const UseDeleteExpense = useDeleteExpense();

    const handleSubmitExpense = () => {
        setBtnLoading(true);
        if (expenseEdit) {
            UseEditExpense({ ...expense, id: expenseEdit.id }).then(() => setOpened(false));
        } else {
            UseAddExpenses(expense).then(() => setOpened(false));
        }
    };

    const handleDelete = () => {
        setBtnLoadingDelete(true);
        if (expenseEdit?.id) UseDeleteExpense(expenseEdit).then(() => setOpened(false));
    };

    return (
        <div className="modal">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <InputSimple
                    title="Title:"
                    setInput={(e) => setExpense({ ...expense, title: e })}
                    input={expense.title}
                    placeholder="Type a title..."
                />
                <InputSelectCategory
                    title="Select a category:"
                    goals={type === 1 ? UseGetDomesticGoals : UseGetTripGoals}
                    selectOption={expense.financesGoalId}
                    setSelectOptions={(e) => setExpense({ ...expense, financesGoalId: e })}
                />
                <InputDate
                    title="Date:"
                    date={expense.date}
                    setDate={(e) => setExpense({ ...expense, date: e })}
                />
                <InputMoney
                    title="Valor:"
                    setInput={(e) => setExpense({ ...expense, value: e })}
                    input={expense.value}
                />
                <ButtonSimple
                    title={expenseEdit ? "Save" : "Add"}
                    type="success"
                    action={() => {
                        handleSubmitExpense();
                    }}
                    status={expense.title !== "" && expense.value > 0}
                    loading={btnLoading}
                />
                {expenseEdit && (
                    <ButtonSimple
                        title="Delete"
                        type="delete"
                        status={true}
                        loading={btnLoadingDelete}
                        action={() => {
                            handleDelete();
                        }}
                    />
                )}
            </form>
        </div>
    );
};

export default ModalExpenses;
