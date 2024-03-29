const todoInput = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add');
const todoListContainer = document.querySelector('#todo-list');
let idNumber = 0;
let alertBanner = document.querySelector('#alert');

const addHandler = function () {
    const todoText = todoInput.value;
    //console.log(todoText);
    createNewTask(todoText);

    if (todoText !== ''){
        alertBanner.style.display = 'none';
        createNewTask(todoText);
        todoInput.value = '';
    }else{
        alertBanner.style.display = 'block';
    }
}

const createNewTask = function (text) {
    idNumber = idNumber + 1;
    //idNumber++;
    //idNumber += 1;
    const task = document.createElement('div');
    task.innerHTML = `
    <div class="task-name">
                <input type="checkbox" id="task-${idNumber}">
                <label for="task-${idNumber}">${text}</label>
            </div>
            <button class = "delete-btn">
                <svg class = "delete-btn-svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                    <path
                        d="M10.5 2.75C10.0858 2.75 9.75 3.08579 9.75 3.5V4.25H5.5C5.08579 4.25 4.75 4.58579 4.75 5C4.75 5.41421 5.08579 5.75 5.5 5.75H19.5C19.9142 5.75 20.25 5.41421 20.25 5C20.25 4.58579 19.9142 4.25 19.5 4.25H15.25V3.5C15.25 3.08579 14.9142 2.75 14.5 2.75H10.5Z"
                        fill="#F06A6D" />
                    <path
                        d="M10.5 11.15C10.9142 11.15 11.25 11.4858 11.25 11.9L11.25 18.9C11.25 19.3142 10.9142 19.65 10.5 19.65C10.0858 19.65 9.75 19.3142 9.75 18.9L9.75 11.9C9.75 11.4858 10.0858 11.15 10.5 11.15Z"
                        fill="#F06A6D" />
                    <path
                        d="M15.25 11.9C15.25 11.4858 14.9142 11.15 14.5 11.15C14.0858 11.15 13.75 11.4858 13.75 11.9V18.9C13.75 19.3142 14.0858 19.65 14.5 19.65C14.9142 19.65 15.25 19.3142 15.25 18.9V11.9Z"
                        fill="#F06A6D" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M6.49142 8.41718C6.53363 8.03735 6.85468 7.75 7.23684 7.75H17.7632C18.1453 7.75 18.4664 8.03735 18.5086 8.41718L18.7087 10.2185C19.0715 13.4838 19.0715 16.7793 18.7087 20.0446L18.689 20.222C18.545 21.5181 17.5404 22.5517 16.2489 22.7325C13.7618 23.0807 11.2382 23.0807 8.75108 22.7325C7.45954 22.5517 6.455 21.5181 6.31098 20.222L6.29128 20.0446C5.92846 16.7793 5.92846 13.4838 6.29128 10.2185L6.49142 8.41718ZM7.90812 9.25L7.7821 10.3842C7.43152 13.5394 7.43152 16.7238 7.7821 19.879L7.8018 20.0563C7.87011 20.671 8.34652 21.1612 8.95905 21.247C11.3082 21.5758 13.6918 21.5758 16.0409 21.247C16.6535 21.1612 17.1299 20.671 17.1982 20.0563L17.2179 19.879C17.5685 16.7238 17.5685 13.5394 17.2179 10.3842L17.0919 9.25H7.90812Z"
                        fill="#F06A6D" />
                </svg>
            </button>
    `;
    task.classList = 'task';
    todoListContainer.appendChild(task);

    task.addEventListener('click', function deleteHandler(e){
        if (e.target.classList.contains('delete-btn') || 
        e.target.classList.contains('delete-btn-svg')){
            console.log('presionaste el boton de borrar');

        }
    })
}

addBtn.addEventListener('click', addHandler);