import { useState } from "react";
import { IToDoListMain } from "../../../types/IToDoList";
import { dateTimeAgo } from "../../../functions/date/dateTimeAgo";
import ModalEditToDoList from "../modalEditToDoList/main";
import BoxFullpage from "../../communs/boxFullpage";
import "./style.scss";

const ToDoListCard = ({ toDoList }: { toDoList: IToDoListMain }) => {
    const [opened, setOpened] = useState(false);
    return (
        <>
            <div
                className="todolist-card box"
                onClick={() => {
                    setOpened(true);
                }}>
                <div className="todolist-card-top">
                    <div className="todolist-card-top-left">
                        <div
                            className="todolist-color"
                            style={{ backgroundColor: toDoList.color }}></div>
                        <div className="todolist-text">
                            <h5 className="todolist-title">{toDoList.title}</h5>
                            <div className="todolist-description">{toDoList.description}</div>
                        </div>
                    </div>
                    <div className="todolist-card-top-right">
                        <img
                            src="./../../../../icons/options.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="todolist-botton">
                    <div className={`todolist-date ${+toDoList.date < new Date().getTime() ? "date-late" : ""}`}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13.637"
                            height="13.637"
                            viewBox="0 0 13.637 13.637">
                            <g
                                id="ic-contact-time"
                                transform="translate(0.5 0.5)">
                                <circle
                                    id="Elipse_26"
                                    data-name="Elipse 26"
                                    cx="6.319"
                                    cy="6.319"
                                    r="6.319"
                                    fill="none"
                                    stroke="#2b3136"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                />
                                <path
                                    id="Caminho_90"
                                    data-name="Caminho 90"
                                    d="M11.93,5.36V9.654h3.031"
                                    transform="translate(-5.655 -3.191)"
                                    fill="none"
                                    stroke="#2b3136"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1"
                                />
                            </g>
                        </svg>
                        <span className="span-small">{dateTimeAgo(new Date(toDoList.date))}</span>
                    </div>
                    {toDoList.toDoListTasks.length > 0 && (
                        <div>
                            <img
                                src="./../../../../icons/tasks.svg"
                                alt="Tasks"
                            />
                        </div>
                    )}
                    {toDoList.toDoListAttchaments.length > 0 && (
                        <div>
                            <img
                                src="./../../../../icons/attchaments.svg"
                                alt="Attchaments"
                            />
                        </div>
                    )}
                    {toDoList.toDoListComments.length > 0 && (
                        <div>
                            <img
                                src="./../../../../icons/comments.svg"
                                alt="Comments"
                            />
                        </div>
                    )}
                </div>
            </div>
            {opened ? (
                <BoxFullpage
                    title="Edit to do list"
                    content={
                        <ModalEditToDoList
                            todolist={toDoList}
                            setOpened={setOpened}
                        />
                    }
                    setOpened={setOpened}
                />
            ) : (
                ""
            )}
        </>
    );
};

export default ToDoListCard;
