import { useEffect, useState } from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { IToDoListMain, ITodolistPosition } from "../../../types/toDoList/IToDoList";
import TitleOfComponent from "../../communs/titleOfComponent";
import { useEditToDoList } from "../../../hooks/toDoList/useEditToDoList";
import ToDoListCard from "../card";
import Skeleton from "react-loading-skeleton";
import './style.scss';

interface Column {
    id: number;
    name: string;
    items: IToDoListMain[];
}

interface type {
    toDo: IToDoListMain[];
    inProgress: IToDoListMain[];
    done: IToDoListMain[];
    loaded: boolean
}

const Kanban = ({ toDo, inProgress, done, loaded }: type) => {

    const UseEditToDoList = useEditToDoList();

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
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) {
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
            setMovedItems({ items: destItems, columnId: destColumn.id });
        } else {
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
            setMovedItems({ items: copiedItems, columnId: column.id });
        }
    }

    useEffect(() => {
        movedItems.items.map((item) => {
            UseEditToDoList({ ...item, status: movedItems.columnId })
        });
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
                                                    {loaded ? column.items.map((item, index) => {
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
                                                    }) :
                                                        <>
                                                            <div className="todolist-card box">
                                                                <div className="todolist-card-top">
                                                                    <div className="todolist-card-top-left">
                                                                        <div className="todolist-color" >

                                                                            <Skeleton style={{ width: '6px', height: '100%', }} />
                                                                        </div>
                                                                        <div className="todolist-text">
                                                                            <div className="todolist-title">
                                                                                <Skeleton style={{ width: '226px', height: '14px', }} />
                                                                            </div>
                                                                            <div className="todolist-description">
                                                                                <Skeleton style={{ width: '176px', height: '12px', }} />

                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                                <div className="todolist-botton">
                                                                    <div >

                                                                        <Skeleton style={{ width: '76px', height: '14px', }} />
                                                                    </div>
                                                                    <div>
                                                                        <Skeleton style={{ width: '14px', height: '14px', }} />
                                                                    </div>
                                                                    <div>
                                                                        <Skeleton style={{ width: '14px', height: '14px', }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="todolist-card box">
                                                                <div className="todolist-card-top">
                                                                    <div className="todolist-card-top-left">
                                                                        <div className="todolist-color" >

                                                                            <Skeleton style={{ width: '6px', height: '100%', }} />
                                                                        </div>
                                                                        <div className="todolist-text">
                                                                            <div className="todolist-title">
                                                                                <Skeleton style={{ width: '226px', height: '14px', }} />
                                                                            </div>
                                                                            <div className="todolist-description">
                                                                                <Skeleton style={{ width: '176px', height: '12px', }} />

                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                                <div className="todolist-botton">
                                                                    <div >

                                                                        <Skeleton style={{ width: '76px', height: '14px', }} />
                                                                    </div>
                                                                    <div>
                                                                        <Skeleton style={{ width: '14px', height: '14px', }} />
                                                                    </div>
                                                                    <div>
                                                                        <Skeleton style={{ width: '14px', height: '14px', }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="todolist-card box">
                                                                <div className="todolist-card-top">
                                                                    <div className="todolist-card-top-left">
                                                                        <div className="todolist-color" >

                                                                            <Skeleton style={{ width: '6px', height: '100%', }} />
                                                                        </div>
                                                                        <div className="todolist-text">
                                                                            <div className="todolist-title">
                                                                                <Skeleton style={{ width: '226px', height: '14px', }} />
                                                                            </div>
                                                                            <div className="todolist-description">
                                                                                <Skeleton style={{ width: '176px', height: '12px', }} />

                                                                            </div>
                                                                        </div>
                                                                    </div>


                                                                </div>
                                                                <div className="todolist-botton">
                                                                    <div >

                                                                        <Skeleton style={{ width: '76px', height: '14px', }} />
                                                                    </div>
                                                                    <div>
                                                                        <Skeleton style={{ width: '14px', height: '14px', }} />
                                                                    </div>
                                                                    <div>
                                                                        <Skeleton style={{ width: '14px', height: '14px', }} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>



                                                    }
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
