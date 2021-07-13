import storage from '/assets/utils/storage.js'

const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIndex: null
}

const actions = {
    ADD({ todos }, title) {
        if (title) {
            todos.push({ title, completed: false })
            storage.set(todos)
        }
    },
    TOGGLE({ todos }, index) {
        const todo = todos[index]
        todo.completed = !todo.completed
        storage.set(todos)
    },
    TOGGLE_ALL({ todos }, completed) {
        todos.forEach((todo) => todo.completed = completed)
        storage.set(todos)
    },
    DELETE({ todos }, index) {
        todos.splice(index, 1)
        storage.set(todos)
    },
    SWITCH_FILTER(state, filter) {
        state.filter = filter
    },
    CLEAR_COMPLETE(state) {
        state.todos = state.todos.filter(state.filters.active)
        storage.set(state.todos)
    },
    START_EDIT(state, index) {
        state.editIndex = index
    },
    END_EDIT(state, title) {
        if (state.editIndex !== null) {
            if (title) {
                state.todos[state.editIndex].title = title
                storage.set(state.todos)
            } else {
                this.DELETE(state, state.editIndex)
            }
            state.editIndex = null
        }
    },
    CANCEL_EDIT(state) {
        state.editIndex = null
    }
}

export default function reducer(state = init, action, ...args) {
    actions[action] && actions[action](state, ...args)
    return state
    // switch (action) {
    //     case 'ADD':
    //         const [title] = args
    //         return {
    //             ...state,
    //             todos: [...state.todos, {
    //                 title,
    //                 completed: false
    //             }]
    //         }
    //     default:
    //         return state
    //         break
    // }
}