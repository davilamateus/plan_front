import React, { useEffect, useState } from 'react'
import TitleOfSession from '../../../communs/titleOfSession'
import { IAdvicesMain, IAdvicesMainImg } from '../../../../types/advices/IAdvices';
import useGetAvatar from '../../../../store/hooks/avatar/useGetAvatar';
import Api from '../../../../axios';
import AdviceCategorieCard from '../card';
import './style.scss';
import BoxFullpage from '../../../communs/boxFullpage';
import AdviceOpened from '../../opened';
import Skeleton from 'react-loading-skeleton';

interface type {
    slug: string;
    categorie: number;
}

const AdvicesCategorie = ({ slug, categorie }: type) => {

    const [advices, setAdvices] = useState<IAdvicesMain[]>([]);
    const [loaded, setLoaded] = useState(false)
    const [opened, setOpened] = useState(false)
    const [selectAdvice, setSelectAdvice] = useState<IAdvicesMain>()
    const [selectAdviceImg, setSelectAdviceImg] = useState<IAdvicesMainImg>()
    const [count, setCount] = useState(0);

    const UseGetAvatar = useGetAvatar();


    function fetchAdvices() {
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        Api.get(`/cities/advices?local=${UseGetAvatar.country_lat},${UseGetAvatar.country_lon}&category=${categorie}`, config)
            .then((data: any) => {
                setAdvices((data.data));
                setLoaded(true)

            })
            .catch(error => {
                console.error('erro:', error);
            });
    }





    useEffect(() => {
        if (UseGetAvatar.country_lat !== '') {
            fetchAdvices();
        }
    }, [UseGetAvatar]);







    function changeSlide(value: number) {
        var elemento = document.getElementsByClassName('page-container')[0].clientWidth;


        if (value > 0 && (advices.length * 208) - elemento > count * (-1)) {
            console.log('aqui')
            if (count !== -1 * (advices.length - 1) * 208) {
                console.log('')
                setCount(count - 208);
            }
        } else if (value < 0) {

            if (count !== 0) {
                setCount(count + 208);
            }
        }
    }



    return (
        <div>
            <TitleOfSession title={slug} />
            {loaded && advices.length > 0 ?
                <>
                    <div className="advice-categorie-cards ">
                        <div className="advices-categorie-buttons">
                            <div
                                style={{ opacity: `${count == 0 ? '0' : '1'}` }}
                                className="advice-opened-back"
                                onClick={() => changeSlide(-1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33.314" height="54.312" viewBox="0 0 33.314 54.312">
                                    <g id="Grupo_3990" data-name="Grupo 3990" transform="translate(-1466.843 -985.843)">
                                        <line id="Linha_16" data-name="Linha 16" x1="22" y2="22" transform="translate(1472.5 991.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="8" />
                                        <line id="Linha_17" data-name="Linha 17" x2="22" y2="21" transform="translate(1472.5 1013.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="8" />
                                    </g>
                                </svg>

                            </div>
                            <div
                                className="advice-opened-next"
                                onClick={() => changeSlide(1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33.314" height="54.312" viewBox="0 0 33.314 54.312">
                                    <g id="Grupo_3990" data-name="Grupo 3990" transform="translate(1500.157 1040.155) rotate(180)">
                                        <line id="Linha_16" data-name="Linha 16" x1="22" y2="22" transform="translate(1472.5 991.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="8" />
                                        <line id="Linha_17" data-name="Linha 17" x2="22" y2="21" transform="translate(1472.5 1013.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="8" />
                                    </g>
                                </svg>

                            </div>

                        </div>
                        <div
                            className="advice-categorie-scroll"
                            style={{ transform: `translate(${count}px)` }}>
                            {

                                advices.length > 0 ?
                                    advices.map((advice, index) => (
                                        <AdviceCategorieCard key={index} advice={advice} selectAdvice={setSelectAdvice} selectAdviceImg={setSelectAdviceImg} setOpened={setOpened} />
                                    ))
                                    :
                                    ''
                            }
                        </div>
                    </div>
                    {selectAdvice && selectAdviceImg && opened ?
                        <BoxFullpage setOpened={setOpened} content={<AdviceOpened advice={selectAdvice} adviceImg={selectAdviceImg} />} />
                        : ''}
                </>
                :

                <div className="advice-categorie-cards">
                    <div className="advice-categorie-scroll">
                        <Skeleton style={{ width: '200px', height: '300px', }} />
                        <Skeleton style={{ width: '200px', height: '300px', }} />
                        <Skeleton style={{ width: '200px', height: '300px', }} />
                        <Skeleton style={{ width: '200px', height: '300px', }} />
                        <Skeleton style={{ width: '200px', height: '300px', }} />
                        <Skeleton style={{ width: '200px', height: '300px', }} />
                        <Skeleton style={{ width: '200px', height: '300px', }} />


                    </div>
                </div>}
        </div>


    )
}

export default AdvicesCategorie