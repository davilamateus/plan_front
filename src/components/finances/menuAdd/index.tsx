import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BoxFullpage from "../../communs/boxFullpage";
import ModalAddGoals from "../modal/categories";
import ModalEntrances from "../modal/entraces";
import ModalExpenses from "../modal/expenses";
import "./style.scss";

interface type {
	setOpened: Dispatch<SetStateAction<boolean>>;
}

const FinancesMenuAdd = ({ setOpened }: type) => {
	const [element, setElement] = useState<JSX.Element | undefined>();
	const [title, setTitle] = useState("");

	//Animation Buttons
	const addAnimation = (
		time: number,
		div: { classList: { add: (arg0: string) => void } }
	) => {
		setTimeout(() => {
			div.classList.add("option-animation");
		}, time);
	};
	useEffect(() => {
		for (let i = 4; i >= 0; i--) {
			addAnimation(
				(document.querySelectorAll(
					".page-container .button-add-finance-options li"
				).length -
					i) *
					50,
				document.querySelectorAll(
					".page-container .button-add-finance-options li"
				)[i]
			);
		}
	}, []);

	return (
		<div className="button-add-finance">
			<div className="page-container">
				<ul className={`button-add-finance-options`}>
					<li
						onClick={() => {
							setTitle("Entrada");
							setElement(<ModalEntrances setOpened={setOpened} />);
						}}
					>
						<img src="../../../../icons/entraces.svg" alt="" />
						Entrada
					</li>
					<li
						onClick={() => {
							setTitle("Categoria Doméstica");
							setElement(<ModalAddGoals setOpened={setOpened} addType={1} />);
						}}
					>
						<img src="../../../../icons/goalsdomestic.svg" alt="" />
						Categoria Doméstica
					</li>
					<li
						onClick={() => {
							setTitle("Gasto Doméstico");
							setElement(<ModalExpenses type={1} setOpened={setOpened} />);
						}}
					>
						<img src="../../../../icons/homecost.svg" alt="" />
						Gasto Doméstico
					</li>
					<li
						onClick={() => {
							setTitle(" Categoria Intercâmbio");
							setElement(<ModalAddGoals setOpened={setOpened} addType={2} />);
						}}
					>
						<img src="../../../../icons/goalstrip.svg" alt="" />
						Categoria Intercâmbio
					</li>
					<li
						onClick={() => {
							setTitle("  Gasto Intercâmbio");
							setElement(<ModalExpenses type={2} setOpened={setOpened} />);
						}}
					>
						<img src="../../../../icons/planer.svg" alt="" />
						Gasto Intercâmbio
					</li>
				</ul>

				{element && (
					<BoxFullpage setOpened={setOpened} content={element} title={title} />
				)}
			</div>
		</div>
	);
};

export default FinancesMenuAdd;
