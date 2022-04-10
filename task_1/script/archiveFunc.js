import {data} from "./index.js";
import {updateLocalStorage} from "./updateLocalStorage.js";
import {activeTasks} from "./activeTasks.js";
import {archiveTasks} from "./archiveTasks.js";
import {overallTable} from "./overallTable.js";

export const archiveFunc = (e) => {
    data.forEach(element => {
        if (+e.target.id === element.id) {
           return  element.isArchives = !element.isArchives
        }
    })
    updateLocalStorage()
    activeTasks()
    archiveTasks()
    overallTable()
}