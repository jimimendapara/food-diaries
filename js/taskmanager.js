
function createTaskHtml(id, name, description, assignTo) 
{
  const html=`<div class="card border-success mb-3" data-task-id="${id}">
  <div class="card-header bg-transparent border-success">${name}</div>
  <div class="card-body text-success">
    <p class="card-text">${assignTo}</p>
    <a class="p-2" href="#deletebutton"><i class="bi bi-trash text-danger delete-button"></i></a>
  </div>
  <div class="card-footer bg-transparent border-success">${description}</div>
</div>`
//   const html = `<li class="filterDiv todo list-group-item justify-content-between align-items-center col-sm-6 col-lg-4" data-task-id="${id}">
//   <div class="card border-light mb-3">
//   <div class="card-header bg-danger d-flex justify-content-between">
//     <span class="fw-bold text-white">this is date</span>
//     <span class="text-white small" id="status">this is status</span>
//   </div>
//   <div class="card-body">
//     <h5 class="card-title">name</h5>
//     <p class="card-text">discription</p>

//     <div class="card-footer bg-transparent border-danger d-flex justify-content-between">
//       <div class="">
//         <i class="bi bi-person text-danger"></i> <small class="text-muted">assign to</small>
//       </div>
//       <div>
//         <a class="p-2" href="#deletebutton"><i class="bi bi-trash text-danger delete-button"></i></a>
//         <a class="p-2" href="#donebutton"><i class="bi bi-check-lg text-success"></i></a>
//       </div>
//     </div>
//   </div>

// </div>
// </li>
// `
  return html;

};

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
  }

  addTask(name, discription, assignTo) {

    const task = {
      id: this.currentId++,
      name: name,
      discription: discription,
      assignTo: assignTo,
      //dueDate: dueDate,
      //status: status
    };
    this.tasks.push(task);
  }

  getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id === taskId) {
        foundTask = task;
      }
    }
    return foundTask;

  }


  render() {
    let tasksHtmlList = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      //console.log(task);

      // const date = new Date(task.dueDate);
      // const formattedDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

      const taskHtml = createTaskHtml(
        task.id,
        task.name,
        task.discription,
        task.assignTo,
        //formattedDate,
        //task.status

      );
      tasksHtmlList.push(taskHtml);
    }

    const tasksHtml = tasksHtmlList.join("");

    const tasksList = document.querySelector('#card');
    tasksList.innerHTML = tasksHtml;
  }

  save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
    const currentId = String(this.currentId);
    localStorage.setItem('currentId', currentId);
  }
  load() {
    if (localStorage.getItem('tasks')) {
      const tasksJson = localStorage.getItem('tasks');
      this.tasks = JSON.parse(tasksJson);

    }
    if (localStorage.getItem('currentId')) {

      const currentId = localStorage.getItem('currentId');
      this.currentId = Number(currentId);
    }

  }
  deleteTask(taskId) {
    const newTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id !== taskId) {
        newTasks.push(task);
      }
    }
    this.tasks = newTasks;
  }
}





