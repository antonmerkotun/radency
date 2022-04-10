import { ITask } from "../type"

export type stateTasks = ITask[]

export const initialState: stateTasks = [
    {
        id: 1,
        name: '1',
        creation: 'May 07, 2021',
        category: "Idea",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur consequuntur culpa 20/03/2021",
        isArchives: false
    },
    {
        id: 2,
        name: '2',
        creation: 'April 02, 2022',
        category: "Task",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur consequuntur culpa",
        isArchives: false
    },
    {
        id: 3,
        name: '3',
        creation: 'May 19, 2020',
        category: "Random Thought",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur consequuntur culpa 13/02/1995",
        isArchives: true
    },
    {
        id: 4,
        name: '4',
        creation: 'April 22, 2021',
        category: "Random Thought",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur consequuntur culpa",
        isArchives: false
    }
]