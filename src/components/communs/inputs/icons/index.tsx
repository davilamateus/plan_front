import "./style.scss";

interface type {
    title: string;
    icon: number;
    setIcon: (e: number) => void;
}
const InputIcons = ({ title, icon, setIcon }: type) => {
    const items = [];

    for (let i = 1; i <= 20; i++) {
        items.push(
            <div
                className="input-icon"
                key={i}
                onClick={() => {
                    setIcon(i);
                }}>
                <img
                    src={`./../../../../../icons/categories/${i}.svg`}
                    alt={`${i} icon`}
                    className={icon == i ? "icon-selected" : ""}
                />
            </div>
        );
    }

    return (
        <div>
            <label>
                <h4>{title}</h4>
                <div className="input-icon">{items}</div>
            </label>
        </div>
    );
};

export default InputIcons;
