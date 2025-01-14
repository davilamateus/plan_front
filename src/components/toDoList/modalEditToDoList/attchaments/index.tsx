import { useContext, useState } from "react";
import {
	IToDoListAttchament,
	IToDoListAttchamentsAdd,
} from "../../../../types/IToDoList";
import { BASE_URL } from "../../../../axios";
import { UseToDoListContext } from "../../../../context/useToDoListContext";
import BtnActionSmall from "../../comuns/btnActionSmall";
import InputSimple from "../../../communs/inputs/simples";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import InputUploadFile from "../../../communs/inputs/uploadFile";
import ButtonDeleteSmall from "../../../communs/buttons/deleteSmall";
import "./style.scss";

interface type {
	attchaments?: IToDoListAttchament[];
	toDoListId: number;
}

const TodoListAttchaments = ({ attchaments, toDoListId }: type) => {
	const [inputOpened, setInputOpened] = useState(false);
	const [loading, setLoading] = useState(false);
	const [attchament, setAttchament] = useState<IToDoListAttchamentsAdd>({
		title: "",
		link: "",
		toDoListId,
	});
	const toDoListContext = useContext(UseToDoListContext);

	const handleSubmit = () => {
		setLoading(true);
		toDoListContext?.addAttchament(toDoListId, attchament);
		setTimeout(() => {
			setLoading(false);
			setAttchament({ title: "", link: "", toDoListId });
			setInputOpened(false);
		}, 2000);
	};

	return (
		<div>
			<label>
				<div className="todolist-head">
					<h4>Anexos</h4>
					<BtnActionSmall
						inputOpened={inputOpened}
						setInputOpened={setInputOpened}
					/>
				</div>
				{inputOpened && (
					<label className="todolist-attchament-input">
						<InputSimple
							title={"Título:"}
							input={attchament.title}
							setInput={(e) => setAttchament({ ...attchament, title: e })}
							placeholder="Digite um título.."
						/>
						<InputUploadFile
							setLink={(e) => setAttchament({ ...attchament, link: e })}
						/>
						<ButtonSimple
							title={"Adicionar"}
							type="success"
							loading={loading}
							status={attchament.title !== "" && attchament.link !== ""}
							action={handleSubmit}
						/>
					</label>
				)}
				{attchaments && attchaments.length > 0 ? (
					<div className="box">
						{attchaments.map((attchament: IToDoListAttchament) => (
							<div key={attchament.id} className="todolist-attchament-list">
								<a
									target="_blank"
									href={BASE_URL + "todolist/attchaments/" + attchament.link}
									className="todolist-attchament-left"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										id="fi-rr-link"
										width="24"
										height="24.003"
										viewBox="0 0 24 24.003"
									>
										<rect
											id="fi-rr-link-2"
											data-name="fi-rr-link"
											width="24"
											height="24"
											fill="none"
										/>
										<path
											id="Vector"
											d="M13.847,8.819a1,1,0,0,1,1.414,1.414L12,13.5A7.028,7.028,0,1,1,2.057,3.558L5.318.293A1,1,0,1,1,6.733,1.707L3.471,4.972a5.028,5.028,0,0,0,7.111,7.109l3.262-3.262Z"
											transform="translate(0.001 8.448)"
											fill="#374957"
										/>
										<path
											id="Vector-2"
											data-name="Vector"
											d="M13.5,2.061A7.037,7.037,0,0,1,13.5,12l-3.262,3.26a1,1,0,0,1-1.415-1.415l3.262-3.262A5.028,5.028,0,0,0,8.526,2h0A4.993,4.993,0,0,0,4.972,3.473L1.707,6.735A1,1,0,0,1,.293,5.32L3.56,2.057A6.983,6.983,0,0,1,8.528,0h0A6.979,6.979,0,0,1,13.5,2.061Z"
											transform="translate(8.447 0)"
											fill="#374957"
										/>
										<path
											id="Vector-3"
											data-name="Vector"
											d="M7.009,0a1,1,0,0,1,.711,1.695l-6,6A1,1,0,1,1,.305,6.281l6-6A1,1,0,0,1,7.009,0Z"
											transform="translate(7.988 8.012)"
											fill="#374957"
										/>
									</svg>
									<div className="task-title">{attchament.title}</div>
								</a>
								<div className="todolist-attchament-right">
									<ButtonDeleteSmall
										action={() =>
											toDoListContext?.deleteAttchament(
												toDoListId,
												attchament.id
											)
										}
									/>
								</div>
							</div>
						))}
					</div>
				) : (
					<p>Nenhum anexo adicionado.</p>
				)}
			</label>
		</div>
	);
};

export default TodoListAttchaments;
