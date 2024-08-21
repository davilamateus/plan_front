import { useState } from "react";
import "./style.scss";

interface type {
    action: any;
}

const ButtonDeleteSmall = ({ action }: type) => {
    const [loading, setLoading] = useState(false);
    return (
        <div className="delete-small">
            {loading ? (
                <img
                    src="./../../../../gifs/btnloadin.gif"
                    alt=""
                />
            ) : (
                <div
                    onClick={() => {
                        setLoading(true);
                        action();
                    }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="19"
                        viewBox="0 0 17 19">
                        <g
                            id="delete-alt-2-svgrepo-com"
                            transform="translate(-3.5 -2.5)">
                            <path
                                id="primary-stroke"
                                d="M4,7H20M16,7V4a1,1,0,0,0-1-1H9A1,1,0,0,0,8,4V7m9.07,13.07L18,7H6l.93,13.07a1,1,0,0,0,1,.93h8.14A1,1,0,0,0,17.07,20.07ZM12,11v6"
                                fill="none"
                                stroke="#000"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1"
                            />
                        </g>
                    </svg>
                </div>
            )}
        </div>
    );
};

export default ButtonDeleteSmall;
