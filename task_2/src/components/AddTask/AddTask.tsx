import React, {useState} from 'react';
import "./AddTask.css"
import {addTaskAction, editTaskAction} from "../../store/actions/tasksActions";
import {useDispatch} from "react-redux";

export default function AddTask({setStateModal, task = ''}: any): JSX.Element {
    const dispatch = useDispatch()
    const [inputName, setInputName] = useState(task.name || '');
    const [selectCategory, setSelectCategory] = useState(task.category || '');
    const [inputContent, setInputContent] = useState(task.content || '');

    const addTask = () => {
        if (selectCategory === '') {
            return
        }

        const newData = new Date()
        const year = newData.getFullYear()
        const month = newData.toLocaleString('eng', {month: 'long'})
        const dateNum = newData.getDate()
        const idDate = new Date().getTime()
        if (typeof task === 'string') {
            const task = {
                id: idDate,
                name: inputName,
                creation: `${month} ${dateNum}, ${year}`,
                category: selectCategory,
                content: inputContent,
                isArchives: false,
            }
            dispatch(addTaskAction(task))
            setInputName('')
            setSelectCategory('')
            setInputContent('')
        } else {
            const taskEdit = {
                id: task.id,
                name: inputName,
                creation: task.creation,
                category: selectCategory,
                content: inputContent,
                isArchives: task.isArchives,
            }
            dispatch(editTaskAction(taskEdit))
        }

        setStateModal(false)
    }

    return (
        <div className="add-task">
            <div className="add-task_body">
                <div className="add-task_name-category">
                    <div className="mt20">
                        <div>
                            <label htmlFor="name">Name</label>
                        </div>
                        <input className="input-name" id="name" type="text" value={inputName}
                               onChange={(e) => setInputName(e.target.value)}/>
                    </div>
                    <div className="mt20">
                        <div>
                            <label>Category</label>
                        </div>
                        <select className="select-category" value={selectCategory}
                                onChange={(e) => setSelectCategory(e.target.value)}>
                            <option value="" disabled>Select a category</option>
                            <option value="Task">Task</option>
                            <option value="Idea">Idea</option>
                            <option value="Random Thought">Random Thought</option>
                        </select>
                    </div>
                </div>
                <div className="mt20">
                    <div>
                        <div className="content-block">
                            <div>
                                <label htmlFor="content">Content</label>
                            </div>
                            <textarea className="textarea-content" id="content" value={inputContent}
                                      onChange={(e) => setInputContent(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <button className="mt20" onClick={addTask}>Save</button>
                <button className="modal-close" onClick={() => {
                    setStateModal(false)
                }}>Close
                </button>
            </div>
        </div>
    );
}

