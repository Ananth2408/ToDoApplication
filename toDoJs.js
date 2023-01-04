const sideList = getElementById("side-list");
const newCategory = getElementById("new-list");
const newTask = getElementById("add-task");
const newTaskList = getElementById("task");
const selectedCategory = getElementById("category");
const categoryIcon = getElementById("category-icon");

const categories = [
    { icon: '<i class="fa fa-sun-o"></i>', name: "My Day", id: 1 },
    { icon: '<i class="fa fa-star-o"></i>', name: "Important", id: 2 },
    { icon: '<i class="fa fa-calendar"></i>', name: "Planned", id: 3 },
    { icon: '<i class="fa fa-user-o"></i>', name: "Assigned to me", id: 4 },
    { icon: '<i class="fa fa-flag-o"></i>', name: "Flagged email", id: 5 },
    { icon: '<i class="fa fa-home"></i>', name: "Tasks", id: 6 }
]
const tasks = [];

let choosedCategory = categories[0];

function init() {
    date();
    getcategory();
    addcategories();
    addTasks();
    taskBarContainer();
}

function getElementById(id) {
    return document.getElementById(id);
}

function createElement(name) {
    return document.createElement(name);
}

function date() {
    const date = new Date();
    const currentDate = date.toDateString();
    getElementById("date").innerHTML = currentDate;
}

function getcategory() {
    sideList.innerHTML = "";
    for (let i = 0; i < categories.length; i++) {
        const list = createElement("li");
        list.className = "list-container";
        list.setAttribute("id", i);
        list.setAttribute("onclick", "taskBar(this.id)");
        const icons = createElement("span");
        icons.className = "icon";
        const names = createElement("span");
        names.className = "text";
        icons.innerHTML = categories[i].icon;
        names.innerHTML = categories[i].name;
        list.appendChild(icons);
        list.appendChild(names);
        sideList.appendChild(list);
        sideList.insertBefore(list, sideList.children[i]);
    }
}

function addcategories() {
    newCategory.addEventListener("keypress", addcategory)
}

function addcategory() {
    if (event.key == "Enter") {
        const icons = '<i class="fa fa-bars"</i>';
        let names = newCategory.value;
        if (names == "") {
            names = "Untitled list";
        }
        let categoryId = categories.length + 1;
        categories.push({ icon: icons, name: names, id: categoryId++ });
        getcategory();
        newCategory.value = "";
    }
}

function taskBarContainer() {
    selectedCategory.innerHTML = categories[0].name;
    categoryIcon.innerHTML = categories[0].icon;
    choosedCategory = categories[0];
    getTask();
}

function taskBar(id) {
    var index = parseInt(id);
    selectedCategory.innerHTML = categories[index].name;
    categoryIcon.innerHTML = categories[index].icon;
    choosedCategory = categories[index];
    getTask();
}

function getTask() {
    newTaskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].categoryId == choosedCategory.id) {
            const checkbox = createElement("button");
            checkbox.className = "check-box-button";
            const important = createElement("button");
            important.className = "important-button";
            const names = createElement("p");
            const newTask = createElement("div")
            newTask.className = "new-task";
            const addTask = createElement("div");
            addTask.className = "new-task-bar";
            checkbox.innerHTML = '<i class="fa fa-circle-thin"</i>';
            names.innerHTML = tasks[i].taskName;
            important.innerHTML = '<i class="fa fa-star-o"</i>';
            addTask.appendChild(checkbox);
            newTask.appendChild(names);
            addTask.appendChild(newTask);
            addTask.appendChild(important);
            newTaskList.appendChild(addTask);
            newTask.value = "";
        }
    }
}

function addTasks() {
    newTask.addEventListener("keypress", addTask)
}

function addTask() {
    if (event.key == "Enter" && newTask.value != "") {
        let name = newTask.value;
        let taskId = tasks.length + 1;
        tasks.push({ id: taskId++, taskName: name, categoryId: choosedCategory.id });
        getTask();
        newTask.value = "";
    }
}
function menuBar() {
    const middleBar = document.getElementById("middle-column");
    const menuBar = document.getElementById("left-column");
    menuBar.classList.remove("left-column");
    menuBar.classList.add("left-column1");
    middleBar.classList.add("middle-column1");
}
init();