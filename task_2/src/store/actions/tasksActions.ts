import {ADD_TASK, ARCHIVE_TASK, EDIT_TASK, REMOVE_TASK} from "../types/types";
import {ITask, TaskActionTypes} from "../../type";

export const addTaskAction = (task: ITask): TaskActionTypes => ({
    type: ADD_TASK,
    payload: {
        ...task
    },
})

export const archiveTaskAction = (id: number): TaskActionTypes => ({
    type: ARCHIVE_TASK,
    payload: {
        id,
    },
})


export const editTaskAction = (task: ITask): TaskActionTypes => ({
    type: EDIT_TASK,
    payload: {
        ...task
    },
})


export const removeTaskAction = (id: number): TaskActionTypes => ({
    type: REMOVE_TASK,
    payload: {
        id,
    }
})