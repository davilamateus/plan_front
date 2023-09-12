import React, { Dispatch, SetStateAction } from 'react'
import './style.scss';


interface type {
    title: string;
    color: string;
    setColor: Dispatch<SetStateAction<string>>;
}
const InputColor = ({ title, color, setColor }: type) => {

    const colors = [
        { id: 1, color: "#FFFD00" },
        { id: 2, color: "#FFDC6A" },
        { id: 3, color: "#FFC402" },
        { id: 4, color: "#FD9D24" },
        { id: 5, color: "#FF7600" },
        { id: 6, color: "#FC6464" },
        { id: 7, color: "#FC0101" },
        { id: 8, color: "#BE0178" },
        { id: 9, color: "#D071AD" },
        { id: 10, color: "#F7CFE8" },
        { id: 11, color: "#4B0277" },
        { id: 12, color: "#060F81" },
        { id: 13, color: "#025EB1" },
        { id: 14, color: "#666BA3" },
        { id: 15, color: "#049FC5" },
        { id: 16, color: "#70D4ED" },
        { id: 17, color: "#0D7608" },
        { id: 18, color: "#14AA00" },
        { id: 19, color: "#8AC40A" },
        { id: 20, color: "#A9F80B" },

    ]





    return (
        <div>
            <label>
                <h4>{title}</h4>
                <div className='input-color'>
                    {colors.map((item) => (
                        <div key={item.id}
                            onClick={() => { setColor(item.color) }}
                            style={{ borderColor: `${item.color}`, backgroundColor: `${item.color}` }}
                            className={color == item.color ? 'color-selected' : ''}
                        ></div>
                    ))}
                </div>
            </label>

        </div>)
}

export default InputColor