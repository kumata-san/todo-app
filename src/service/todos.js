import axios from 'axios'

const url = '/todos'
const getAll = () => {
    return axios.get(url)
}

const add = newTodo => {
    return axios.post(url, newTodo)
}

const remove = id => {
    return axios.delete(url + '/' + id)
}

const todos = {
    getAll: getAll,
    add: add,
    remove: remove
}

export default todos