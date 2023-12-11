import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { IAdvicesMain, IAdvicesMainImg } from '../../../../types/advices/IAdvices'
import './style.scss';
import Api from '../../../../axios';
import advices from '../../../../pages/advices';

interface type {
    advice: IAdvicesMain;
    selectAdvice: Dispatch<SetStateAction<IAdvicesMain | undefined>>
    selectAdviceImg: Dispatch<SetStateAction<IAdvicesMainImg | undefined>>
    setOpened: Dispatch<SetStateAction<boolean>>
}

const AdviceCategorieCard = ({ advice, selectAdviceImg, selectAdvice, setOpened }: type) => {
    const [adviceImg, setAdviceImg] = useState<IAdvicesMainImg>();

    const [loading, setLoading] = useState(false)

    function fetchAdvicesImgs(id: string) {
        setLoading(true);
        let token = localStorage.getItem('token') || sessionStorage.getItem('token');

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };

        Api.get(`/cities/advices/img?id=${id}`, config)
            .then((data: any) => {
                setAdviceImg(({ id: id, img: data.data }));
                setLoading(false)

            })
            .catch(error => {
                setLoading(false)
                console.error('erro:', error);
            });
    }
    useEffect(() => {
        if (advice.fsq_id) {
            fetchAdvicesImgs(advice.fsq_id)
        }
    }, [advices])



    return (
        <>
            <div className='advice-categorie-card' onClick={() => {
                selectAdviceImg(adviceImg)
                selectAdvice(advice)
                setOpened(true)
            }}>
                <div className="advice-categorie-card-img" style={{ backgroundImage: `url(${adviceImg?.img[0]?.prefix}original${adviceImg?.img[0]?.suffix})` }}>
                    <div className="advice-categorie-card-text">
                        <div className="advice-categorie-card-categorie">
                            <div className="advice-categorie-card-categorie-icon" style={{ backgroundImage: `url(${advice.categories[0]?.icon.prefix + '64' + advice.categories[0]?.icon.suffix})` }}></div>
                            <span>{advice.categories[0].plural_name}</span>
                        </div>
                        <div className="advice-categorie-card-title">
                            {advice.name}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdviceCategorieCard