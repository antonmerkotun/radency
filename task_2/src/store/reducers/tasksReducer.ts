import {ADD_TASK, ARCHIVE_TASK, EDIT_TASK, REMOVE_TASK} from "../types/types";
import {TaskActionTypes} from "../../type";
import {initialState, stateTasks} from "../initialState";

export const tasksReducer = (state = initialState, action: TaskActionTypes): stateTasks => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state, {
                    id: action.payload.id,
                    name: action.payload.name,
                    creation: action.payload.creation,
                    category: action.payload.category,
                    content: action.payload.content,
                    isArchives: action.payload.isArchives
                }
            ];
        case EDIT_TASK:
            return [...state].map(task => {
                if (task.id === action.payload.id) {
                    task = action.payload
                }
                return task;
            })
        case ARCHIVE_TASK:
            return [...state].map(task => {
                if (task.id === action.payload.id) {
                    task.isArchives = !task.isArchives;
                }
                return task
            })
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== action.payload.id);
        default:
            return state;
    }
}
