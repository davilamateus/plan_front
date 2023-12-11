import { useEffect, useState } from 'react';
import useGetWeather from '../../../../hooks/weather/useGetWeather';
import useGetAvatar from '../../../../store/hooks/avatar/useGetAvatar';
import { OpenWeatherMapResponse } from '../../../../types/weather/IWeather';
import GetTimestampInfomartions from '../../../../functions/date/GetTimestampInfomartions';
import Skeleton from 'react-loading-skeleton';
import './style.scss';

const Weather = () => {
    const UseGetWeather = useGetWeather();
    const UseGetAvatar = useGetAvatar();
    const [weather, setWeather] = useState<OpenWeatherMapResponse>();
    const days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
    const dateNow = new Date();

    useEffect(() => {
        if (UseGetAvatar.country_code) {
            UseGetWeather(UseGetAvatar.city_trip, UseGetAvatar.country_code)
                .then((data: OpenWeatherMapResponse) => {
                    setWeather(data);
                })
        }
    }, [UseGetAvatar]);



    return (
        weather?.timezone && dateNow ?
            <div className='weather-main box'>
                <div className="weather-left">
                    <div className="weather-date">
                        <span>{days[new Date(dateNow.getTime() + weather.timezone * 1000).getDay()]},</span>
                        <span>{new Date(dateNow.getTime() + weather.timezone * 1000).getDate()}</span>
                        <span>{GetTimestampInfomartions(new Date(dateNow.getTime() + weather.timezone * 1000), 0).nameOfMonthShort},</span>
                        <span>{new Date(dateNow.getTime() + weather.timezone * 1000).getHours()}:{new Date(dateNow.getTime() + weather.timezone * 1000).getMinutes()}</span>
                    </div>
                    <div className="weather-degre">
                        <h3 className='weather-degre-number'>{(weather.main.temp - 273.15).toFixed(1)}</h3>
                        <span>°C</span>
                    </div>
                    <div className="weather-infor">
                        <span>{(weather.weather[0].description)}</span>
                        <span>Feels like {(weather.main.feels_like - 273.15).toFixed(1)}°C</span>
                    </div>
                </div>
                <div className="weather-right">
                    <img height={'86px'} src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt={weather.weather[0].main} />
                </div>
            </div> :
            <div className='weather-main box'>
                <div className="weather-left">
                    <Skeleton style={{ width: '98px', height: '10px', }} />
                    <Skeleton style={{ width: '98px', height: '28px', }} />
                    <Skeleton style={{ width: '68px', height: '10px', }} />
                    <Skeleton style={{ width: '98px', height: '10px', }} />
                </div>
                <div className="weather-right">
                    <Skeleton style={{ width: '48px', height: '48px', }} />
                </div>
            </div>
    )
}

export default Weather;