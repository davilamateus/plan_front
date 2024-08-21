import "./style.scss";

interface type {
    title: string;
}
const titleOfSession = ({ title }: type) => {
    return <h4 className="title-of-session">{title}</h4>;
};

export default titleOfSession;
