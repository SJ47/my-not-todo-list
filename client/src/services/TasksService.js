// const baseURL = 'http://localhost:5000/api/tasks/'
const baseURL = './tasks.json'

const TasksService = {
    getTasks() {
        return fetch(baseURL)
            .then(res => res.json())
    }
    // postGame(payload) {
    //     return fetch(baseURL, {
    //         method: 'POST',
    //         body: JSON.stringify(payload),
    //         headers: { 'Content-Type': 'application/json' }
    //     })
    //         .then(res => res.json())
    // },

    // deleteGame(id) {
    //     return fetch(baseURL + id, {
    //         method: 'DELETE'
    //     })
    // }
}

export default TasksService