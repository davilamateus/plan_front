import './style.scss';

interface type {
    title: string;
}
const TitleOfComponent = ({ title }: type) => {
    return (
        <h4 className='title-of-component'>{title}</h4>
    )
}

export default TitleOfComponent;