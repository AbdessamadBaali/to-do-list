let addTaskEl = document.getElementById("addTask") 
let taskEl = document.getElementById("task")
let inputEl = document.getElementById("taskToDo")

addTaskEl.onclick = function(){
    if(inputEl.value.length == 0){
        alert("please  Enter a Task")
    } else {
        let myTasks = []
        myTasks.push(inputEl.value)
        let theTask = ""
        theTask  += `
            <div id="theTask" class="shadow"> 
                <p class="taskName">${inputEl.value} <p/>
                <i id="delete" class="far fa-trash-alt fs-2 ms-2"></i>
            </div>
           ` 
        for (var i=0;i<myTasks.length;i++){
            taskEl.innerHTML += theTask
        }
        
        inputEl.value = '' 

        var current_taskes = document.querySelectorAll("#delete")
        let counterTasksaEl = document.getElementById("counterTasks")
        for (var i=0; i<current_taskes.length;i++){0
            current_taskes[i].onclick = function(){
                this.parentNode.parentNode.remove();
                counterTasksaEl.textContent -=  1
            }
        }
        for (var i=0; i<current_taskes.length;i++){
            counterTasksaEl.textContent = i + 1
        }

        let tasks = document.querySelectorAll(".taskName")
        for (var i=0; i<tasks.length;i++){
            tasks[i].onclick = function(){
                this.classList.toggle("completed")
            }
        }
    }
}

// =============================

