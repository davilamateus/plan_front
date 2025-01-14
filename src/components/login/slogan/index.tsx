import Logo from "../../communs/logoBottom";
import "./style.scss";

const slogan = () => {
	return (
		<div className="slogan">
			<div className="slogan-content">
				<div className="slogan-text">
					<h1>
						Você pode
						<br />
						<span className="slogan-text-green">realizer</span> seus
						<br />
						sonhos.
						<br />
					</h1>
					<span className="slogan-text-handwriting">
						e nos podemos de ajudar!
					</span>
				</div>
				<div className="slogan-img">
					<img src="./../../../../img/person.png" alt="" />
				</div>
			</div>
			<Logo />
		</div>
	);
};

export default slogan;
