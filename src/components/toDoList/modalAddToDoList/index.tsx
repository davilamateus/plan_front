import { Dispatch, SetStateAction, useContext, useState } from "react";
import { IToDoListAdd } from "../../../types/IToDoList";
import { UseToDoListContext } from "../../../context/useToDoListContext";
import ButtonSimple from "../../communs/buttons/simple/simple";
import InputSimple from "../../communs/inputs/simples";
import InputDescription from "../../communs/inputs/description";
import InputColor from "../../communs/inputs/color";
import InputDate from "../../communs/inputs/date";
import "./style.scss";

type prop = {
    setOpened: Dispatch<SetStateAction<boolean>>;
};

const ModalAddToDoList = ({ setOpened }: prop) => {
    const [toDo, setToDo] = useState<IToDoListAdd>({
        title: "",
        description: "",
        color: "",
        date: new Date().getTime()
    });
    const [loading, setLoading] = useState(false);

    const toDoList = useContext(UseToDoListContext);
    const handleAddTodoList = () => {
        setLoading(true);
        toDoList?.addToDoList(toDo);
        setTimeout(() => {
            setOpened(false);
        }, 2000);
    };

    return (
        <div className="modal-add-todolist">
            <InputSimple
                title="Title"
                input={toDo.title}
                setInput={(e) => setToDo((prev) => ({ ...prev, title: e }))}
                placeholder="Type a title for your to do list..."
            />
            <InputDescription
                title="Description"
                description={toDo.description}
                setDescription={(e) => setToDo((prev) => ({ ...prev, description: e }))}
            />
            <InputColor
                title="Color"
                color={toDo.color}
                setColor={(e) => setToDo((prev) => ({ ...prev, color: e }))}
            />
            <InputDate
                title="Date"
                date={toDo.date}
                setDate={(e) => setToDo((prev) => ({ ...prev, date: e }))}
            />
            <ButtonSimple
                title={"Add"}
                type="success"
                status={toDo.title !== "" && toDo.description !== "" && toDo.color !== "" && toDo.date > 0}
                loading={loading}
                action={handleAddTodoList}
            />
        </div>
    );
};

export default ModalAddToDoList;
