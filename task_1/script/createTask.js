export function Task(value) {
    const newData = new Date()
    const year = newData.getFullYear()
    const month = newData.toLocaleString('eng', {month: 'long'})
    const dateNum = newData.getDate()

    this.id = value.id
    this.name = value.name
    this.creation = `${month} ${dateNum}, ${year}`
    this.noteCategory = value.noteCategory
    this.noteContent = value.noteContent
    this.isArchives = value.isArchives
}