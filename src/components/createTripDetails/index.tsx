import { useState } from "react";
import { useNavigate } from "react-router";
import { useCreateTripDetails } from "../../requests/trip/useCreateTripDetails";
import { getCurrency } from "../../functions/cities/getCurrency";
import { ITrip } from "../../types/ITrip";
import PhotoUpdate from "../communs/inputs/photoUpdate";
import InputCity from "../communs/inputs/city";
import InputDate from "../communs/inputs/date";
import ButtonSimple from "../communs/buttons/simple/simple";
import LogoBottom from "../communs/logoBottom";
import "./style.scss";

const CreateTripDetailsComponent = () => {
	const [trip, setTrip] = useState<ITrip>({
		currentCity: "",
		currentState: "",
		currentCountry: "",
		currentCountrySlug: "",
		currentCurrency: "",

		tripCity: "",
		tripState: "",
		tripCountry: "",
		tripCountrySlug: "",
		tripCurrency: "",
		tripLon: "",
		tripLat: "",
		when: new Date().getTime() + 31536000000,
		loaded: false,
	});
	const [btnLoading, setBtnLoading] = useState(false);

	const UseCreateTripDetails = useCreateTripDetails();
	const UserNavigate = useNavigate();

	const handleSubmit = () => {
		setBtnLoading(true);
		UseCreateTripDetails(trip).then((data: any) => {
			if (data.status == 200) {
				window.location.href = "/";
			} else if (data.status == 201) {
				window.location.href = "/";
			} else {
				UserNavigate("/login");
			}
		});
	};

	return (
		<div className="create-user-details">
			<div className="create-user-details-main">
				<img className="person" src="./../../../img/person2.png" alt="" />
				<div className="box create-user-details-content">
					<h3>Quase la!</h3>
					<p>
						Agora precisamos de alguns informações sobre a sua viagem para que
						possamos deixar o seu Dashboard mais completo.
					</p>
					<form
						onSubmit={(e) => {
							e.preventDefault();
						}}
					>
						<PhotoUpdate />
						<InputCity
							title="Qual a sua cidade atual?"
							result={(e) => {
								setTrip({
									...trip,
									currentCity: e.address.name,
									currentState: e.address.state,
									currentCountry: e.address.country,
									currentCountrySlug: e.address.country_code,
									currentCurrency: getCurrency(e.address.country),
								});
							}}
						/>
						<InputCity
							title="Qual cidade você planeja ir?"
							result={(e) => {
								setTrip({
									...trip,
									tripCity: e.address.name,
									tripState: e.address.state,
									tripCountry: e.address.country,
									tripCountrySlug: e.address.country_code,
									tripCurrency: getCurrency(e.address.country),
									tripLat: e.lat,
									tripLon: e.lon,
								});
							}}
						/>
						<InputDate
							date={trip.when}
							setDate={(e) => setTrip({ ...trip, when: e })}
							title="Quando pretende viajar?"
						/>
						<ButtonSimple
							title="Finalizar"
							status={
								trip.currentCity !== "" && trip.tripCity !== "" && trip.when > 0
							}
							loading={btnLoading}
							action={handleSubmit}
							type="success"
						/>
					</form>
				</div>
			</div>
			<footer>
				<LogoBottom />
			</footer>
		</div>
	);
};

export default CreateTripDetailsComponent;
