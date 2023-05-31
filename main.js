let inputField = document.querySelector("[type='text']");
let addbtn = document.getElementById("add");
let tasksContainer = document.querySelector(".tasks");

// function for adding new task :
function task() {
    if (inputField.value !== "") {
        let newtask = document.createElement("li");
        newtask.innerHTML = inputField.value;
        tasksContainer.prepend(newtask);

        let removeBtn = document.createElement("i");
        removeBtn.className = 'fa-solid fa-xmark';
        newtask.appendChild(removeBtn);
    }
    inputField.value = "";
    inputField.focus();
    saveDate();
}

tasksContainer.addEventListener("click", function (e) {
    // to make task done
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDate();
    // to remove a task
    } else if(e.target.tagName === "I") {
        e.target.parentElement.remove();
        saveDate();
    }
})

// to save data in the browser :
function saveDate() {
    localStorage.setItem("data", tasksContainer.innerHTML);
}
// to restore data from the browser :
function restoreDate() {
    tasksContainer.innerHTML = localStorage.getItem("data");
}
restoreDate();
inputField.focus();