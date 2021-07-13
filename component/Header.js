import app from '../core.js'

function Header() {
    return app`
        <header class="header">
            <h1>TO DO LIST</h1>
            <input 
                class="new-todo" 
                placeholder="Nhập công việc cần làm!" 
                autofocus
                onkeyup = "event.keyCode === 13 && dispatch('ADD', this.value.trim())"
            >
        </header>
         `
}

export default Header