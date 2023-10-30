import React, { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { IToDoListMain, ITodolistPosition } from "../../../types/toDoList/IToDoList";
import ToDoListCard from "../card";
import './style.scss';
import useEditToDoListPostion from "../../../hooks/toDoList/useEditToDoListPostion";
import TitleOfComponent from "../../communs/titleOfComponent";

interface Column {
    id: number;
    name: string;
    items: IToDoListMain[];
}

interface type {
    toDo: IToDoListMain[];
    inProgress: IToDoListMain[];
    done: IToDoListMain[];
}

const Kanban = ({ toDo, inProgress, done }: type) => {
    const [movedItems, setMovedItems] = useState<{ items: IToDoListMain[], columnId: number }>({ items: [], columnId: -1 });

    const [taskStatus, setTaskStatus] = useState<Record<string, Column>>({
        toDo: {
            id: 1,
            name: "To do",
            items: toDo,
        },
        inProgress: {
            id: 2,
            name: "In Progress",
            items: inProgress,
        },
        done: {
            id: 3,
            name: "Done",
            items: done,
        },
    });
    const [columns, setColumns] = useState(taskStatus);

    useEffect(() => {
        setTaskStatus({
            toDo: {
                id: 1,
                name: "To do",
                items: toDo,
            },
            inProgress: {
                id: 2,
                name: "In Progress",
                items: inProgress,
            },
            done: {
                id: 3,
                name: "Done",
                items: done,
            },
        })
    }, [toDo, inProgress, done])

    useEffect(() => {
        setColumns(taskStatus)
    }, [taskStatus])

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) return;
        const { source, destination, draggableId } = result;

        if (source.droppableId !== destination.droppableId) {
            // Movimento entre colunas
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems,
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems,
                },
            });
            // Atualize o estado dos itens modificados com a lista de itens e o ID da coluna de destino
            setMovedItems({ items: destItems, columnId: destColumn.id });
        } else {
            // Movimento na mesma coluna
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems,
                },
            });
            // Atualize o estado dos itens modificados com a lista de itens e o ID da coluna original
            setMovedItems({ items: copiedItems, columnId: column.id });
        }
    }

    const UseEditToDoListPosition = useEditToDoListPostion();
    useEffect(() => {
        let array: ITodolistPosition[] = []
        movedItems.items.map((item, index) => {
            array.push({
                id: item.id,
                status: movedItems.columnId,
                position: index
            })

        })

        UseEditToDoListPosition(array)
    }, [movedItems])

    return (
        <div>
            <div className="todolist-table">
                <DragDropContext onDragEnd={onDragEnd}>
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <div className="todolist-columm"
                                key={columnId}
                            >
                                <TitleOfComponent title={column.name} />
                                <div >
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div className="todolist-content"
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                >
                                                    {column.items.map((item, index) => {
                                                        return (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={String(item.id)}
                                                                index={index}
                                                            >
                                                                {(provided, snapshot) => {
                                                                    return (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                        >
                                                                            {<ToDoListCard toDoList={item} />}
                                                                        </div>
                                                                    );
                                                                }}
                                                            </Draggable>
                                                        );
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            );
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        );
                    })}
                </DragDropContext>
            </div>
        </div>
    );
};

export default Kanban;
