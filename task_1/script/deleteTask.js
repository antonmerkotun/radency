import {data} from "./index.js";
import {updateLocalStorage} from "./updateLocalStorage.js";
import {activeTasks} from "./activeTasks.js";
import {archiveTasks} from "./archiveTasks.js";
import {overallTable} from "./overallTable.js";

export const deleteTask = (e) => {
    data.forEach(element => {
        if (+e.target.id === element.id) {
            const myIndex = data.indexOf(element);
            if (myIndex !== -1) {
                data.splice(myIndex, 1);
            }
        }
    })
    updateLocalStorage()
    activeTasks()
    archiveTasks()
    overallTable()
}