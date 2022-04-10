import {modalAdd} from "./modal.js";
import {activeTasks} from "./activeTasks.js";
import {archiveTasks} from "./archiveTasks.js";
import {overallTable} from "./overallTable.js";

const root = document.querySelector('#root')
const buttonCreateNote = document.querySelector('.button_create-note')

export let data
!localStorage.data ? data = [] : data = JSON.parse(localStorage.getItem('data'))

activeTasks()
archiveTasks()
overallTable()

buttonCreateNote.addEventListener('click', () => {
    modalAdd(root)
})







































