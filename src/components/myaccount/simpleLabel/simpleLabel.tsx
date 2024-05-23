
interface type {
    title: string;
    content: string;
}

const SimpleLabel = ({ title, content }: type) => {
    return (
        <label>
            <h5>{title}</h5>
            <span>{content}</span>

        </label>
    )
}

export default SimpleLabel;