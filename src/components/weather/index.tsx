import { useContext, useEffect, useState } from "react";
import { getTimestampInfomartions } from "../../functions/date/getTimestampInfomartions";
import { useGetWeather } from "../../requests/useCityRequest";
import Skeleton from "react-loading-skeleton";
import "./style.scss";
import { OpenWeatherMapResponse } from "../../types/ICity";
import { UseTripContext } from "../../context/useTripContext";

const Weather = () => {
    const [weather, setWeather] = useState<OpenWeatherMapResponse>();
    const trip = useContext(UseTripContext);
    const days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
    const dateNow = new Date();
    const UseGetWeather = useGetWeather();

    useEffect(() => {
        if (trip?.state.tripCity) {
            UseGetWeather(trip?.state.tripCity, trip?.state.tripCountrySlug).then((data) => {
                setWeather(data);
            });
        }
    }, [trip]);

    return weather ? (
        <div className="weather-main box">
            <div className="weather-left">
                <div className="weather-date">
                    <span>{days[new Date(dateNow.getTime() + weather.timezone * 1000).getDay()]},</span>
                    <span>{new Date(dateNow.getTime() + weather.timezone * 1000).getDate()}</span>
                    <span>
                        {getTimestampInfomartions(new Date(dateNow.getTime() + weather.timezone * 1000), 0).nameOfMonthShort},
                    </span>
                    <span>
                        {new Date(dateNow.getTime() + weather.timezone * 1000).getHours()}:
                        {new Date(dateNow.getTime() + weather.timezone * 1000).getMinutes() < 10 ? "0" : ""}
                        {new Date(dateNow.getTime() + weather.timezone * 1000).getMinutes()}
                    </span>
                </div>
                <div className="weather-degre">
                    <h3 className="weather-degre-number">{(weather.main.temp - 273.15).toFixed(1)}</h3>
                    <span>°C</span>
                </div>
                <div className="weather-infor">
                    <span>{weather.weather[0].description}</span>
                    <span>Feels like {(weather.main.feels_like - 273.15).toFixed(1)}°C</span>
                </div>
            </div>
            <div className="weather-right">
                <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                    alt={weather.weather[0].main}
                />
            </div>
        </div>
    ) : (
        <div className="weather-main box">
            <div className="weather-left">
                <Skeleton style={{ width: "98px", height: "10px" }} />
                <Skeleton style={{ width: "98px", height: "28px" }} />
                <Skeleton style={{ width: "68px", height: "10px" }} />
                <Skeleton style={{ width: "98px", height: "10px" }} />
            </div>
            <div className="weather-right">
                <Skeleton style={{ width: "48px", height: "48px" }} />
            </div>
        </div>
    );
};

export default Weather;
