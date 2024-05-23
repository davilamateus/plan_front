import React, { useEffect, useState } from 'react'
import { IAdvicesMain } from '../../../types/advices/IAdvices'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './style.scss';


interface type {
    advice: IAdvicesMain
}

const AdviceOpened = ({ advice }: type) => {
    const defaultCenter = { lat: advice?.geocodes.main.latitude, lng: advice?.geocodes.main.longitude, zoom: 12, };

    const apiKey = 'AIzaSyCqXRKlaG6QuH0PLPcRymRVv7QhVt8C-jk';

    const [count, setCount] = useState(0);

    const handleChangeSlide = (value: number) => {

        if (count + value == advice.images.length) {
            setCount(0)
        } else if (count + value < 0) {
            setCount(advice.images.length - 1)
        } else {
            setCount(count + value)
        }

    }


    useEffect(() => {

        const interval = setInterval(() => {
            if (count < advice.images.length - 1) {
                setCount(count + 1)
            } else setCount(0)

        }, 5000);
        return () => clearInterval(interval);

    }, [count, advice]);




    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    })
    const onLoad = React.useCallback(function callback(map: any) {
        const bounds = new window.google.maps.LatLngBounds(defaultCenter);
        map.fitBounds(bounds);

    }, [])


    useEffect(() => {
        const interval = setInterval(() => {

        }, 5000);
        clearInterval(interval);
    }, [])



    return (
        <div className='advice-opened content'>
            <div className="advice-opened-slide">
                <div className="advice-opened-bigImg" style={{ backgroundImage: `url(${advice.images[count]?.prefix}original${advice.images[count]?.suffix})` }}>
                    <div className="advice-opened-back" onClick={() => handleChangeSlide(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33.314" height="54.312" viewBox="0 0 33.314 54.312">
                            <g id="Grupo_3990" data-name="Grupo 3990" transform="translate(-1466.843 -985.843)">
                                <line id="Linha_16" data-name="Linha 16" x1="22" y2="22" transform="translate(1472.5 991.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="8" />
                                <line id="Linha_17" data-name="Linha 17" x2="22" y2="21" transform="translate(1472.5 1013.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="8" />
                            </g>
                        </svg>

                    </div>
                    <div className="advice-opened-next" onClick={() => handleChangeSlide(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33.314" height="54.312" viewBox="0 0 33.314 54.312">
                            <g id="Grupo_3990" data-name="Grupo 3990" transform="translate(1500.157 1040.155) rotate(180)">
                                <line id="Linha_16" data-name="Linha 16" x1="22" y2="22" transform="translate(1472.5 991.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="8" />
                                <line id="Linha_17" data-name="Linha 17" x2="22" y2="21" transform="translate(1472.5 1013.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="8" />
                            </g>
                        </svg>

                    </div>
                </div>
                <div className="advice-opened-imgs">{
                    advice.images.map((img, index) => (
                        <div
                            className="advice-opened-img"
                            style={{ backgroundImage: `url(${img?.prefix}original${img?.suffix})` }}
                            onClick={() => { setCount(index) }}
                        ></div>
                    ))
                }</div>
            </div>
            <div className="advice-opened-text">
                <div className="advice-opened-title">
                    {advice?.name}
                    <div className="advice-opened-categorie">
                        <div className="advice-opened-categorie-icon"> <div style={{ backgroundImage: `url(${advice?.categories[0]?.icon.prefix + '64' + advice?.categories[0]?.icon.suffix})` }}></div></div>
                        <span>{advice?.categories[0]?.plural_name}</span>
                    </div>
                </div>
                <div className="advice-opened-address">
                    <h4>Adress:</h4>
                    {advice?.location?.formatted_address}
                </div>
            </div>
            {advice ?
                <div style={{ height: '100vh', width: '100%' }}>
                    {isLoaded &&
                        <GoogleMap
                            onLoad={onLoad}
                            mapContainerStyle={{
                                height: "300px",
                                width: "auto",
                            }}
                            center={defaultCenter}
                            zoom={14}
                        >
                            <Marker position={defaultCenter} />
                        </GoogleMap>
                    }
                </div>
                : ''}
        </div>
    )
}

export default AdviceOpened;