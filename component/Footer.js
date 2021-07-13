import app from '../core.js'
import { connect } from '../store.js'

function Footer({ todos, filters, filter }) {
    return app`
        <footer class="footer">
            <span class="todo-count">
                <strong>${todos.filter(filters.active).length}
                </strong> item left
            </span>
            <ul class="filters">
                ${Object.keys(filters).map(type => app`
                    <li>
                        <a class="${filter === type && 'selected'}" href="#" 
                        onclick="dispatch('SWITCH_FILTER', '${type}')">
                        ${type[0].toUpperCase() + type.slice(1)}</a>
                    </li>
                `)}
            </ul>
            ${todos.filter(filters.completed).length > 0 &&
        app`<button class="clear-completed" onclick="dispatch('CLEAR_COMPLETE')">
        Clear completed</button>`}
        </footer>
     `
}

export default connect()(Footer)