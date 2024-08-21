import { createContext, ReactNode, useState, useContext } from "react";

type UseTitleContextType = {
    state: string;
    setTitle: (tilte: string) => void;
};

const defaultContextValue: UseTitleContextType = {
    state: "Dashboard",
    setTitle: function (tilte: string): void {
        throw new Error("Function not implemented.");
    }
};

export const UseTitleContext = createContext<UseTitleContextType>(defaultContextValue);

type UseTitleContextProviderProps = {
    children: ReactNode;
};

export const UseTitleContextProvider = ({ children }: UseTitleContextProviderProps) => {
    const [state, setState] = useState("Dashboard");

    const setTitle = (title: string) => {
        setState(title);
    };

    return <UseTitleContext.Provider value={{ state, setTitle }}>{children}</UseTitleContext.Provider>;
};

export const useTitle = () => useContext(UseTitleContext);
