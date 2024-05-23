import AdvicesPrincipal from '../princial';
import AdvicesCategorie from '../categories/main';
import './style.scss';

const AdvicesMain = () => {

    return (
        <div className='advices-main'>
            <AdvicesPrincipal />
            <AdvicesCategorie slug='Bar' categorie={'13003'} />
            <AdvicesCategorie slug='Landmarks and Outdoors' categorie={'16000'} />
            <AdvicesCategorie slug='Restaurant' categorie={'13065'} />
            <AdvicesCategorie slug='Sports and Recreation' categorie={'18000'} />
        </div>
    )
}

export default AdvicesMain;