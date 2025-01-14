import TitleSession from "../communs/titleSession";
import "./style.scss";

const DashboardAds = () => {
	return (
		<div className="ads">
			<TitleSession title="Promoções" link="/" />
			<div
				style={{ backgroundImage: "url(/img/promo.png)" }}
				className="ads-img"
			></div>
		</div>
	);
};

export default DashboardAds;
