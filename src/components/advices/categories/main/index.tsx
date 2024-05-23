import { useEffect, useState } from 'react';
import { IAdvicesMain } from '../../../../types/advices/IAdvices';
import { useGetTrip } from '../../../../store/hooks/trip/useGetTrip';
import { useGetAdvices } from '../../../../hooks/city/useGetAdvices';
import TitleOfSession from '../../../communs/titleOfSession'
import AdviceCategorieCard from '../card';
import BoxFullpage from '../../../communs/boxFullpage';
import AdviceOpened from '../../opened';
import Skeleton from 'react-loading-skeleton';
import './style.scss';

interface type {
    slug: string;
    categorie: string;
}

const AdvicesCategorie = ({ slug, categorie }: type) => {

    const [advices, setAdvices] = useState<IAdvicesMain[]>([]);
    const [opened, setOpened] = useState(false);
    const [selectAdvice, setSelectAdvice] = useState<IAdvicesMain>();
    const [count, setCount] = useState(0);

    const UseGetTrip = useGetTrip();
    const UseGetAdvices = useGetAdvices();

    useEffect(() => {
        if (UseGetTrip.tripLat) {
            UseGetAdvices(UseGetTrip.tripLat, UseGetTrip.tripLon, categorie)
                .then((data) => setAdvices(data.data));
        }
    }, [UseGetTrip]);


    const handleChangeSlide = (value: number) => {
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
            <TitleOfSession title={slug} />
            {advices.length > 0 ?
                    <div className="advice-categorie-cards ">
                        <div className="advices-categorie-buttons">
                            <div
                                style={{ opacity: `${count == 0 ? '0' : '1'}` }}
                                className="advice-opened-back"
                                onClick={() => handleChangeSlide(-1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33.314" height="54.312" viewBox="0 0 33.314 54.312">
                                    <g id="Grupo_3990" data-name="Grupo 3990" transform="translate(-1466.843 -985.843)">
                                        <line id="Linha_16" data-name="Linha 16" x1="22" y2="22" transform="translate(1472.5 991.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="8" />
                                        <line id="Linha_17" data-name="Linha 17" x2="22" y2="21" transform="translate(1472.5 1013.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="8" />
                                    </g>
                                </svg>

                            </div>
                            <div
                                className="advice-opened-next"
                                onClick={() => handleChangeSlide(1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="33.314" height="54.312" viewBox="0 0 33.314 54.312">
                                    <g id="Grupo_3990" data-name="Grupo 3990" transform="translate(1500.157 1040.155) rotate(180)">
                                        <line id="Linha_16" data-name="Linha 16" x1="22" y2="22" transform="translate(1472.5 991.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="8" />
                                        <line id="Linha_17" data-name="Linha 17" x2="22" y2="21" transform="translate(1472.5 1013.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="8" />
                                    </g>
                                </svg>

                            </div>

                        </div>
                        <div
                            className="advice-categorie-scroll"
                            style={{ transform: `translate(${count}px)` }}>
                            {

                                advices.length > 0 &&
                                advices.map((advice, index) => (
                                    <AdviceCategorieCard
                                        key={index}
                                        advice={advice}
                                        selectAdvice={setSelectAdvice}
                                        setOpened={setOpened} />
                                ))

                            }
                        </div>
                    </div>
                 
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
                {selectAdvice && opened &&
                        <BoxFullpage setOpened={setOpened} content={<AdviceOpened advice={selectAdvice} />} />
                    }
        </div>
    )
}

export default AdvicesCategorie;