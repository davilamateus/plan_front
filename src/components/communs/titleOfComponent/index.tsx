import "./style.scss";

interface type {
	title: string;
}
const TitleOfComponent = ({ title }: type) => {
	return <h5 className="title-of-component">{title}:</h5>;
};

export default TitleOfComponent;
