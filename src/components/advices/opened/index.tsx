import React, { useEffect, useState } from 'react'
import { IAdvicesMain, IAdvicesMainImg } from '../../../types/advices/IAdvices'
import './style.scss';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


interface type {
    advice: IAdvicesMain
    adviceImg: IAdvicesMainImg | undefined
}

const AdviceOpened = ({ advice, adviceImg }: type) => {
    const defaultCenter = { lat: advice?.geocodes.main.latitude, lng: advice?.geocodes.main.longitude, zoom: 12, };

    const apiKey = 'AIzaSyCqXRKlaG6QuH0PLPcRymRVv7QhVt8C-jk';

    const [count, setCount] = useState(0);

    function changeSlide(value: number) {
        if (adviceImg) {

            if (count + value == adviceImg?.img.length) {
                setCount(0)
            } else if (count + value < 0) {
                setCount(adviceImg.img.length - 1)
            } else {
                setCount(count + value)
            }
        }
    }


    useEffect(() => {
        if (adviceImg) {

            const interval = setInterval(() => {
                if (count < adviceImg.img.length - 1) {
                    setCount(count + 1)
                } else setCount(0)

            }, 5000);
            return () => clearInterval(interval);
        }
    }, [count, adviceImg]);


    const [map, setMap] = React.useState(null)



    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: apiKey,
    })
    const onLoad = React.useCallback(function callback(map: any) {
        const bounds = new window.google.maps.LatLngBounds(defaultCenter);
        map.fitBounds(bounds);
        setMap(map)

    }, [])

    const onUnmount = React.useCallback(function callback(map: any) {
        setMap(null)
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {

        }, 5000);
        clearInterval(interval);
    }, [])



    return (
        <div className='advice-opened content'>
            <div className="advice-opened-slide">
                <div className="advice-opened-bigImg" style={{ backgroundImage: `url(${adviceImg?.img[count]?.prefix}original${adviceImg?.img[count]?.suffix})` }}>
                    <div className="advice-opened-back" onClick={() => changeSlide(-1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33.314" height="54.312" viewBox="0 0 33.314 54.312">
                            <g id="Grupo_3990" data-name="Grupo 3990" transform="translate(-1466.843 -985.843)">
                                <line id="Linha_16" data-name="Linha 16" x1="22" y2="22" transform="translate(1472.5 991.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="8" />
                                <line id="Linha_17" data-name="Linha 17" x2="22" y2="21" transform="translate(1472.5 1013.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="8" />
                            </g>
                        </svg>

                    </div>
                    <div className="advice-opened-next" onClick={() => changeSlide(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33.314" height="54.312" viewBox="0 0 33.314 54.312">
                            <g id="Grupo_3990" data-name="Grupo 3990" transform="translate(1500.157 1040.155) rotate(180)">
                                <line id="Linha_16" data-name="Linha 16" x1="22" y2="22" transform="translate(1472.5 991.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="8" />
                                <line id="Linha_17" data-name="Linha 17" x2="22" y2="21" transform="translate(1472.5 1013.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="8" />
                            </g>
                        </svg>

                    </div>
                </div>
                <div className="advice-opened-imgs">{
                    adviceImg?.img.map((img, index) => (
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
                    {isLoaded ?
                        <GoogleMap
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                            mapContainerStyle={{
                                height: "300px",
                                width: "auto",
                            }}
                            center={defaultCenter}
                        >
                            <Marker position={defaultCenter} />
                        </GoogleMap>
                        : ''
                    }
                </div>
                : ''}
        </div>
    )
}

export default AdviceOpened