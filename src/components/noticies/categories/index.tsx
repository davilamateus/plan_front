import { Dispatch, SetStateAction } from "react";

import "./style.scss";

interface type {
	category: string;
	setCategory: Dispatch<SetStateAction<string>>;
}

const NoticiesCategories = ({ category, setCategory }: type) => {
	return (
		<div className="noticies-categories">
			<li
				className={category == "" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("");
				}}
			>
				Todas
			</li>
			<li
				className={category == "business" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("business");
				}}
			>
				Negócios
			</li>
			<li
				className={
					category == "entertainment" ? "notices-categorie-active" : ""
				}
				onClick={() => {
					setCategory("entertainment");
				}}
			>
				Entreterimento
			</li>
			<li
				className={category == "environment" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("environment");
				}}
			>
				Ambiente
			</li>
			<li
				className={category == "science" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("science");
				}}
			>
				Ciência
			</li>
			<li
				className={category == "health" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("health");
				}}
			>
				Saúde
			</li>
			<li
				className={category == "sports" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("sports");
				}}
			>
				Esporte
			</li>
			<li
				className={category == "technology" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("technology");
				}}
			>
				Tecnológia
			</li>
			<li
				className={category == "food" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("food");
				}}
			>
				Comida
			</li>
			<li
				className={category == "politics" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("politics");
				}}
			>
				Política
			</li>
			<li
				className={category == "top" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("top");
				}}
			>
				Destaque
			</li>
			<li
				className={category == "tourism" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("tourism");
				}}
			>
				Turismo
			</li>
			<li
				className={category == "world" ? "notices-categorie-active" : ""}
				onClick={() => {
					setCategory("world");
				}}
			>
				Mundo
			</li>
		</div>
	);
};

export default NoticiesCategories;
