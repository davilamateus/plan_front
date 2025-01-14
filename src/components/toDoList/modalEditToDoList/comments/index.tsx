import { useContext, useState } from "react";
import { IToDoListComments } from "../../../../types/IToDoList";
import { dateTimeAgo } from "../../../../functions/date/dateTimeAgo";
import { UseToDoListContext } from "../../../../context/useToDoListContext";
import BtnActionSmall from "../../comuns/btnActionSmall";
import InputSimple from "../../../communs/inputs/simples";
import ButtonSimple from "../../../communs/buttons/simple/simple";
import ButtonDeleteSmall from "../../../communs/buttons/deleteSmall";
import InputDescription from "../../../communs/inputs/description";
import "./style.scss";

interface type {
	comments?: IToDoListComments[];
	toDoListId: number;
}

const TodolistComments = ({ comments, toDoListId }: type) => {
	const [inputOpened, setInputOpened] = useState(false);
	const [loading, setLoading] = useState(false);
	const [comment, setComment] = useState({
		title: "",
		description: "",
		toDoListId,
	});

	comments?.sort((a, b) => b.id - a.id);

	const toDoListContext = useContext(UseToDoListContext);
	const handleSubmit = () => {
		setLoading(true);
		toDoListContext?.addComment(toDoListId, comment);
		setTimeout(() => {
			setLoading(false);
			setInputOpened(false);
			setComment({ title: "", description: "", toDoListId });
		}, 2000);
	};

	return (
		<div>
			<label>
				<div className="todolist-head">
					<h4>Comentários</h4>
					<BtnActionSmall
						inputOpened={inputOpened}
						setInputOpened={setInputOpened}
					/>
				</div>
				{inputOpened && (
					<label className="todolist-comments-input">
						<InputSimple
							title={"Título:"}
							input={comment.title}
							setInput={(e) => setComment({ ...comment, title: e })}
							placeholder="Digite um título..."
						/>
						<InputDescription
							title="Descrição:"
							description={comment.description}
							setDescription={(e) => setComment({ ...comment, description: e })}
						/>
						<ButtonSimple
							type="success"
							title={"Adicionar"}
							loading={loading}
							status={comment.title !== "" && comment.description !== ""}
							action={handleSubmit}
						/>
					</label>
				)}
				{comments && comments.length > 0 ? (
					<div className="box">
						{comments.map((comments: IToDoListComments) => (
							<div key={comments.id} className="todolist-comments-card">
								<div className="todolist-comments-left">
									<div className="todolist-comments-title">
										{comments.title}
									</div>
									<div className="todolist-comments-description">
										{comments.description}
									</div>
									<div className="todolist-comments-date">
										{dateTimeAgo(new Date(comments.createdAt))}
									</div>
								</div>
								<div className="todolist-comments-right">
									<ButtonDeleteSmall
										action={() =>
											toDoListContext?.deleteComment(toDoListId, comments.id)
										}
									/>
								</div>
							</div>
						))}
					</div>
				) : (
					<p> Nenhum comentário adicionado.</p>
				)}
			</label>
		</div>
	);
};

export default TodolistComments;
