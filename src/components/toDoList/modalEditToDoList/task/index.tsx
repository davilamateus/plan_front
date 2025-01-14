import { useContext, useState } from "react";
import { IToDoListTasks } from "../../../../types/IToDoList";
import { UseToDoListContext } from "../../../../context/useToDoListContext";
import BtnActionSmall from "../../comuns/btnActionSmall";
import InputSimple from "../../../communs/inputs/simples";
import InputDescription from "../../../communs/inputs/description";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import ButtonDeleteSmall from "../../../communs/buttons/deleteSmall";
import "./style.scss";

interface type {
	tasks?: IToDoListTasks[];
	todolistId: number;
}

const TodoListTask = ({ tasks, todolistId }: type) => {
	const [task, setTask] = useState<IToDoListTasks>({
		title: "",
		description: "",
		status: false,
		toDoListId: todolistId,
		id: 0,
	});
	const [inputOpened, setInputOpened] = useState(false);
	const [loading, setLoading] = useState(false);

	const toDoListContext = useContext(UseToDoListContext);

	const handleSubmit = () => {
		setLoading(true);
		toDoListContext?.addTask(todolistId, task);
		setTimeout(() => {
			setInputOpened(false);
			setLoading(false);
			setTask({ ...task, title: "", description: "" });
		}, 2000);
	};

	return (
		<div>
			<label>
				<div className="todolist-head">
					<h4>Etapas</h4>
					<BtnActionSmall
						inputOpened={inputOpened}
						setInputOpened={setInputOpened}
					/>
				</div>
				{inputOpened && (
					<label className="todolist-input">
						<InputSimple
							title={"Título:"}
							input={task.title}
							setInput={(e) => setTask({ ...task, title: e })}
							placeholder="Digite um título.."
						/>
						<InputDescription
							title={"Descrição:"}
							description={task.description}
							setDescription={(e) => setTask({ ...task, description: e })}
						/>
						<ButtonSimple
							type="success"
							title={"Adicionar"}
							loading={loading}
							status={task.title !== "" && task.description !== ""}
							action={() => handleSubmit()}
						/>
					</label>
				)}

				{tasks && tasks.length > 0 ? (
					<div className="box">
						{tasks.map((task: IToDoListTasks) => (
							<div
								key={task.id}
								className={`task-card ${
									task.status === true ? "task-done" : ""
								}`}
							>
								<div
									className="task-left"
									onClick={() =>
										toDoListContext?.editTask(todolistId, task.id, !task.status)
									}
								>
									<div className="task-status">
										{task.status === true ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="25.65"
												height="20.65"
												viewBox="0 0 25.65 20.65"
											>
												<g
													id="Grupo_3944"
													data-name="Grupo 3944"
													transform="translate(-944.672 -402.679)"
												>
													<line
														id="Linha_586"
														data-name="Linha 586"
														x2="7"
														y2="7"
														transform="translate(947.5 413.5)"
														fill="none"
														stroke="#707070"
														strokeLinecap="round"
														strokeWidth="4"
													/>
													<line
														id="Linha_587"
														data-name="Linha 587"
														y1="15"
														x2="13"
														transform="translate(954.5 405.5)"
														fill="none"
														stroke="#707070"
														strokeLinecap="round"
														strokeWidth="4"
													/>
												</g>
											</svg>
										) : null}
									</div>
									<div>
										<div className="task-title">{task.title}</div>
										<div className="task-description">{task.description}</div>
									</div>
								</div>
								<div className="task-right">
									<ButtonDeleteSmall
										action={() =>
											toDoListContext?.deleteTask(todolistId, task.id)
										}
									/>
								</div>
							</div>
						))}
					</div>
				) : (
					<p>Nenhuma etapa cadastrada.</p>
				)}
			</label>
		</div>
	);
};

export default TodoListTask;
