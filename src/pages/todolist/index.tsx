import { useContext, useEffect, useState } from "react";
import { UseTitleContext } from "../../context/useTitleContext";
import BoxFullpage from "../../components/communs/boxFullpage";
import ButtonAdd from "../../components/communs/buttons/add";
import Kanban from "../../components/toDoList/kanban";
import ModalAddToDoList from "../../components/toDoList/modalAddToDoList";
import "./style.scss";

const PageToDoList = () => {
	const title = useContext(UseTitleContext);
	useEffect(() => {
		title.setTitle("Lista de Tarefas");
	}, []);
	const [opened, setOpened] = useState(false);

	return (
		<div className="todolist-main">
			<Kanban />
			<ButtonAdd
				content={
					<BoxFullpage
						content={<ModalAddToDoList setOpened={setOpened} />}
						setOpened={setOpened}
						title="Adicionar Tarefa"
					/>
				}
				opened={opened}
				setOpened={setOpened}
			/>
		</div>
	);
};

export default PageToDoList;
