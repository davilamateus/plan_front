import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoBottom from "../communs/logoBottom";
import "./style.scss";

const Menu = () => {
	const [pageActived, setPageActive] = useState("");
	const UseLocation = useLocation();

	useEffect(() => {
		setPageActive(window.location.pathname.split("/")[1]);
	}, [UseLocation]);

	const Logout = () => {
		sessionStorage.clear();
		localStorage.clear();
		window.location.href = "/login";
	};

	return (
		<main>
			<div className="menu box">
				<div className="logo-menu">
					<Link to={"/"}>
						<LogoBottom />
					</Link>
				</div>
				<nav className="nav">
					<ul>
						<li>
							<Link className={pageActived === "" ? "active" : ""} to={"/"}>
								<div>
									<svg
										id="home"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path
											id="Vector"
											d="M.75,4.5A.755.755,0,0,1,0,3.75v-3A.755.755,0,0,1,.75,0,.755.755,0,0,1,1.5.75v3A.755.755,0,0,1,.75,4.5Z"
											transform="translate(11.25 14.25)"
											fill="#535353"
										/>
										<path
											id="Vector-2"
											data-name="Vector"
											d="M16.733,22H5.274a4.024,4.024,0,0,1-3.867-3.321l-1.361-8.3A4.326,4.326,0,0,1,1.458,6.615L8.548.838a4,4,0,0,1,4.911.01l7.09,5.767a4.411,4.411,0,0,1,1.412,3.768L20.6,18.669A4.089,4.089,0,0,1,16.733,22ZM10.993,1.567a2.38,2.38,0,0,0-1.483.489L2.419,7.843a2.812,2.812,0,0,0-.859,2.29l1.361,8.286a2.52,2.52,0,0,0,2.353,2.019H16.733a2.519,2.519,0,0,0,2.353-2.03l1.361-8.286a2.878,2.878,0,0,0-.859-2.29L12.5,2.066A2.4,2.4,0,0,0,10.993,1.567Z"
											transform="translate(1.245 1.425)"
											fill="#535353"
										/>
										<path
											id="Vector-3"
											data-name="Vector"
											d="M0,0H24V24H0Z"
											fill="none"
											opacity="0"
										/>
									</svg>
								</div>
								<p>Home</p>
							</Link>
						</li>
						<li>
							<Link
								className={pageActived === "noticias" ? "active" : ""}
								to={"/noticias"}
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="22.675"
										height="23.4"
										viewBox="0 0 22.675 23.4"
									>
										<g
											id="news-paper-svgrepo-com"
											transform="translate(0.7 0.7)"
										>
											<path
												id="Path_2943"
												data-name="Path 2943"
												d="M22,6V24.857C22,26.533,22.942,28,24.175,28h0c1.16,0,2.175-1.362,2.175-3.143V15.429H22"
												transform="translate(-5.075 -6)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="1.4"
											/>
											<path
												id="Path_2944"
												data-name="Path 2944"
												d="M21.19,6V24.857A3.043,3.043,0,0,0,23.1,27.79V28H6.865A3.024,3.024,0,0,1,4,24.857V6Z"
												transform="translate(-4 -6)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="1.4"
											/>
											<line
												id="Line_582"
												data-name="Line 582"
												x2="4"
												transform="translate(4.03 4.659)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="1.4"
											/>
											<line
												id="Line_583"
												data-name="Line 583"
												x2="1"
												transform="translate(3.842 8.994)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeMiterlimit="10"
												strokeWidth="1.4"
											/>
										</g>
									</svg>
								</div>
								<p>Notícias</p>
							</Link>
						</li>
						<li>
							<Link
								className={pageActived === "discovery" ? "active" : ""}
								to={"/discovery"}
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="23.5"
										height="23.5"
										viewBox="0 0 23.5 23.5"
									>
										<g
											id="Group_3954"
											data-name="Group 3954"
											transform="translate(-40.25 -463.25)"
										>
											<g
												id="suitcase-svgrepo-com"
												transform="translate(39 462)"
											>
												<path
													id="Path_2950"
													data-name="Path 2950"
													d="M2,15c0-4.243,0-6.364,1.289-7.682S6.652,6,10.8,6h4.4c4.148,0,6.223,0,7.511,1.318S24,10.757,24,15s0,6.364-1.289,7.682S19.348,24,15.2,24H10.8c-4.148,0-6.223,0-7.511-1.318S2,19.243,2,15Z"
													fill="none"
													stroke="#535353"
													strokeWidth="1.5"
												/>
												<path
													id="Path_2951"
													data-name="Path 2951"
													d="M16,6c0-1.886,0-2.828-.586-3.414S13.886,2,12,2s-2.828,0-3.414.586S8,4.114,8,6"
													transform="translate(1)"
													fill="none"
													stroke="#535353"
													strokeWidth="1.5"
												/>
												<path
													id="Path_2952"
													data-name="Path 2952"
													d="M17,9a1,1,0,1,1-1-1A1,1,0,0,1,17,9Z"
													transform="translate(1.444 0.667)"
													fill="#4f5050"
												/>
												<path
													id="Path_2953"
													data-name="Path 2953"
													d="M9,9A1,1,0,1,1,8,8,1,1,0,0,1,9,9Z"
													transform="translate(0.556 0.667)"
													fill="#4f5050"
												/>
											</g>
											<path
												id="heart-svgrepo-com"
												d="M6.452,4.787A1.889,1.889,0,0,0,3.744,4.47a2.045,2.045,0,0,0-.307,2.839,32.064,32.064,0,0,0,2.833,2.746.4.4,0,0,0,.131.094.175.175,0,0,0,.1,0,.4.4,0,0,0,.131-.094A32.066,32.066,0,0,0,9.462,7.309,2.03,2.03,0,0,0,9.155,4.47,1.888,1.888,0,0,0,6.452,4.787Z"
												transform="translate(45.548 471.469)"
												fill="none"
												stroke="#4f5050"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												fillRule="evenodd"
											/>
										</g>
									</svg>
								</div>
								<p>Discovery</p>
							</Link>
						</li>
						<li>
							<Link
								className={pageActived === "listadetarefas" ? "active" : ""}
								to={"/listadetarefas"}
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="23.5"
										height="23.5"
										viewBox="0 0 23.5 23.5"
									>
										<g
											id="task-square-svgrepo-com"
											transform="translate(0.75 0.75)"
										>
											<path
												id="Path_2945"
												data-name="Path 2945"
												d="M12.37,8.88h5.25"
												transform="translate(-0.594 -1.312)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
											/>
											<path
												id="Path_2946"
												data-name="Path 2946"
												d="M6.38,8.88l.75.75L9.38,7.38"
												transform="translate(-1.485 -1.394)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
											/>
											<path
												id="Path_2947"
												data-name="Path 2947"
												d="M12.37,15.88h5.25"
												transform="translate(-0.594 -0.612)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
											/>
											<path
												id="Path_2948"
												data-name="Path 2948"
												d="M6.38,15.88l.75.75,2.25-2.25"
												transform="translate(-1.485 -0.605)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
											/>
											<path
												id="Path_2949"
												data-name="Path 2949"
												d="M9.7,24h6.6c5.5,0,7.7-2.2,7.7-7.7V9.7C24,4.2,21.8,2,16.3,2H9.7C4.2,2,2,4.2,2,9.7v6.6C2,21.8,4.2,24,9.7,24Z"
												transform="translate(-2 -2)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
											/>
										</g>
									</svg>
								</div>
								<p>Lista de Terfas</p>
							</Link>
						</li>
						<li>
							<Link
								className={pageActived === "financeiro" ? "active" : ""}
								to={"/financeiro"}
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="23.107"
										height="20.54"
										viewBox="0 0 23.107 20.54"
									>
										<path
											id="icon-finance"
											d="M17.331,9.949a.963.963,0,1,0,.963.963A.97.97,0,0,0,17.331,9.949Zm4.492-.963h-.542a6.484,6.484,0,0,0-2.026-2.542V3.851h-.642a6.274,6.274,0,0,0-3.586,1.284H8.986A6.525,6.525,0,0,0,4.5,6.975a6.446,6.446,0,0,0-1.81,3.295H2.246A.962.962,0,0,1,1.3,9.117a.95.95,0,0,1,.768-.747.632.632,0,0,0,.5-.622.64.64,0,0,0-.775-.627,2.239,2.239,0,0,0,.454,4.433h.321a6.379,6.379,0,0,0,2.568,5.1v1.956A1.931,1.931,0,0,0,7.06,20.54H8.986a1.931,1.931,0,0,0,1.926-1.926v-.642h2.568v.642A1.931,1.931,0,0,0,15.4,20.54H17.33a1.931,1.931,0,0,0,1.926-1.926V16.654A6.718,6.718,0,0,0,20.51,15.4h1.314a1.288,1.288,0,0,0,1.284-1.284V10.27A1.288,1.288,0,0,0,21.824,8.986Zm0,5.135H19.868a6.739,6.739,0,0,1-1.9,1.9v2.6a.642.642,0,0,1-.642.642H15.4a.642.642,0,0,1-.642-.642V16.689H9.628v1.926a.642.642,0,0,1-.642.642H7.06a.642.642,0,0,1-.642-.642v-2.6c-2.6-1.966-2.568-3.751-2.568-4.463A5.139,5.139,0,0,1,8.986,6.419h6.489a4.777,4.777,0,0,1,2.5-1.234v1.9a5.88,5.88,0,0,1,2.472,3.189h1.379ZM6.977,4.485a.665.665,0,0,0,.756-.529,3.252,3.252,0,0,1,3.262-2.681,3.3,3.3,0,0,1,3.125,2.15.669.669,0,0,0,.839.4.632.632,0,0,0,.41-.81A4.615,4.615,0,0,0,10.995,0,4.556,4.556,0,0,0,6.427,3.756.641.641,0,0,0,6.977,4.485Z"
											transform="translate(0)"
											fill="#535353"
										/>
									</svg>{" "}
								</div>
								<p>Financeiro</p>
							</Link>
						</li>
						<li>
							<Link
								className={pageActived === "cotacao" ? "active" : ""}
								to={"/cotacao"}
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="23.98"
										height="21.447"
										viewBox="0 0 23.98 21.447"
									>
										<g
											id="exchange-dollar-svgrepo-com"
											transform="translate(0.99 0.723)"
										>
											<path
												id="primary"
												d="M24,12a6.364,6.364,0,0,0-.445-2.35c-1.166-2.966-4.408-5.133-8.319-5.562A11.4,11.4,0,0,0,5.3,7.65"
												transform="translate(-3 -4.011)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.4"
											/>
											<path
												id="primary-2"
												data-name="primary"
												d="M4,12a6.364,6.364,0,0,0,.445,2.35c1.166,2.966,4.408,5.133,8.319,5.562A11.4,11.4,0,0,0,22.7,16.35"
												transform="translate(-3 0.011)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.4"
											/>
											<path
												id="primary-3"
												data-name="primary"
												d="M19,11l1,1,1-1"
												transform="translate(1 -2.134)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.4"
											/>
											<path
												id="primary-4"
												data-name="primary"
												d="M5,13,4,12,3,13"
												transform="translate(-3 -1.866)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.4"
											/>
											<path
												id="primary-5"
												data-name="primary"
												d="M10,15h2.5A1.5,1.5,0,0,0,14,13.5h0A1.5,1.5,0,0,0,12.5,12h-1A1.5,1.5,0,0,1,10,10.5h0A1.5,1.5,0,0,1,11.5,9H14"
												transform="translate(-1 -2)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.4"
											/>
											<path
												id="primary-6"
												data-name="primary"
												d="M12,9.5V8m0,12.023v-1.5"
												transform="translate(-1 -4.011)"
												fill="none"
												stroke="#535353"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.4"
											/>
										</g>
									</svg>
								</div>
								<p>Cotação</p>
							</Link>
						</li>
						<li>
							<Link
								className={pageActived === "minhaconta" ? "active" : ""}
								to={"/minhaconta"}
							>
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="17.492"
										height="19.99"
										viewBox="0 0 17.492 19.99"
									>
										<path
											id="user"
											d="M8.746,10a5,5,0,1,0-5-5A5,5,0,0,0,8.746,10Zm0-8.746A3.748,3.748,0,1,1,5,5,3.752,3.752,0,0,1,8.746,1.249Zm1.978,10.62H6.768A6.768,6.768,0,0,0,0,18.637,1.354,1.354,0,0,0,1.353,19.99H16.138a1.354,1.354,0,0,0,1.353-1.354A6.767,6.767,0,0,0,10.724,11.869Zm5.414,6.872H1.353a.1.1,0,0,1-.1-.1,5.524,5.524,0,0,1,5.518-5.518h3.956a5.524,5.524,0,0,1,5.518,5.518A.1.1,0,0,1,16.138,18.741Z"
											fill="#535353"
										/>
									</svg>
								</div>
								<p>Minha Conta </p>
							</Link>
						</li>
					</ul>
				</nav>
				<div
					onClick={() => {
						Logout();
					}}
					className="exit"
				>
					<div>
						<svg
							id="_1.Bace基础_3.Icon图标_操作_poweroff"
							data-name="1.Bace基础/3.Icon图标/操作/poweroff"
							xmlns="http://www.w3.org/2000/svg"
							width="26"
							height="26"
							viewBox="0 0 26 26"
						>
							<rect
								id="poweroff_Background_"
								data-name="poweroff (Background)"
								width="26"
								height="26"
								fill="none"
							/>
							<path
								id="poweroff"
								d="M10.675,22.993A10.677,10.677,0,0,1,5.695,2.872L6.518,4.3a9.03,9.03,0,1,0,8.314,0l.822-1.423a10.677,10.677,0,0,1-4.98,20.121ZM11.5,11.5H9.854V0H11.5V11.5Z"
								transform="translate(2.463 1.642)"
								fill="#535353"
							/>
						</svg>
					</div>
					<p>Sair</p>
				</div>
			</div>
		</main>
	);
};

export default Menu;
