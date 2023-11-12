import React, { useEffect, useState } from 'react'
import useGetAvatar from '../../../store/hooks/avatar/useGetAvatar';
import Api from '../../../axios';
import { IAdvicesMain, IAdvicesMainImg } from '../../../types/advices/IAdvices';

import './style.scss';
import BoxFullpage from '../../communs/boxFullpage';
import AdviceOpened from '../opened';
import TitleOfSession from '../../communs/titleOfSession';
import Skeleton from 'react-loading-skeleton';

const AdvicesPrincipal = () => {


    const [advices, setAdvices] = useState<IAdvicesMain[]>([]);
    const [advicesImg, setAdvicesImg] = useState<IAdvicesMainImg[]>([]);
    const [count, setCount] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [slideStoped, setSlideStoped] = useState(false)
    const [opened, setOpened] = useState(false)

    const UseGetAvatar = useGetAvatar();

    function fetchAdvices() {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        Api.get(`/cities/advices?local=${UseGetAvatar.country_lat},${UseGetAvatar.country_lon}&category=10000`, config)
            .then((data: any) => {
                setAdvices((data.data));

            })
            .catch(error => {
                console.error('erro:', error);
            });
    }

    function fetchAdvicesImgs(id: string) {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        Api.get(`/cities/advices/img?id=${id}`, config)
            .then((data: any) => {
                setAdvicesImg((advicesImg: any) => [...advicesImg].concat({ id: id, img: data.data }));
                setLoaded(true)

            })
            .catch(error => {
                setLoaded(true)
                console.error('erro:', error);
            });
    }

    useEffect(() => {
        if (UseGetAvatar.country_lat !== '') {
            fetchAdvices();
        }
    }, [UseGetAvatar]);


    useEffect(() => {
        if (advices.length > 0) {
            advices.map((item: any) => {
                fetchAdvicesImgs(item.fsq_id)
            })
        }
    }, [advices])



    useEffect(() => {
        const interval = setInterval(() => {
            if (slideStoped !== true) {
                if (count < advices.length - 1) {
                    setCount(count + 1)
                } else setCount(0)
            }
        }, 5000);
        return () => clearInterval(interval);
    }, [count, advicesImg, slideStoped]);

    useEffect(() => {
        setSlideStoped(opened ? true : false)
    }, [opened])


    return (
        loaded ?
            <div>
                <TitleOfSession title={'Discovery'} />
                {advicesImg.length > 0 && advicesImg[count] ?
                    <div onClick={() => {
                        setOpened(true)

                    }} className='principal-advices-background box'
                        style={{ backgroundImage: `url(${advicesImg[count]?.img[0]?.prefix}original${advicesImg[count]?.img[0]?.suffix})` }}>
                        <div className="principal-advices-bottons">
                            <div className="principal-advices-others-photos">
                                {advicesImg.map((item, index) => (
                                    advices[index]?.geocodes.main.latitude ?
                                        item.img[0] ?
                                            <div
                                                onClick={() => {
                                                    setCount(index)
                                                    console.log('o index é ', index)
                                                }}
                                                className="principal-advices-others-photo"
                                                key={index}
                                                style={{ backgroundImage: `url(${item.img[0]?.prefix}original${item.img[0]?.suffix})` }}>
                                                index {index}
                                            </div>
                                            : ''
                                        : ''
                                ))}

                            </div>
                            <div className='principal-advices-text' onClick={() => {
                                setOpened(true)
                            }}>
                                <div className="principal-advices-categorie">
                                    <div className="principal-advices-categorie-icon" style={{ backgroundImage: `url(${advices[count]?.categories[0]?.icon.prefix + '64' + advices[count]?.categories[0]?.icon.suffix})` }}></div>
                                    <span>{advices[count]?.categories[0]?.plural_name}</span>
                                </div>
                                <div className="principal-advices-title">{advices[count]?.name}</div>
                                <div className="principal-advices-adress">
                                    {advices[count]?.location.formatted_address}
                                </div>
                            </div>
                        </div>
                    </div>

                    : ''}

                {opened ? <BoxFullpage content={<AdviceOpened advice={advices[count]} adviceImg={advicesImg[count]} />} setOpened={setOpened} /> : ''}
            </div >
            :
            <div>
                <TitleOfSession title={'Discovery '} />

                <Skeleton style={{ width: '100%', height: '600px', }} />
            </div>
    )
}

export default AdvicesPrincipal