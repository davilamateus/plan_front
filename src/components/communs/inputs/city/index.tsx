import { useEffect, useState } from "react";
import { useGetCityAutocomplete } from "../../../../requests/useCityRequest";
import { ILocation } from "../../../../types/ICity";
import "./style.scss";

interface Types {
	title: string;
	inicialValue?: string;
	result: (e: ILocation) => void;
}
const InputCity = ({ title, inicialValue, result }: Types) => {
	const [query, setQuery] = useState<string>("");
	const [suggestions, setSuggestions] = useState<ILocation[]>([]);
	const [selected, setSelected] = useState(false);

	const UseGetTripAutocomplete = useGetCityAutocomplete();

	const handleSubmit = () => {
		UseGetTripAutocomplete(query).then((data: any) => {
			if (!data) {
				return;
			}
			if (data.status === 200) {
				setSuggestions(data.data);
			} else {
				handleSubmit();
			}
		});
	};

	useEffect(() => {
		if (query.length > 3) handleSubmit();
	}, [query]);

	const handleInputChange = (text: string) => {
		setQuery(text);
	};

	const handleSelectLocation = (location: ILocation) => {
		setSelected(true);
		setQuery(
			location.address.name +
				(location.address.state ? " - " + location.address.state : "") +
				" - " +
				location.address.country
		);
		result(location);
		setSuggestions([]);
	};

	return (
		<div>
			<label>
				<h4>{title}</h4>
				<div className="city-input">
					<input
						type="text"
						placeholder={inicialValue || "Pesquise uma cidade..."}
						value={query}
						onChange={(e) => {
							setSelected(false);
							setQuery(e.target.value);
						}}
						onKeyUp={(e) => {
							handleInputChange(query);
						}}
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="15.09"
						height="15.09"
						viewBox="0 0 15.09 15.09"
					>
						<path
							id="search-svgrepo-com"
							d="M12,11.031a6.176,6.176,0,1,0-.97.97l3.888,3.888a.686.686,0,1,0,.971-.971Zm-4.826.955a4.811,4.811,0,1,1,4.811-4.811A4.811,4.811,0,0,1,7.176,11.987Z"
							transform="translate(-1 -1)"
							fill="#c4c4c4"
							fillRule="evenodd"
						/>
					</svg>
				</div>
				{suggestions.length > 0 && !selected ? (
					<ul className="city-result">
						{suggestions.map((location, index) => (
							<li key={index} onClick={() => handleSelectLocation(location)}>
								{location.address.name}
								{location.address.state
									? " - " + location.address.state + " "
									: " "}
								- {location.address.country}
							</li>
						))}
					</ul>
				) : (
					""
				)}
			</label>
		</div>
	);
};

export default InputCity;
