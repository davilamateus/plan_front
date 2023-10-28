import axios from 'axios';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import './style.scss';
import Api from '../../../../axios';

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
    setCountryCode?: Dispatch<SetStateAction<string>>;

}
const InputCity = ({ setCity, setState, setCountry, title, setCountryCode }: Types) => {


    const [query, setQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Location[]>([]);

    console.log(suggestions)


    function getCitiesAutocomplete() {
        setSuggestions([]);
        Api.get(`/cities/autocomplete?query=${query}`)
            .then((data: any) => {
                if (data.state == 429) {
                    getCitiesAutocomplete()
                } else {
                    return setSuggestions(data.data);
                }
            })

    }

    useEffect(() => {
        if (query !== '') {
            getCitiesAutocomplete()
        } else {
            setSuggestions([])
        }

    }, [query]);


    const handleInputChange = (text: string) => {
        setQuery(text);
    };

    const handleSelectLocation = (location: Location) => {
        setQuery(location.address.name + (location.address.state ? ' - ' + location.address.state : "") + ' - ' + location.address.country);
        setCity(location.address.name);
        setState(location.address.state);
        setCountry(location.address.country);
        if (setCountryCode) {
            setCountryCode(location.address.country_code);
        }
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
                        handleInputChange(query);
                    }}
                />
                {suggestions.length > 0 ?
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