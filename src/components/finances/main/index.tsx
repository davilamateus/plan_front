import React, { useState } from 'react'
import ButtonAdd from '../../communs/buttons/add'
import BoxFullpage from '../../communs/boxFullpage';
import ModalAddFinances from '../modalAdd';

const MainFinances = () => {
    const [modalAdd, setModalAdd] = useState(false);
    return (
        <div>
            <ButtonAdd setModal={setModalAdd} />
            <div>
                {modalAdd ?
                    <BoxFullpage setOpened={setModalAdd} content={<ModalAddFinances />} />
                    : ''}
            </div>
        </div>
    )
}

export default MainFinances