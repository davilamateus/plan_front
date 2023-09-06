
import { useDispatch } from 'react-redux';

function useSetMessage() {
    const dispatch = useDispatch();
    return (title: string, text: string, status: string) => {
        const message = { title: title, text: text, status: status }
        dispatch({
            type: '@message/SET_MESSAGE', message
        });

    }
}

export default useSetMessage;