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
                <input
                    type="text"
                    placeholder={inicialValue || "Type a city..."}
                    value={query}
                    onChange={(e) => {
                        setSelected(false);
                        setQuery(e.target.value);
                    }}
                    onKeyUp={(e) => {
                        handleInputChange(query);
                    }}
                />
                {suggestions.length > 0 && !selected ? (
                    <ul className="city-result">
                        {suggestions.map((location, index) => (
                            <li
                                key={index}
                                onClick={() => handleSelectLocation(location)}>
                                {location.address.name}
                                {location.address.state ? " - " + location.address.state + " " : " "}- {location.address.country}
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
