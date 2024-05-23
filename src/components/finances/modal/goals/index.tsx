import { Dispatch, SetStateAction, useState } from "react";
import { IFinancesGoal } from "../../../../types/finances/IGoals";
import InputMoney from "../../../communs/inputs/money";
import InputSimple from "../../../communs/inputs/simples";
import InputColor from "../../../communs/inputs/color";
import InputIcons from "../../../communs/inputs/icons";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import useAddGoals from "../../../../hooks/finances/goals/useAddGoals";
import useEditGoal from "../../../../hooks/finances/goals/useEditGoal";
import useDeleteGoal from "../../../../hooks/finances/goals/useDeleteGoals";
import "./../style.scss";
import ModalExpenses from "../expenses";
import { IFinancesExpense } from "../../../../types/finances/IExpense";
import GoalsItens from "./itens";

interface type {
    type: number;
    setOpened: Dispatch<SetStateAction<boolean>>;
    goalEdit?: IFinancesGoal;
}

const ModalGoals = ({ type, setOpened, goalEdit }: type) => {
    const [btnLoading, setBtnLoading] = useState(false);
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [itemOpened, setItemOpened] = useState<{ opened: boolean; item: IFinancesExpense | undefined }>({ opened: false, item: undefined });
    const [goal, setGoal] = useState<IFinancesGoal>(
        goalEdit || {
            title: "",
            value: 0,
            color: "",
            icon: 0,
            valueItens: 0,
            itens: [],
            type
        }
    );

    const UseAddGoals = useAddGoals();
    const UseEditGoals = useEditGoal();
    const UseDeleteGoals = useDeleteGoal();

    const handleSubmitGoal = () => {
        setBtnLoading(true);
        if (goalEdit) {
            UseEditGoals(goal).then(() => {
                setOpened(false);
            });
        } else {
            UseAddGoals(goal).then(() => {
                setOpened(false);
            });
        }
    };

    const handleDelete = () => {
        setBtnLoadingDelete(true);
        if (goalEdit?.id) UseDeleteGoals(goalEdit).then(() => setOpened(false));
    };

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
                    {goalEdit && goalEdit.itens.length > 0 && (
                        <GoalsItens
                            setItemOpened={setItemOpened}
                            itens={goal.itens}
                        />
                    )}
                    <ButtonSimple
                        title={goalEdit ? "Save" : "Add"}
                        type="success"
                        status={goal.color !== "" && goal.title !== "" && goal.value > 0}
                        loading={btnLoading}
                        action={() => {
                            handleSubmitGoal();
                        }}
                    />

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
