import React from 'react'
import useSetPageTitle from '../../store/hooks/pageTitle/useSetPageTitle';
import ToDoListMain from '../../components/toDoList/main';

const PageToDoList = () => {

    const setPageTitle = useSetPageTitle();

    setPageTitle('To Do List');
    return (
        <ToDoListMain />
    )
}

export default PageToDoList