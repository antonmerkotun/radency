const overall = document.querySelector('.overall-table')

const createOverallTable = () => {
    const data = JSON.parse(localStorage.getItem('data'))
    if (data) {
        const idea = data.filter(el => el.noteCategory === 'Idea')
        const ideaActive = idea.filter(el => el.isArchives === false)
        const ideaArchives = idea.filter(el => el.isArchives === true)
        const task = data.filter(el => el.noteCategory === 'Task')
        const taskActive = task.filter(el => el.isArchives === false)
        const taskArchives = task.filter(el => el.isArchives === true)
        const random = data.filter(el => el.noteCategory === 'Random Thought')
        const randomActive = random.filter(el => el.isArchives === false)
        const randomArchives = random.filter(el => el.isArchives === true)

        return `
            <div class="list-all">
                <li>Idea</li>
                <li class="li_active">${ideaActive.length}</li>
                <li class="li_archived">${ideaArchives.length}</li>
            </div>
            <div class="list-all">
                <li>Task</li>
                <li class="li_active">${taskActive.length}</li>
                <li class="li_archived">${taskArchives.length}</li>
            </div>
            <div class="list-all">
                <li>Random Thought</li>
                <li class="li_active">${randomActive.length}</li>
                <li class="li_archived">${randomArchives.length}</li>
            </div>
    `
    }
}


export const overallTable = () => {
    overall.innerHTML = ''
    overall.innerHTML = createOverallTable()
}