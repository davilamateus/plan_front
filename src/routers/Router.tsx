import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UseToDoListContextProvider } from "../context/useToDoListContext";
import { UseUserContextProvider } from "../context/useUserContext";
import { UseTripContextProvider } from "../context/useTripContext";
import { UseFinanceContextProvider } from "../context/useFinanceContext";
import { UseTitleContextProvider } from "../context/useTitleContext";
import Menu from "../components/menu";
import Header from "../components/header/main";
import PageLogin from "../pages/login";
import PageHome from "../pages/home";
import PageConfirmEmail from "../pages/confirmEmail";
import PageTripDetails from "../pages/createTripDetails";
import PageFinances from "../pages/finances";
import PageNoticies from "../pages/noticies";
import PageExchange from "../pages/exchange";
import PageToDoList from "../pages/todolist";
import PageDiscovery from "../pages/discovery";
import PageMyAccoount from "../pages/myaccount";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<PageLogin />} />
				<Route path="/confirmaremail/:token" element={<PageConfirmEmail />} />
				<Route path="/detalhesdointercambio" element={<PageTripDetails />} />
				<Route
					path="/"
					element={
						<UseTitleContextProvider>
							<UseToDoListContextProvider>
								<UseUserContextProvider>
									<UseTripContextProvider>
										<UseFinanceContextProvider>
											<Header />
											<Menu />
										</UseFinanceContextProvider>
									</UseTripContextProvider>
								</UseUserContextProvider>
							</UseToDoListContextProvider>
						</UseTitleContextProvider>
					}
				>
					<Route path="/" element={<PageHome />} />
					<Route path="/financeiro" element={<PageFinances />} />
					<Route path="/noticias" element={<PageNoticies />} />
					<Route path="/cotacao" element={<PageExchange />} />
					<Route path="/listadetarefas" element={<PageToDoList />} />
					<Route path="/discovery" element={<PageDiscovery />} />
					<Route path="/minhaconta" element={<PageMyAccoount />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
