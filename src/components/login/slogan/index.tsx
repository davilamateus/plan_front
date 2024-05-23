import LogoBottom from '../../communs/logoBottom';
import './style.scss';

const SloganComponent = () => {
    return (
        <div className='slogan-main'>
            <div className='slogan-component'>
                <div className="slogan-text">
                    <h1>
                        You can
                        <br />
                        <span className='slogan-text-green'>fulfill</span> your
                        <br />
                        dream.
                        <br />
                    </h1>
                    <span className='slogan-text-handwriting'>and we can help you!</span>
                </div>
                <div className="slogan-img">
                    <img src="./../../../../img/person.png" alt="" />
                </div>
            </div>
            <LogoBottom />
        </div>
    )
}

export default SloganComponent;