import React, { useEffect, useState } from 'react'
import { IAdvicesMain, IAdvicesMainImg } from '../../../../types/advices/IAdvices';
import useGetAvatar from '../../../../store/hooks/avatar/useGetAvatar';
import Api from '../../../../axios';
import AdviceCategorieCard from '../card';
import './style.scss';
import BoxFullpage from '../../../communs/boxFullpage';
import AdviceOpened from '../../opened';
import Skeleton from 'react-loading-skeleton';


const AdvicesDashboard = () => {

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

        Api.get(`/cities/advices?local=${UseGetAvatar.country_lat},${UseGetAvatar.country_lon}&category=${10000}`, config)
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
            if (count !== -1 * (advices.length - 1) * 208) {
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
            {loaded && advices.length > 0 ?
                <>
                    <div className="advice-categorie-cards-dashboard ">

                        <div
                            className="advice-categorie-scroll-dashboard"
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

                <div className="advice-categorie-cards-dashboard">
                    <div className="advice-categorie-scroll-dashboard">
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

export default AdvicesDashboard