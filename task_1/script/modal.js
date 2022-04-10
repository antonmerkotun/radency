import {data} from "./index.js";
import {Task} from "./createTask.js";
import {updateLocalStorage} from "./updateLocalStorage.js";
import {activeTasks} from "./activeTasks.js";
import {archiveTasks} from "./archiveTasks.js";
import {overallTable} from "./overallTable.js";

export function modalAdd(root, name = '', noteContent = '', id, noteCategory = '') {
    root.insertAdjacentHTML('afterbegin', `
    <div class="modal">
        <div class="modal_body">
        <button class="modal_button-close">Close</button>
        <ul>
            <li class="modal_body-li">
                <span>Name notes: </span>
                <input class="modal_body-name" type="text" name="creation" value=${name}>
            </li>
            <li class="modal_body-li">
                <span>Category: </span>
                <li>
                    <input class="checkbox-task" type="checkbox" name="option1" value="Task">
                    <span>Task</span>
                </li>
                <li>
                    <input class="checkbox-random" type="checkbox" name="option2" value="Random Thought">
                    <span>Random Thought</span>
                </li>
                <li>
                    <input class="checkbox-idea" type="checkbox" name="option3" value="Idea">
                    <span>Idea</span>
                </li>
            </li>
            <li class="modal_body-li">
                <span>Content: </span>
                <textarea class="modal_body-content" name="creation">${noteContent}</textarea>
            </li>
        </ul>
        <button class="modal_button-save">Save</button>
        </div>
    </div>
    `)
    const modal = document.querySelector('.modal')
    const buttonCreateNote = document.querySelector('.button_create-note')
    const buttonClose = document.querySelector('.modal_button-close')
    const modalButtonSave = document.querySelector('.modal_button-save')
    const nameNotesInput = document.querySelector('.modal_body-name')
    const textareaContent = document.querySelector('.modal_body-content')
    const checkboxTask = document.querySelector('.checkbox-task')
    const checkboxRandom = document.querySelector('.checkbox-random')
    const checkboxIdea = document.querySelector('.checkbox-idea')

    buttonCreateNote.style.display = 'none'
    let category
    if (noteCategory === 'Task') {
        checkboxTask.checked = true
        category = checkboxTask.value
    }
    if (noteCategory === 'Random Thought') {
        checkboxRandom.checked = true
        category = checkboxRandom.value
    }
    if (noteCategory === 'Idea') {
        checkboxIdea.checked = true
        category = checkboxIdea.value
    }


    buttonClose.addEventListener('click', () => {
        modal.remove()
        buttonCreateNote.style.display = 'block'
    })

    checkboxTask.addEventListener('change', () => {
        if (checkboxTask.checked) {
            category = checkboxTask.value
        }
    })
    checkboxRandom.addEventListener('change', () => {
        if (checkboxRandom.checked) {
            category = checkboxRandom.value
        }
    })
    checkboxIdea.addEventListener('change', () => {
        if (checkboxIdea.checked) {
            category = checkboxIdea.value
        }
    })

    modalButtonSave.addEventListener('click', () => {
        const second = new Date().getTime()

        if (nameNotesInput.value === '') {
            return
        }
        if (textareaContent.value === '') {
            return
        }
        const object = {
            id: second,
            name: nameNotesInput.value,
            noteCategory: category,
            noteContent: textareaContent.value,
            isArchives: false,
        }
        if (!object.noteCategory) {
            return;
        }
        if (id) {
            data.forEach(element => {
                if (+id === element.id) {
                    const myIndex = data.indexOf(element);
                    if (myIndex !== -1) {
                        data.splice(myIndex, 1);
                    }
                }
            })
        }
        data.push(new Task(object))
        modal.remove()
        buttonCreateNote.style.display = 'block'
        updateLocalStorage()
        activeTasks()
        archiveTasks()
        overallTable()
    })
}