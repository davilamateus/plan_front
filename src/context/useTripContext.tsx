import React, { createContext, ReactNode, useEffect, useReducer, useState } from "react";
import { ITrip, ITripContext } from "../types/ITrip";
import Api from "../axios";
import { useEditTrip } from "../requests/trip/useEditTrip";
import { useTripReduce } from "../reducers/useTripReducer";

type prop = {
    children: ReactNode;
};

export const useTripInitialValue = {
    currentCity: "",
    currentState: "",
    currentCountry: "",
    currentCountrySlug: "",
    currentCurrency: "",
    tripCity: "",
    tripState: "",
    tripCountry: "",
    tripCountrySlug: "",
    tripCurrency: "",
    tripLon: "",
    tripLat: "",
    when: 0,
    loaded: false
};

export const UseTripContext = createContext<ITripContext | null>(null);

export const UseTripContextProvider = ({ children }: prop) => {
    const [state, dispatch] = useReducer(useTripReduce, useTripInitialValue);
    const UseEditTrip = useEditTrip();

    useEffect(() => {
        let token = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (!token) {
            window.location.href = "/login";
        }
        const fetchToDoList = async () => {
            try {
                const { data } = await Api.get(`/trip`);
                if (data.status === 210) {
                    window.location.href = "/createtripdetails";
                }
                dispatch({ type: "set", payload: { ...data, loaded: true } });
            } catch (error) {
                console.log(error);
            }
        };

        if (state.loaded === false) {
            fetchToDoList();
        }
    }, []);
    const editTrip = (trip: ITrip) => {
        try {
            UseEditTrip(trip).then(() => {
                dispatch({ type: "set", payload: trip });
            });
        } catch (error) {
            console.log(error);
        }
    };
    return <UseTripContext.Provider value={{ state, editTrip }}>{children}</UseTripContext.Provider>;
};
