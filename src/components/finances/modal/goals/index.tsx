import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { IFinancesExpense, IFinancesGoal } from "../../../../types/IFinances";
import { UseFinanceContext } from "../../../../context/useFinanceContext";
import InputMoney from "../../../communs/inputs/money";
import InputSimple from "../../../communs/inputs/simples";
import InputColor from "../../../communs/inputs/color";
import InputIcons from "../../../communs/inputs/icons";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import ModalExpenses from "../expenses";
import GoalsItens from "./itens";
import "./../style.scss";

interface type {
    setOpened: Dispatch<SetStateAction<boolean>>;
    goalEdit?: IFinancesGoal;
    addType?: number;
}

const ModalGoals = ({ setOpened, goalEdit, addType }: type) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [itemOpened, setItemOpened] = useState<{ opened: boolean; item: IFinancesExpense | undefined }>({
        opened: false,
        item: undefined
    });
    const [expenses, setExpenses] = useState<IFinancesExpense[]>([]);
    const [goal, setGoal] = useState<IFinancesGoal>(
        goalEdit || {
            title: "",
            value: 0,
            id: 0,
            color: "",
            icon: 0,
            type: addType || 0
        }
    );

    const finance = useContext(UseFinanceContext);

    const handleSubmitGoal = () => {
        setBtnLoading(true);
        if (goalEdit) {
            finance?.editGoal(goal);
        } else {
            finance?.addGoal(goal);
        }
        setTimeout(() => {
            setOpened(false);
        }, 2000);
    };

    const handleDelete = () => {
        setBtnLoadingDelete(true);
        finance?.deleteGoal(goal);
        setTimeout(() => {
            setOpened(false);
        }, 2000);
    };

    useEffect(() => {
        if (finance) {
            if (goal.type == 1) {
                setExpenses(finance?.state.domestic.expenses.filter((expense) => expense.financesGoalId === goal.id) || []);
            } else {
                setExpenses(finance?.state.trip.expenses.filter((expense) => expense.financesGoalId === goal.id) || []);
            }
        }
    }, [finance]);

    return (
        <div className="modal-box-opened modal">
            {itemOpened.item !== undefined && itemOpened.opened !== false ? (
                <ModalExpenses
                    type={itemOpened.item.type}
                    setOpened={(e) => {
                        setItemOpened({ ...itemOpened, opened: e });
                    }}
                    expenseEdit={itemOpened.item}
                />
            ) : (
                <>
                    <InputSimple
                        title="Title:"
                        setInput={(e) => setGoal({ ...goal, title: e })}
                        input={goal.title}
                        placeholder="Type a title..."
                    />
                    <InputColor
                        title="Color:"
                        color={goal.color}
                        setColor={(e) => setGoal({ ...goal, color: e })}
                    />
                    <InputIcons
                        title="Icon:"
                        icon={goal.icon}
                        setIcon={(e) => setGoal({ ...goal, icon: e })}
                    />
                    <InputMoney
                        title="Valor:"
                        setInput={(e) => setGoal({ ...goal, value: e })}
                        input={goal.value}
                    />

                    <ButtonSimple
                        title={goalEdit ? "Save" : "Add"}
                        type="success"
                        status={goal.color !== "" && goal.title !== "" && goal.value > 0}
                        loading={btnLoading}
                        action={() => {
                            handleSubmitGoal();
                        }}
                    />

                    {goalEdit && expenses.length > 0 && (
                        <GoalsItens
                            setItemOpened={setItemOpened}
                            itens={expenses}
                        />
                    )}
                    {goalEdit && (
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
                </>
            )}
        </div>
    );
};

export default ModalGoals;
