import { BASE_URL } from "../../../axios";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UseUserContext } from "../../../context/useUserContext";
import { UseTripContext } from "../../../context/useTripContext";
import ButtonOptions from "../../communs/buttons/options";
import Skeleton from "react-loading-skeleton";
import "./style.scss";

const Avatar = () => {
	const UserContext = useContext(UseUserContext);
	const trip = useContext(UseTripContext);
	const UseNavigate = useNavigate();

	const handleClick = () => {
		UseNavigate("/minhaconta");
	};

	return (
		<>
			{UserContext && trip ? (
				<div className="avatar-box">
					<div className="avatar-text">
						<span className="avatar-name">{UserContext.state.name}</span>
						<span className="avatar-country">
							{" "}
							{trip.state.tripCity} - {trip.state.tripCountry}
						</span>
					</div>
					<div className="avatar-photo-box" onClick={() => handleClick()}>
						<div
							style={{
								backgroundImage: `url(${BASE_URL}imagens/user/${
									UserContext.state.photo !== null
										? UserContext.state.photo
										: "default.jpeg    "
								}`,
							}}
							className="avatar-photo"
						></div>
						<ButtonOptions />
					</div>
				</div>
			) : (
				<div className="avatar-box">
					<div className="avatar-text">
						<Skeleton
							style={{
								width: "120px",
								height: "18px",
								margin: "10px -0px 00px 0px",
							}}
						/>
						<Skeleton style={{ width: "100px", height: "14px" }} />
					</div>
					<div className="avatar-photo-box">
						<Skeleton
							style={{
								borderRadius: "72px",
								width: "48px",
								height: "48px",
								margin: "10px -0px 00px 0px",
							}}
						/>
						<ButtonOptions />
					</div>
				</div>
			)}
		</>
	);
};

export default Avatar;
