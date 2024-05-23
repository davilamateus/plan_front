
import './style.scss';

interface type {
    title: string;
    type: string;
    status: boolean;
    action: any;
    loading: boolean;
}

const ButtonSimple = ({ title, type, status, action, loading }: type) => {
    return (
        <button
            className={`button-simple button-${type} ${!status ? 'button-inactive' : ''}`}
            onClick={() => {
                if (status) {
                    action()
                }
            }}
        >
            {loading ?
                <img className='btn-loading' src="./../../../../../gifs/btnloadin.gif" alt="Loading" />
                : title}
        </button>
    )
}

export default ButtonSimple;