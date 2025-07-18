interface type {
    title: string;
    setInput: (e: string) => void;
    input: string;
    placeholder: string;
}

const InputEmail = ({ title, setInput, input, placeholder }: type) => {
    return (
        <label>
            <h5>{title}</h5>
            <div>
                <input
                    type="email"
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </label>
    );
};

export default InputEmail;
