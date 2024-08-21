import { useContext, useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { IToDoListMain } from "../../../types/IToDoList";
import { UseToDoListContext } from "../../../context/useToDoListContext";
import TitleOfComponent from "../../communs/titleOfComponent";
import ToDoListCard from "../card";
import Skeleton from "react-loading-skeleton";
import "./style.scss";

interface Column {
    id: number;
    name: string;
    items: IToDoListMain[];
}

const Kanban = () => {
    const toDoList = useContext(UseToDoListContext);

    const [columns, setColumns] = useState<Record<string, Column>>({
        toDo: { id: 1, name: "To do", items: [] },
        inProgress: { id: 2, name: "In Progress", items: [] },
        done: { id: 3, name: "Done", items: [] }
    });

    useEffect(() => {
        if (toDoList?.state) {
            toDoList.state.sort((a, b) => b.id - a.id);
            toDoList.state.sort((a, b) => a.status - b.status);
            const toDoItems = toDoList.state.filter((item) => item.status === 1).sort((a, b) => a.position - b.position);
            const inProgressItems = toDoList.state.filter((item) => item.status === 2).sort((a, b) => a.position - b.position);
            const doneItems = toDoList.state.filter((item) => item.status === 3).sort((a, b) => a.position - b.position);

            const updatedColumns = {
                toDo: { ...columns.toDo, items: toDoItems },
                inProgress: { ...columns.inProgress, items: inProgressItems },
                done: { ...columns.done, items: doneItems }
            };

            setColumns(updatedColumns);
        }
    }, [toDoList?.state]);

    const onDragEnd = async (result: DropResult) => {
        if (!result.destination) return;

        const { source, destination } = result;
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];

        if (source.droppableId !== destination.droppableId) {
            const [removed] = sourceItems.splice(source.index, 1);
            removed.position = destination.index;
            removed.status = destColumn.id;

            destItems.splice(destination.index, 0, removed);

            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });

            const updatedSourceItems = sourceItems.map((item, index) => (item.position !== index ? { ...item, position: index, status: sourceColumn.id } : item));
            const updatedDestItems = destItems.map((item, index) => (item.position !== index ? { ...item, position: index, status: destColumn.id } : item));

            toDoList?.editPosition([...updatedSourceItems, ...updatedDestItems]);
        } else {
            const [removed] = sourceItems.splice(source.index, 1);
            removed.position = destination.index;

            sourceItems.splice(destination.index, 0, removed);

            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                }
            });

            const updatedItems = sourceItems.map((item, index) =>
                item.position !== index
                    ? {
                          ...item,
                          position: index,
                          status: sourceColumn.id
                      }
                    : item
            );

            toDoList?.editPosition(updatedItems);
        }
    };

    return (
        <div>
            <div className="todolist-table">
                <DragDropContext onDragEnd={onDragEnd}>
                    {Object.entries(columns).map(([columnId, column]) => (
                        <div
                            className="todolist-columm"
                            key={columnId}>
                            <TitleOfComponent title={column.name} />
                            <div>
                                <Droppable
                                    droppableId={columnId}
                                    key={columnId}>
                                    {(provided) => (
                                        <div
                                            className="todolist-content"
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}>
                                            {toDoList?.loaded ? (
                                                column.items.map((item, index) => (
                                                    <Draggable
                                                        key={item.id}
                                                        draggableId={String(item.id)}
                                                        index={index}>
                                                        {(provided) => (
                                                            <div
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}>
                                                                <ToDoListCard toDoList={item} />
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))
                                            ) : (
                                                <SkeletonCards />
                                            )}
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        </div>
                    ))}
                </DragDropContext>
            </div>
        </div>
    );
};

const SkeletonCards = () => (
    <>
        {[...Array(3)].map((_, index) => (
            <div
                className="todolist-card box"
                key={index}>
                <div className="todolist-card-top">
                    <div className="todolist-card-top-left">
                        <div className="todolist-color">
                            <Skeleton style={{ width: "6px", height: "100%" }} />
                        </div>
                        <div className="todolist-text">
                            <div className="todolist-title">
                                <Skeleton style={{ width: "226px", height: "14px" }} />
                            </div>
                            <div className="todolist-description">
                                <Skeleton style={{ width: "176px", height: "12px" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="todolist-botton">
                    <Skeleton style={{ width: "76px", height: "14px" }} />
                    <Skeleton style={{ width: "14px", height: "14px" }} />
                    <Skeleton style={{ width: "14px", height: "14px" }} />
                </div>
            </div>
        ))}
    </>
);

export default Kanban;
