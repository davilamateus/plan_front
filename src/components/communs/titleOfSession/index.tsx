import './style.scss';

interface type {
    title: string;
}
const titleOfSession = ({ title }: type) => {
    return (
        <h2 className='title-of-session'>{title}</h2>
    )
}

export default titleOfSession;