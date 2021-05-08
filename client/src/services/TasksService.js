const baseURL = 'http://localhost:5000/api/tasks/'
// const baseURL = './tasks.json'

const TasksService = {
    getTasks() {
        return fetch(baseURL)
            .then(res => res.json())
    },

    postTask(payload) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
    },

    deleteTask(id) {
        return fetch(baseURL + id, {
            method: 'DELETE'
        })
    },

    updateTask(payload) {
        return fetch(baseURL + payload._id, {
            method: 'PUT',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
    }
}

export default TasksService