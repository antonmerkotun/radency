import {ADD_TASK, ARCHIVE_TASK, EDIT_TASK, REMOVE_TASK} from "./store/types/types";

export interface ITask {
    id: number,
    name: string | number,
    creation: string,
    category: string,
    content: string | number,
    isArchives: boolean
}

// Action
interface IAddTaskAction {
    type: typeof ADD_TASK,
    payload: ITask
}

interface IArchiveTaskAction {
    type: typeof ARCHIVE_TASK,
    payload: {
        id: number
    }
}

interface IEditTaskAction {
    type: typeof EDIT_TASK,
    payload: ITask
}

interface IRemoveTaskAction {
    type: typeof REMOVE_TASK,
    payload: {
        id: number
    }
}

export type TaskActionTypes = IAddTaskAction | IArchiveTaskAction | IEditTaskAction | IRemoveTaskAction