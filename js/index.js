const taskManager = new TaskManager(0);
taskManager.load();
taskManager.render();


const nameId = document.getElementById("name_form");
const errMsg = document.getElementById("name_valid");
const addTaskBtn = document.getElementById("submit_btn");
//const dateId = document.getElementById("date_form");
//const dateErrMsg = document.getElementById("date_valid");
//const statusId = document.getElementById("inputStatus");
//const statusErrMsg = document.getElementById("status_valid");
const asignId = document.getElementById("assigned_form");
//const asignErrMsg = document.getElementById("asign_valid");
const form = document.getElementById("collapseExample");
const descId = document.getElementById("description_form");
const descErrMsg = document.getElementById("desc_valid");
validationFail = 0;
//calanderblock function
//dateId.min = new Date().toISOString().split("T")[0];

function clearFormField() {
    nameId.value = "";
    descId.value = "";
    asignId.value = "";
    //dateId.value = "";
    //statusId.value = "";
    errMsg.innerHTML ="";
    descErrMsg.innerHTML = "";
    //asignErrMsg.innerHTML = "";
   // dateErrMsg.innerHTML = "";
    //statusErrMsg.innerHTML = "";

}
const validateDesc = () => {
    if (nameId.value.trim().length < 5) {
        errMsg.style.color = 'red';
        errMsg.innerHTML = "<span>Task name must be greater than 5 characters in length</span>";
        validationFail++;
    }
    else {
        errMsg.innerHTML = "";

    };

    if (descId.value.trim() === "" || descId.value.trim().length > 200) {
        descErrMsg.style.color = 'red';
        descErrMsg.innerHTML = "<span>Description can't be empty or greater then 200 characters</span>";
        validationFail++;
    }
    else {
        descErrMsg.innerHTML = "";
    }

    // if (asignId.value.trim().length > 15||asignId.value.trim().length <1) {
    //     asignErrMsg.style.color = 'red';
    //     asignErrMsg.innerHTML = "<span>Name must be less than 15 characters in length and can not be empty</span>";
    //     validationFail++;
    // }
    // else {
    //     asignErrMsg.innerHTML = "";
    // }
    // if (dateId.value === "") {
    //     dateErrMsg.style.color = 'red';
    //     dateErrMsg.innerHTML = "<span>Invalid date</span>";
    //     validationFail++;
    // }
    // else {
    //     dateErrMsg.innerHTML = "";
    // }
    // if (statusId.value === "") {
    //     statusErrMsg.style.color = 'red';
    //     statusErrMsg.innerHTML = "<span>Status can't be empty</span>";
    //     validationFail++;
    // } else {
    //     statusErrMsg.innerHTML = "";
    // }



    if (validationFail > 0) {
        validationFail = 0;
        return;
    }
    else {

        taskManager.addTask(
            nameId.value,
            descId.value,
            asignId.value,
           // dateId.value,
           // statusId.value
        );
        console.log("Name: " + nameId.value);
        console.log("Description: " + descId.value);
        console.log("Assign To: " + asignId.value);
        //console.log("Date: " + dateId.value);
       // console.log("Status: " + statusId.value);
        clearFormField();
        taskManager.render();
        taskManager.save();
       // filterSelection(getCurrantlyActiveTab());
    }
}

form.addEventListener('submit', validateDesc);

//reset button functionality
const reset = document.getElementById("reset");
reset.addEventListener('click', clearFormField);

//done button changing status functionality
const card = document.getElementById("card");

function done(event) {

    // if (event.target.classList.contains("bi-check-lg")) {
    //     const parentTask =
    //         event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    //     const taskId = Number(parentTask.dataset.taskId);
    //     const task = taskManager.getTaskById(taskId);
    //     task.status = "Done";
    //     taskManager.save();
    //     taskManager.render();
    //    // filterSelection(getCurrantlyActiveTab());
        

    // }

    if (event.target.classList.contains("delete-button")) {
        const parentTask = event.target.parentElement.parentElement.parentElement;
        //console.log(parentTask);
        const taskId = Number(parentTask.dataset.taskId);
        //console.log(taskId);
        taskManager.deleteTask(taskId);
        taskManager.save();
        taskManager.render();
        //console.log(taskId);
        //filterSelection(getCurrantlyActiveTab());

    }
}
card.addEventListener('click', done);


//seperating cards acording status



// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// Show filtered elements
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }

// Hide elements that are not selected
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }

// Add active class to the current control button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// function getCurrantlyActiveTab(){
//   var current = document.getElementsByClassName("active")[0];
//   return current.id;
// }