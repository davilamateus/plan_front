import { useContext, useState } from "react";
import { IFinancesExpense } from "../../../../types/IFinances";
import { UseFinanceContext } from "../../../../context/useFinanceContext";
import InputSimple from "../../../communs/inputs/simples";
import InputMoney from "../../../communs/inputs/money";
import InputDate from "../../../communs/inputs/date";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import InputSelectCategory from "../../../communs/inputs/selecCategory";
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
            id: 0,
            type,
            title: "",
            color: "",
            value: 0,
            date: new Date().getTime(),
            financesGoalId: null
        }
    );

    const finance = useContext(UseFinanceContext);

    const handleSubmitExpense = () => {
        setBtnLoading(true);
        if (expenseEdit) {
            finance?.editExpense(expense);
        } else {
            finance?.addExpense(expense);
        }
        setTimeout(() => {
            setOpened(false);
        }, 2000);
    };

    const handleDelete = () => {
        setBtnLoadingDelete(true);
        finance?.deleteExpense(expense);
        setTimeout(() => {
            setOpened(false);
        }, 2000);
    };

    /**
     * 
     *        {finance && (
                    <InputSelectCategory
                        title="Select a category:"
                        goals={type === 1 ? finance?.state.domesticGoals : finance?.state.tripGoals}
                        selectOption={expense.financesGoalId}
                        setSelectOptions={(e) => setExpense({ ...expense, financesGoalId: e })}
                    />
                )}
     */

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
                {finance && (
                    <InputSelectCategory
                        title="Select a category:"
                        goals={type === 1 ? finance?.state.domestic.goals : finance?.state.trip.goals}
                        selectOption={expense.financesGoalId}
                        setSelectOptions={(e) => setExpense({ ...expense, financesGoalId: e })}
                    />
                )}
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
