var tasks = {};


var today = moment().format('dddd MMMM Do');

document.getElementById('currentDay').innerHTML = today;



var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing in localStorage, create tasks to occupy page
    if (!tasks) {
        tasks = {
            nine: [],
            ten: [],
            eleven: [],
            twelve: [],
            one: [],
            two: [],
            three: [],
            four: [],
            five: []
        }
    };

    // loop over object to get data

    $.each(tasks, function(time, arr) {

        // loop over sub-array
        arr.forEach(function(task) { 
            createTask(task.text, time)
        });
    });
}

var createTask = function(event, taskText) {

    var taskP = $("<p>").addClass("taskP").text(taskText);
    
    event.target.append(taskP);
};


