document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
  

    // kya space hai local storage me or usko display krte hai  

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  renderTasks();

  addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      tasks.push({ text: taskText, completed: false });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
      taskInput.value = "";
    }
  });
    //Function jo Tasks ko render kare page pe!
    function renderTasks() {
        taskList.innerHTML = "";
        tasks.forEach((task, index) => {
          const taskItem = document.createElement("li");
          taskItem.innerHTML = `
            <input type="checkbox" data-index="${index}" ${task.completed ? "checked" : ""}>
            <span>${task.text}</span>
            <button data-index="${index}">Delete</button>
          `;
          taskList.appendChild(taskItem);
        });
      }

    // CheckBox ko handel krne ke liye function 
    taskList.addEventListener("click", (event) => {
        if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
          const index = event.target.dataset.index;
          tasks[index].completed = event.target.checked;
          localStorage.setItem("tasks", JSON.stringify(tasks));
        }
      });
        // delete items handle krne keliye function !

        taskList.addEventListener("click", (event) => {
            if (event.target.tagName === "BUTTON") {
              const index = event.target.dataset.index;
              tasks.splice(index, 1);
              localStorage.setItem("tasks", JSON.stringify(tasks));
              renderTasks();
            }
          });
        });

// ye program Harsh Kumar ne banaya hai, Agar koi padh raha hai iska mtlb wo interested hai mere se baat krne keliye so can contact me 6202603974


