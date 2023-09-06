import React, { useState } from 'react'
import InputSelect from '../../communs/inputs/select';
import './style.scss';
import ModalAddEntrances from './entrances';

const ModalAddFinances = () => {

    const [type, setType] = useState(0);
    const [title, setTitle] = useState('');
    const [value, setValue] = useState<string | undefined>();
    const [selectType, setSelectType] = useState<number | string>(0)
    const options = [
        { title: 'Select a option', value: 0 },
        { title: 'Entrance', value: 1 },
        { title: 'Domestic cost planning', value: 2 },
        { title: 'Domestic expenses', value: 3 },
        { title: 'Travel cost planning', value: 4 },
        { title: 'Travel expenses', value: 5 }
    ]

    console.log(title)

    return (
        <div className='modal-add-finances'>
            <h2>Add Finances</h2>
            <form >
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
                    />
                    : ''}
            </form>
        </div>
    )
}

export default ModalAddFinances