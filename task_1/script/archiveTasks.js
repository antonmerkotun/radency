import {data} from "./index.js";
import {archiveFunc} from "./archiveFunc.js";
import {deleteTask} from "./deleteTask.js";

const archiveTable = document.querySelector('.table_archive-true')

const createArchiveTable = (task) => {
    let data = parseInt(task.noteContent.replace(/[^\d]/g, ''))
    return `
          <div class="list" id=${task.id}>
            <li><p class="list-item">${task.name}</p></li>
            <li>${task.creation}</li>
            <li>${task.noteCategory}</li>
            <li><p class="list-item">${task.noteContent}</p></li>
            <li>${data || ''}</li>
            <li>

            </li>
            <li>
                <button class="button-list list-icon-archive" id=${task.id}>
                    <img id=${task.id} class="icon-list" src="../icon/archive.png" height="20px" width="20px" alt="icon-archive">
                </button>
            </li>
            <li>
                <button class="button-list list-icon-delete" id=${task.id}>
                    <img id=${task.id} class="icon-list" src="../icon/delete.png" height="20px" width="20px" alt="icon-delete">
                </button>
            </li>
        </div>
  `
}


export const archiveTasks = () => {
    archiveTable.innerHTML = ''
    if (data.length > 0) {
        const archiveTask = data.filter(el => el.isArchives === true)
        if (archiveTask) {
            archiveTask.forEach((item) => {
                archiveTable.innerHTML += createArchiveTable(item)
            })
        }
    }
    const archiveButton = document.querySelectorAll('.list-icon-archive')
    archiveButton.forEach(button => {
        button.addEventListener('click', archiveFunc)
    })

    const deleteButton = document.querySelectorAll('.list-icon-delete')
    deleteButton.forEach(button => {
        button.addEventListener('click', deleteTask)
    })
}