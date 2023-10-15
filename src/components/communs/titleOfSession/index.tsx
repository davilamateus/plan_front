import './style.scss';

interface type {
    title: string;
}
const TitleOfSession = ({ title }: type) => {
    return (
        <h4 className='title-of-session'>{title}</h4>
    )
}

export default TitleOfSession;