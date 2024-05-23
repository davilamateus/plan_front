import { Dispatch, SetStateAction } from 'react';
import { IAdvicesMain } from '../../../../types/advices/IAdvices';
import './style.scss';


interface type {
    advice: IAdvicesMain;
    selectAdvice: Dispatch<SetStateAction<IAdvicesMain | undefined>>
    setOpened: Dispatch<SetStateAction<boolean>>
}

const AdviceCategorieCard = ({ advice, selectAdvice, setOpened }: type) => {

    return (
        <div className='advice-categorie-card' onClick={() => {
            selectAdvice(advice)
            setOpened(true)
        }}>
            <div className="advice-categorie-card-img" style={{ backgroundImage: `url(${advice.images[0]?.prefix}original${advice.images[0]?.suffix})` }}>
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
    )
}

export default AdviceCategorieCard;