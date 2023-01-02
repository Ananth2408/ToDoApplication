(function () {

    function init() {
        const date = new Date();
        const currentDate = date.toDateString();
        document.getElementById("date").innerHTML = currentDate;

        function addTask() {
            let newTask = document.getElementById("new-list");
            let newList = document.getElementById("side-list");

            if (newTask.value != "") {

                let list = document.createElement("li");
                list.appendChild(document.createTextNode(newTask.value));

                newList.appendChild(list);
                newTask.value = "";
            }
        }
    }
    init();
})();