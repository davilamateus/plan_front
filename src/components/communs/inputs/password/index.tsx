import { useState } from "react";
import "./style.scss";

interface type {
    title: string;
    setInput: (e: string) => void;
    input: string;
}

const InputPassword = ({ title, setInput, input }: type) => {
    const [showPassword, setShowPassword] = useState<string>("password");
    return (
        <label>
            <h4>{title}</h4>
            <div className="input-password">
                <input
                    type={showPassword}
                    placeholder="*******"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <img
                    src="./../../../../../icons/eye.svg"
                    alt="Show password"
                    onMouseOver={() => {
                        setShowPassword("text");
                    }}
                    onMouseOut={() => {
                        setShowPassword("password");
                    }}
                />
            </div>
        </label>
    );
};

export default InputPassword;
