import React, { Dispatch, SetStateAction, useEffect } from 'react'
import InputMoney from '../../../communs/inputs/money';
import InputSimple from '../../../communs/inputs/simples';
import InputColor from '../../../communs/inputs/color';
import InputIcons from '../../../communs/inputs/icons';

interface type {
    setColor: Dispatch<SetStateAction<string>>;
    setIcon: Dispatch<SetStateAction<number>>;
    setTitle: Dispatch<SetStateAction<string>>;
    setBtnStatus: Dispatch<SetStateAction<boolean>>;
    setValue: Dispatch<SetStateAction<number>>;
    color: string;
    icon: number;
    title: string;
    value: number;
}

const ModalAddCosts = ({ setBtnStatus, setTitle, title, setValue, value, color, setColor, icon, setIcon }: type) => {


    useEffect(() => {
        if (title && color && value && icon) {
            setBtnStatus(true)
        } else {
            setBtnStatus(false)
        }
    }, [title, color, value, icon])
    return (
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
        </>
    )
}

export default ModalAddCosts;