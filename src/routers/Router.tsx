import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import HomePage from "../pages/home";
import { Provider } from "react-redux";
import ConfirmEmail from "../pages/confirmEmail";
import ForgetPassword from "../pages/forgetPassword";
import CreateTripDetailsComponent from "../pages/createTripDetails";
import Menu from "../components/menu";
import HeaderMain from "../components/header/main";
import PageFinances from "../pages/finances";
import NoticesPage from "../pages/noticies";
import PageExchange from "../pages/exchange";
import PageToDoList from "../pages/todolist";
import PageAdvices from "../pages/advices";
import PageMyAccoount from "../pages/myaccount";
import { IToDoListMain } from "../types/IToDoList";
import { useState } from "react";
import { UseToDoListContext, UseToDoListContextProvider } from "../context/useToDoListContext";
import { UseUserContextProvider } from "../context/useUserContext";
import { UseTripContextProvider } from "../context/useTripContext";
import { UseFinanceContextProvider } from "../context/useFinanceContext";
import { UseTitleContextProvider } from "../context/useTitleContext";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/confirmemail/:token"
                    element={<ConfirmEmail />}
                />
                <Route
                    path="/forgetpassword/:token"
                    element={<ForgetPassword />}
                />
                <Route
                    path="/createtripdetails"
                    element={<CreateTripDetailsComponent />}
                />
                <Route
                    path="/"
                    element={
                        <UseTitleContextProvider>
                            <UseToDoListContextProvider>
                                <UseUserContextProvider>
                                    <UseTripContextProvider>
                                        <UseFinanceContextProvider>
                                            <HeaderMain />
                                            <Menu />
                                        </UseFinanceContextProvider>
                                    </UseTripContextProvider>
                                </UseUserContextProvider>
                            </UseToDoListContextProvider>
                        </UseTitleContextProvider>
                    }>
                    <Route
                        path="/"
                        element={<HomePage />}
                    />
                    <Route
                        path="/finances"
                        element={<PageFinances />}
                    />
                    <Route
                        path="/noticies"
                        element={<NoticesPage />}
                    />
                    <Route
                        path="/exchange"
                        element={<PageExchange />}
                    />

                    <Route
                        path="/todolist"
                        element={<PageToDoList />}
                    />

                    <Route
                        path="/advices"
                        element={<PageAdvices />}
                    />
                    <Route
                        path="/myaccount"
                        element={<PageMyAccoount />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
