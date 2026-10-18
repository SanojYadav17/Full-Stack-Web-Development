let todo =
JSON.parse(localStorage.getItem("todos")) || [];

const taskInput =
document.getElementById("taskInput");

const addBtn =
document.getElementById("addBtn");

const taskList =
document.getElementById("taskList");

const taskCount =
document.getElementById("taskCount");

function saveTasks(){
    localStorage.setItem(
        "todos",
        JSON.stringify(todo)
    );
}

function updateCount(){
    taskCount.innerText =
    `${todo.length} Tasks`;
}

function renderTasks(){

    taskList.innerHTML = "";

    todo.forEach((task,index)=>{

        const li =
        document.createElement("li");

        const span =
        document.createElement("span");

        span.innerText = task.text;

        span.classList.add("task-text");

        if(task.completed){
            span.classList.add("completed");
        }

        span.addEventListener("click",()=>{

            todo[index].completed =
            !todo[index].completed;

            saveTasks();

            renderTasks();
        });

        const deleteBtn =
        document.createElement("button");

        deleteBtn.innerText =
        "Delete";

        deleteBtn.classList.add(
            "delete-btn"
        );

        deleteBtn.addEventListener(
            "click",
            ()=>{

                todo.splice(index,1);

                saveTasks();

                renderTasks();
            }
        );

        li.appendChild(span);

        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });

    updateCount();
}

function addTask(){

    const taskText =
    taskInput.value.trim();

    if(taskText === ""){
        return;
    }

    todo.push({
        text:taskText,
        completed:false
    });

    saveTasks();

    renderTasks();

    taskInput.value = "";

    taskInput.focus();
}

addBtn.addEventListener(
    "click",
    addTask
);

taskInput.addEventListener(
    "keypress",
    (e)=>{
        if(e.key === "Enter"){
            addTask();
        }
    }
);

renderTasks();