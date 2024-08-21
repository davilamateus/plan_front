import { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { IUser, IUserContext } from "../types/IUser";
import Api from "../axios";
import { useUserInitialValue, useUserReducer } from "../reducers/useUserReducer";
import useEditUserDetails from "../requests/user/useEditUserDetails";

type prop = {
    children: ReactNode;
};

export const UseUserContext = createContext<IUserContext | null>(null);

export const UseUserContextProvider = ({ children }: prop) => {
    const [state, dispatch] = useReducer(useUserReducer, useUserInitialValue);
    const [loaded, setLoaded] = useState(false);
    let token = localStorage.getItem("token") || sessionStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            window.location.href = "/login";
        }
        const fetchToDoList = async () => {
            try {
                const data = await Api.get("user");
                if (data.status !== 200) {
                    window.location.href = "/login";
                }
                dispatch({ type: "set", payload: data.data });
                setLoaded(true);
            } catch (error) {
                console.log(error);
            }
        };

        if (!loaded) {
            fetchToDoList();
        }
    }, [token, loaded]);

    const UseEditUserRequest = useEditUserDetails();
    const editUser = (user: IUser) => {
        UseEditUserRequest(user).then(() => {
            dispatch({ type: "set", payload: user });
        });
    };

    return <UseUserContext.Provider value={{ state, editUser }}>{children}</UseUserContext.Provider>;
};
