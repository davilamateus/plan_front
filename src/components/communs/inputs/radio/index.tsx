import "./stype.scss";

interface type {
    select: boolean;
    setSelect: (e: boolean) => void;
}
const InputRadio = ({ select, setSelect }: type) => {
    return (
        <div
            className={`radio-box ${select === true ? "select-radio" : ""}`}
            onClick={() => (select ? setSelect(false) : setSelect(true))}>
            <div className={`radio-cicle`}></div>
        </div>
    );
};

export default InputRadio;
