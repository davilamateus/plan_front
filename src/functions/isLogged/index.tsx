import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useGetUserApi } from "../../requests/user/useGetUserApi";
import { useGetTripApi } from "../../requests/trip/useGetTripApi";

export const IsLogged = () => {
    const UseNavigate = useNavigate();
    const UseGetUserApi = useGetUserApi();
    const UseGetTripApi = useGetTripApi();

    let token = localStorage.getItem("token") || sessionStorage.getItem("token");

    useEffect(() => {
        if (token) {
            UseGetUserApi()
                .then((data) => {
                    if (data.status !== 200) {
                        UseNavigate("/login");
                    }
                })
                .catch(() => {
                    UseNavigate("/login");
                });

            UseGetTripApi()
                .then((data: any) => {
                    if (data.status === 210) {
                        UseNavigate("/createtripdetails");
                    }
                })
                .catch(() => {
                    UseNavigate("/login");
                });
        } else {
            UseNavigate("/login");
        }
    }, [token]);
};
