import { useReducer, useEffect } from "react";
import { useMessageReducer, useMessageInitialValue } from "../../reducers/useMessageReducer";
import { IMessageActions } from "../../types/IMenssage";
import "./style.scss";

type IMessage = {
    message: IMessageActions;
};
const Message = ({ message }: IMessage) => {
    const [state, dispatch] = useReducer(useMessageReducer, useMessageInitialValue);
    useEffect(() => {
        if (message) {
            dispatch(message);
        }
    }, [message]);

    return state.status ? (
        <div className={`message-box color-${state.type} `}>
            <div className={` message-box-img `}>
                <img
                    src={`./../../../icons/message-${state.type}.svg`}
                    alt={state.type}
                />
            </div>
            <div className="message-box-white">
                \
                <div className="text">
                    <h4>{state.title}</h4>
                    <p>{state.description}</p>
                    <div className={`message-time-box color-${state.type} `}></div>
                </div>
                <button
                    onClick={() => {
                        dispatch({ type: false });
                    }}
                    className="close">
                    <img
                        src="./../../../icons/btn-close.svg"
                        alt="Close"
                    />
                </button>
            </div>
        </div>
    ) : (
        <></>
    );
};

export default Message;
