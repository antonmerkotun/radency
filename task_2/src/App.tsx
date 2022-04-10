import React, {useState} from 'react';
import './App.css'
import HeaderTable from "./components/HeaderTable/HeaderTable";
import Icon from "./components/Icon/Icon";
import {iconArchive, iconDelete} from './icon/iconUrl';
import TasksList from "./components/TasksList/TasksList";
import AddTask from './components/AddTask/AddTask';
import {useSelector} from "react-redux";
import OverallTable from "./components/OverallTable/OverallTable";

const App: React.FC = () => {
    const {tasks}: any = useSelector(state => state)
    const activeTasks = tasks.filter((task: any) => task.isArchives === false)
    const archiveTasks = tasks.filter((task: any) => task.isArchives === true)
    const [stateModal, setStateModal]: boolean | any = useState(false);

    function createCategoryTable(
        name: string,
        icon?: JSX.Element,
        activeTask?: [],
        archiveTask?: [],
    ) {
        return {name, icon, activeTask, archiveTask};
    }

    const categoryTable = [
        createCategoryTable('Name'),
        createCategoryTable('Created'),
        createCategoryTable('Category'),
        createCategoryTable('Content'),
        createCategoryTable('Dates'),
        createCategoryTable(''),
        createCategoryTable('', <Icon url={iconArchive}/>),
        createCategoryTable('', <Icon url={iconDelete}/>),
    ];

    const overallTable = [
        createCategoryTable('Note Category'),
        createCategoryTable('Active'),
        createCategoryTable('Archived'),
    ]


    const categoryOverallTable = [
        createCategoryTable('Task', undefined, activeTasks, archiveTasks),
        createCategoryTable('Idea', undefined, activeTasks, archiveTasks),
        createCategoryTable('Random Thought', undefined, activeTasks, archiveTasks),
    ]

    const openModal = () => {
        setStateModal(true)
    }

    return (
        <>
            {stateModal === true && <AddTask setStateModal={setStateModal}/>}
            <div className="container">
                <button className="button_create-task" onClick={openModal}>Create Task</button>
                <HeaderTable category={categoryTable}/>
                <TasksList tasks={activeTasks} setStateModal={setStateModal}/>
                <h4>Archive</h4>
                <TasksList tasks={archiveTasks} setStateModal={setStateModal}/>
                <HeaderTable category={overallTable}/>
                <OverallTable category={categoryOverallTable}/>
            </div>
        </>

    );
}

export default App
