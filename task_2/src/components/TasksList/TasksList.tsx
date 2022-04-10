import React, {useState} from 'react';
import {iconArchive, iconDelete, iconEdit} from '../../icon/iconUrl';
import {useDispatch} from "react-redux";
import Icon from "../Icon/Icon";
import "./TasksList.css"
import {archiveTaskAction, removeTaskAction} from "../../store/actions/tasksActions";
import AddTask from "../AddTask/AddTask";

interface ITask {
    tasks: any[],
    setStateModal: any
}

export default function TasksList({tasks}: ITask): JSX.Element {
    const dispatch = useDispatch()
    const [taskEdit, setTaskEdit] = useState(undefined);
    const [state, setState]: boolean | any = useState(false);

    const editTask = (e: any) => {
        tasks.forEach(task => {
            if (task.id === +e.target.id) {
                setState(true)
                setTaskEdit(task)
            }
        })
    }

    const archiveTask = (e: any) => {
        tasks.forEach(task => {
            if (task.id === +e.target.id) {
                dispatch(archiveTaskAction(task.id))
            }
        })
    }

    const deleteTask = (e: any) => {
        tasks.forEach(task => {
            if (task.id === +e.target.id) {
                dispatch(removeTaskAction(task.id))
            }
        })
    }

    return (
        <>
            {state === true && <AddTask setStateModal={setState} task={taskEdit}/>}
            {tasks.map(task => {
                let data = parseInt(task.content.replace(/[^\d]/g, ''))
                return <div className="list" id={task.id} key={task.id}>
                    <li><p className="list-item">{task.name}</p></li>

                    <li>{task.creation}</li>
                    <li>{task.category}</li>
                    <li><p className="list-item">{task.content}</p></li>
                    <li>{data ? data : ''}</li>
                    <li>
                        {!task.isArchives &&
                            <button className="button-list list-icon-edit" onClick={editTask}>
                                <Icon id={task.id} url={iconEdit}/>
                            </button>
                        }
                    </li>
                    <li>
                        <button id={task.id} className="button-list list-icon-archive" onClick={archiveTask}>
                            <Icon id={task.id} url={iconArchive}/>
                        </button>
                    </li>
                    <li>
                        <button id={task.id} className="button-list list-icon-delete" onClick={deleteTask}>
                            <Icon id={task.id} url={iconDelete}/>
                        </button>
                    </li>
                </div>
            })}
        </>
    );
}