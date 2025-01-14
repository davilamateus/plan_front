interface type {
	title: string;
	setInput: (e: string) => void;
	input: string;
	placeholder: string;
}

const InputCode = ({ title, setInput, input, placeholder }: type) => {
	return (
		<label>
			<h4>{title}</h4>
			<div>
				<input
					type="text"
					placeholder={placeholder}
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</div>
		</label>
	);
};

export default InputCode;
