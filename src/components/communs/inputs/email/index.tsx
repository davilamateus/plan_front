import { Dispatch, SetStateAction } from "react";


interface type {
    title: string;
    setInput: Dispatch<SetStateAction<string>>;
    input: string;
    placeholder: string;
}

const InputEmail = ({ title, setInput, input, placeholder }: type) => {
    return (
        <label>
            <h4>{title}</h4>
            <div>
                <input
                    type="email"
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </label>

    )
}

export default InputEmail