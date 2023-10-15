import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import InputMoney from '../../../communs/inputs/money';
import InputSimple from '../../../communs/inputs/simples';
import InputColor from '../../../communs/inputs/color';
import InputIcons from '../../../communs/inputs/icons';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import { IFinancesGoalsList } from '../../../../types/finances/IGoals';
import TimestampToDate from '../../../../functions/date/timestampToDate';
import './style.scss';
import BoxFullpage from '../../../communs/boxFullpage';
import ModalEditExpenses from '../../modalEdit/expenses';
import useEditGoal from '../../../../hooks/finances/goals/useEditGoal';
import useEditExpense from '../../../../hooks/finances/expenses/useEditExpense';
import useDeleteGoal from '../../../../hooks/finances/goals/useDeleteGoals';
import FormartMoney from '../../../../functions/formartMoney/formartMoney';

interface type {
    setOpened: Dispatch<SetStateAction<boolean>>;
    goal: IFinancesGoalsList;
    fromDate: number;
    toDate: number;
}

const ModalEditGoals = ({ goal, setOpened, fromDate, toDate }: type) => {

    const [title, setTitle] = useState<string>(goal.title);
    const [value, setValue] = useState(goal.value);
    const [color, setColor] = useState(goal.color);
    const [icon, setIcon] = useState<number>(goal.icon);
    const [index, setIndex] = useState<number>(0);
    const [itemOpened, setItemOpened] = useState(false)

    const [btnLoading, setBtnLoading] = useState(false);
    const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);

    const UseEditGoal = useEditGoal();
    const UseDeleteGoals = useDeleteGoal();
    const UseEditExpense = useEditExpense();


    useEffect(() => {
        if (title && value > 0 && color && icon !== 0) {
            setBtnStatus(true);
        } else {
            setBtnStatus(false);
        }
    }, [title, value, color, icon]);



    function editGoal() {
        setBtnLoading(true);
        UseEditGoal({ id: goal.id, type: goal.type, title, value, icon, color, itens: goal.itens, valueItens: goal.valueItens }, fromDate, toDate);
        setOpened(false)
    }
    function deleteGoals() {
        setBtnLoadingDelete(true);
        if (goal.itens.length > 0) {
            goal.itens.map((item) => {
                UseEditExpense({
                    title: item.title,
                    financesGoalId: undefined,
                    value: item.value,
                    id: item.id,
                    date: item.date,
                    type: item.type
                }
                    , fromDate, toDate, false)
            })
        }
        UseDeleteGoals(goal, fromDate, toDate, true);
        setBtnLoadingDelete(false);
        setOpened(false)

    }



    return (
        <>
            <div className="modal-box-opened">
                {goal.id !== 0 ? // Diferent of Other category

                    <>
                        <InputSimple
                            title='Title:'
                            setInput={setTitle}
                            input={title}
                            placeholder="Type a title..."
                        />
                        <InputColor
                            title='Color:'
                            color={color}
                            setColor={setColor}
                        />
                        <InputIcons
                            title='Icon:'
                            icon={icon}
                            setIcon={setIcon}
                        />
                        <InputMoney
                            title='Valor:'
                            setInput={setValue}
                            input={value}
                        />
                        {goal.itens.length > 0 ?
                            <>
                                <div className="finances-goals-edit-actives">
                                    <h4>Itens:</h4>
                                    {goal.itens.map((item, index) => (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                setItemOpened(true);
                                                setIndex(index);
                                            }}
                                        >
                                            <div
                                                className='finances-goals-edit-actives-item'
                                                onClick={() => {
                                                    setOpened(true)
                                                    setIndex(index)
                                                }}
                                                key={index}
                                            >
                                                <div className='finances-goals-edit-actives-text' >
                                                    <div>
                                                        <div style={{ backgroundColor: color }} className='circle'></div>
                                                        <div className="finances-goals-edit-actives-title">
                                                            {item.title}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='finances-goals-edit-actives-date'>
                                                    {TimestampToDate(item.date)}
                                                </div>
                                                <div className='finances-goals-edit-actives-value'>{FormartMoney(item.value)}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>

                            : ''}

                        <ButtonSimple
                            title='Edit'
                            type='success'
                            status={btnStatus}
                            loading={btnLoading}
                            action={() => { editGoal() }}
                        />
                        <ButtonSimple
                            title='Delete'
                            type='delete'
                            status={btnStatus}
                            loading={btnLoading}
                            action={() => { deleteGoals() }}
                        />

                    </>
                    :
                    <>
                        {goal.itens.length > 0 ?
                            <>
                                <h4>Itens:</h4>
                                <div className="finances-goals-edit-actives">
                                    {goal.itens.map((item, index) => (
                                        <div
                                            key={item.id}
                                            onClick={() => {
                                                setItemOpened(true);
                                                setIndex(index);
                                            }}
                                        >
                                            <div
                                                className='finances-goals-edit-actives-item'
                                                onClick={() => {
                                                    setOpened(true)
                                                    setIndex(index)
                                                }}
                                                key={index}
                                            >
                                                <div className='finances-goals-edit-actives-text' >
                                                    <div>
                                                        <div style={{ backgroundColor: color }} className='circle'></div>
                                                        <div className="finances-goals-edit-actives-title">
                                                            {item.title}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='finances-goals-edit-actives-date'>
                                                    {TimestampToDate(item.date)}
                                                </div>
                                                <div className='finances-goals-edit-actives-value'>{FormartMoney(item.value)}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>

                            : ''}
                    </>
                }

            </div>
            {itemOpened ?
                <BoxFullpage
                    title='Edit Cost'
                    content={
                        <ModalEditExpenses
                            setOpened={setItemOpened}
                            expense={goal.itens[index]}
                        />
                    }
                    setOpened={setItemOpened}
                />
                : ''}
        </>
    )
}

export default ModalEditGoals;