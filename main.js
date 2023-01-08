let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let taskscontainer = document.querySelector(".tasks-content");
let noTasksMsg = document.querySelector(".no-tasks-message");
let taskCoutn = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");


window.onload = function (){
    theInput.focus();
};

//addign the task
theAddButton.onclick = function() {
    if(theInput.value === ''){
        swal("oops!", "!Write yuor task", "success");
    }else{

    let noTasksMsg = document.querySelector(".no-tasks-message");

    // cheack if span with no tasks massege is exist
    if(document.body.contains(document.querySelector(".no-tasks-message"))) {
        
        // Remove No Tasks Message
        noTasksMsg.remove();
    }

    //careat span text
    let mainspan = document.createElement("span");

    //careat delete button
    let deleteElement = document.createElement("sapn");

    //create the span text 
    let text = document.createTextNode(theInput.value);

    //add text to Delete Button
    let deletetext = document.createTextNode("Delete");

    //Add text to span 
    mainspan.appendChild(text);

    // Add class to span 
    mainspan.className= 'taskbox';

    // Add text to delete button
    deleteElement.appendChild(deletetext);

    // add class to delete buttom
    deleteElement.className = "delet" ;

    // add delete button to main span 
    mainspan.appendChild(deleteElement);

    // add the task to the container
    taskscontainer.appendChild(mainspan);

    // empty the imput
    theInput.value = '' ;

    //focus on field
    theInput.focus();

    // calculate tasks 
    calculateTasks()

    }
};


document.addEventListener('click', function (e) {

    // Delete Task
    if (e.target.className == 'delet') {

    // Remove Current Task
    e.target.parentNode.remove();

    // Check Number Of Tasks Inside The Container
    if (taskscontainer.childElementCount == 0) {

        createNoTasks();
    }}

   // Finish Task
    if (e.target.classList.contains('taskbox')) {

        // Toggle Class 'finished'
        e.target.classList.toggle("finished");
}

     // Calculate Tasks
    calculateTasks();

});


// Function To Create No Tasks Message
function createNoTasks() {

    // Create Message Span Element
    let msgSpan = document.createElement("span");

    // Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");

    // Add Text To Message Span Element
    msgSpan.appendChild(msgText);

   // Add Class To Message Span
    msgSpan.className = 'no-tasks-message';

    // Append The Message Span Element To The Task Container
    taskscontainer.appendChild(msgSpan);
}


// Function To Calculate Tasks
function calculateTasks() {

    // Calculate All Tasks
    taskCoutn.innerHTML = document.querySelectorAll('.tasks-content .taskbox').length;

    // Calculate Completed Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;
}



