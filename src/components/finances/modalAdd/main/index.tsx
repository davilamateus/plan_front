import React, { Dispatch, SetStateAction, useState } from 'react'
import InputSelect from '../../../communs/inputs/select';
import './style.scss';
import ModalAddEntrances from '../entraces';
import ButtonSimple from '../../../communs/buttons/simple/simple';
import useAddExpense from '../../../../hooks/finances/useAddExpense';
import ModalAddGoals from '../goals';
import useAddGoals from '../../../../hooks/finances/useAddGoals';

interface type {
    setOpened: Dispatch<SetStateAction<boolean>>;

}

const ModalAddFinances = ({ setOpened }: type) => {

    const [title, setTitle] = useState('');
    const [btnLoading, setBtnLoading] = useState(false);
    const [btnStatus, setBtnStatus] = useState(false);

    const [color, setColor] = useState<string>('#FD9D24');
    const [value, setValue] = useState<number>(0);
    const [icon, setIcon] = useState<number>(6);
    const [date, setDate] = useState<number>(new Date().getTime());
    const [selectType, setSelectType] = useState<number>(0)
    const options = [
        { title: 'Select a option', value: 0 },
        { title: 'Entrance', value: 1 },
        { title: 'Domestic cost planning', value: 2 },
        { title: 'Domestic expenses', value: 3 },
        { title: 'Travel cost planning', value: 4 },
        { title: 'Travel expenses', value: 5 }
    ]

    const UseAddFinancesExpense = useAddExpense();
    const UseAddFinancesGoals = useAddGoals();



    function addFinance() {
        setBtnLoading(true);
        if (selectType == 2 || selectType == 4) {
            const goals = {
                type: selectType,
                title,
                value,
                icon,
                color,
                id: null,


            }
            UseAddFinancesGoals(goals).then(() => {
            })

        } else {
            const finances = {
                id: null,
                type: selectType,
                title,
                value,
                date,

            }
            UseAddFinancesExpense(finances).then(() => {
            })
        }
        setColor('');
        setIcon(0)
        setTitle('')
        setValue(0)
        setDate(new Date().getTime());
        setBtnLoading(false)
    }


    return (
        <div className='modal-add-finances'>
            <h2>Add Finances</h2>
            <form onSubmit={(e) => { e.preventDefault() }} >
                <InputSelect
                    title='Type:'
                    options={options}
                    setSelectOptions={setSelectType}
                />
                {selectType == 1 ?
                    <ModalAddEntrances
                        setTitle={setTitle}
                        title={title}
                        setValue={setValue}
                        value={value}
                        date={date}
                        setDate={setDate}
                        setBtnStatus={setBtnStatus}
                    />
                    : ''}
                {selectType == 2 || selectType == 4 ?
                    <ModalAddGoals
                        setTitle={setTitle}
                        title={title}
                        setValue={setValue}
                        value={value}
                        color={color}
                        setColor={setColor}
                        setBtnStatus={setBtnStatus}
                        setIcon={setIcon}
                        icon={icon}
                    />
                    : ''}
                {selectType !== 0 ?
                    <ButtonSimple
                        title='Add'
                        type='success'
                        status={btnStatus}
                        loading={btnLoading}
                        action={() => { addFinance() }}
                    />
                    : ''}
            </form>
        </div>
    )
}

export default ModalAddFinances;