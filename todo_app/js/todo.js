//this function gets the task from input*/
function get_todos() {
    //creates an array to hold tasks that were inputted.
    var todos = new Array; 
    //this pulls the task that was saved in the browser's memory.
    var todos_str = localStorage.getItem('todo');
    /*If the input is not null then JSON.parse will communicate with the web browser to make the task a JavaScript object.*/
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

//This function adds the inputted task to the get_todos function array when the add item button is clicked.
function add() {
    //saves the value inputted to variable task.
    var task = document.getElementById('task').value;
    //create local variable todos, set to the array created by the function get_todos()
    var todos = get_todos();
    //adds the new task to the array
    todos.push(task);
    //saves the task list in the browser's memory
    localStorage.setItem('todo', JSON.stringify(todos));
    //resets the input value to zero, ready for next task.
    document.getElementById('task').value = "";
    //runs the show function
    show();

    return false;
}
//shows the task list on the screen
function show() {
    //create local variable todos, run function get_todos to get updated task list.
    var todos = get_todos();
    //creates variable html and starts the string.
    var html = "<ul>";
    //iterates through the task list, and adds tasks as a string of html 
    for (var i = 0; i < todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    //shows list on screen. 
    document.getElementById('todos').innerHTML = html;
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}
//runs add when the add item button is clicked to update the most recent task on the list.
document.getElementById('add').addEventListener('click', add);
//This will kep the inputs displayed permanently on the screen
show();



function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}