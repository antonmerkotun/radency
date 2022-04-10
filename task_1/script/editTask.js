import {data} from "./index.js";
import {modalAdd} from "./modal.js";


export const editTask = (e) => {
    const root = document.querySelector('#root')
    data.forEach(element => {
        if (+e.target.id === element.id) {
            modalAdd(root, element.name, element.noteContent, element.id, element.noteCategory)
        }
    })
}