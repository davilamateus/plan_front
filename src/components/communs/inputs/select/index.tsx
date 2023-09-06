import { Dispatch, SetStateAction } from "react";
import './style.scss';


interface type {
    title: string;
    options: { title: string, value: number | string }[];
    setSelectOptions: Dispatch<SetStateAction<number | string>>;
}

const InputSelect = ({ title, options, setSelectOptions }: type) => {
    return (
        <label className="select-input">
            <h4>{title}</h4>
            <div>
                <select onChange={(e) => { setSelectOptions(e.target.value) }}>
                    {options.map((item) => (
                        <option value={item.value}>{item.title}</option>
                    ))}
                </select>

            </div>
        </label>
    )

}

export default InputSelect;