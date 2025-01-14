import { Dispatch, SetStateAction, useContext, useState } from "react";
import { IToDoListMain } from "../../../../types/IToDoList";
import { UseToDoListContext } from "../../../../context/useToDoListContext";
import InputSimple from "../../../communs/inputs/simples";
import InputDescription from "../../../communs/inputs/description";
import InputColor from "../../../communs/inputs/color";
import InputDate from "../../../communs/inputs/date";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import TodoListTask from "../task";
import TodoListAttchaments from "../attchaments";
import TodolistComments from "../comments";
import "./style.scss";

interface type {
	setOpened: Dispatch<SetStateAction<boolean>>;
	todolist: IToDoListMain;
}

const ModalEditToDoList = ({ setOpened, todolist }: type) => {
	const [toDoList, setToDoList] = useState<IToDoListMain>(todolist);
	const [loading, setLoading] = useState(false);
	const [btnLoadingDelete, setBtnLoadingDelete] = useState(false);
	const toDoListContext = useContext(UseToDoListContext);

	const handleSubmit = () => {
		setLoading(true);
		toDoListContext?.editToDoList(toDoList);
		setOpened(false);
	};

	const handleDelete = () => {
		if (!toDoList.id) {
			return;
		}
		setBtnLoadingDelete(true);
		toDoListContext?.deleteToDoList(toDoList.id);
	};
	return (
		<div className="modal-edit-todolist">
			<div className="content">
				<InputSimple
					title="Título:"
					input={toDoList.title}
					setInput={(e) => setToDoList({ ...toDoList, title: e })}
					placeholder="Digite um título..."
				/>
				<InputDescription
					title="Descrição:"
					description={toDoList.description}
					setDescription={(e) => setToDoList({ ...toDoList, description: e })}
				/>
				<InputColor
					title="Cor:"
					color={toDoList.color}
					setColor={(e) => setToDoList({ ...toDoList, color: e })}
				/>
				<InputDate
					title="Data:"
					date={toDoList.date}
					setDate={(e) => setToDoList({ ...toDoList, date: e })}
				/>
				{todolist.id && (
					<>
						<TodoListTask
							todolistId={todolist.id}
							tasks={todolist.toDoListTasks}
						/>
						<TodoListAttchaments
							toDoListId={todolist.id}
							attchaments={todolist.toDoListAttchaments}
						/>
						<TodolistComments
							comments={todolist.toDoListComments}
							toDoListId={todolist.id}
						/>
					</>
				)}
			</div>
			<ButtonSimple
				title={"Salvar"}
				type="success"
				status={
					toDoList.color.length > 0 &&
					toDoList.date > 0 &&
					toDoList.description.length > 0 &&
					toDoList.title.length > 0
				}
				loading={loading}
				action={handleSubmit}
			/>

			<ButtonSimple
				title="Deletar"
				type="delete"
				status={true}
				loading={btnLoadingDelete}
				action={() => {
					handleDelete();
				}}
			/>
		</div>
	);
};

export default ModalEditToDoList;
