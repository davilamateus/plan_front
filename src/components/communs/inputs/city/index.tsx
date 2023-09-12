import axios from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './style.scss';

interface Location {
    place_id: string;
    display_name: string;
    lat: string;
    lon: string;
    address: any
}

interface Types {
    title: string;
    setCity: Dispatch<SetStateAction<string>>;
    setState: Dispatch<SetStateAction<string>>;
    setCountry: Dispatch<SetStateAction<string>>;

}
const InputCity = ({ setCity, setState, setCountry, title }: Types) => {


    const [sugestionStatus, setSuggestionsStatus] = useState(false);
    const [query, setQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Location[]>([]);
    const apiKey = 'pk.7f55c939bc5e3986aa3966cc209bcd60';


    useEffect(() => {
        const fetchSuggestions = async () => {
            if (query.trim() === '') {
                setSuggestions([]);
                return;
            }

            try {
                const response = await axios.get<Location[]>(
                    `https://api.locationiq.com/v1/autocomplete?key=${apiKey}&q=${query}&format=json&tag=place:city&en`,
                    {
                        headers: {
                            'accept-language': 'en',
                        }
                    }
                );

                setSuggestions(response.data);
            } catch (error) {
                console.error('Erro ao buscar sugestões:', error);
                setSuggestions([]);
            }
        };

        fetchSuggestions();
    }, [query, apiKey]);

    const handleInputChange = (text: string) => {
        setQuery(text);
    };

    const handleSelectLocation = (location: Location) => {
        setSuggestionsStatus(false)
        setQuery(location.address.name + (location.address.state ? ' - ' + location.address.state : "") + ' - ' + location.address.country);
        setCity(location.address.name);
        setState(location.address.state);
        setCountry(location.address.country);
        setSuggestions([]);
    };

    return (
        <div>
            <label >
                <h4>{title}</h4>
                <input
                    type="text"
                    placeholder="Type a city..."
                    value={query}
                    onChange={(e) => { setQuery(e.target.value) }}
                    onKeyUp={(e) => {
                        if (query !== '') {
                            setSuggestionsStatus(true);
                        }
                        handleInputChange(query);
                    }}
                />
                {sugestionStatus ?
                    <ul className='city-result'>
                        {suggestions.map((location) => (
                            <li key={location.place_id} onClick={() => handleSelectLocation(location)}>
                                {location.address.name}
                                {location.address.state ? ' - ' + location.address.state + ' ' : ' '}
                                - {location.address.country}
                            </li>
                        ))}
                    </ul>
                    : ''}
            </label>

        </div>
    );

}

export default InputCity;