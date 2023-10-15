import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import InputMoney from '../../../communs/inputs/money';
import InputSimple from '../../../communs/inputs/simples';
import InputColor from '../../../communs/inputs/color';
import InputIcons from '../../../communs/inputs/icons';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import useAddGoals from '../../../../hooks/finances/goals/useAddGoals';

interface type {
    type: number;
    setOpened: Dispatch<SetStateAction<boolean>>;
}

const ModalAddGoals = ({ type, setOpened }: type) => {


    const [title, setTitle] = useState<string>('');
    const [value, setValue] = useState(0);
    const [color, setColor] = useState('');
    const [icon, setIcon] = useState<number>(0);
    const [btnLoading, setBtnLoading] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);

    const UseAddGoals = useAddGoals();

    useEffect(() => {
        if (title && value > 0 && color && icon !== 0) {
            setBtnStatus(true);
        } else {
            setBtnStatus(false);
        }
    }, [title, value, color, icon]);

    function addGoal() {
        setBtnLoading(true);
        UseAddGoals({ title, color, icon, value, type });
        setOpened(false);

    }


    return (
        <div className="modal-box-opened">
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
            <ButtonSimple
                title='Add'
                type='success'
                status={btnStatus}
                loading={btnLoading}
                action={() => { addGoal() }}
            />
        </div>
    )
}

export default ModalAddGoals;