// only allow a single P to be created, otherwise edit if counts are not at 0 still
var editCount1 = 0;
var editCount2 = 0;
var editCount3 = 0;
var editCount4 = 0;
var editCount5 = 0;
var editCount6 = 0;
var editCount7 = 0;
var editCount8 = 0;
var editCount9 = 0;

// today
var today = moment().format('dddd MMMM Do');

document.getElementById('currentDay').innerHTML = today;

var saveTasks = function() {
    // set string storage values for converted paragraphs after clicking save button
    var nineStorage = $("#nineP").text().trim();
    var tenStorage = $("#tenP").text().trim();
    var elevenStorage = $("#elevenP").text().trim();
    var twelveStorage = $("#twelvePP").text().trim();
    var oneStorage = $("#onePP").text().trim();
    var twoStorage = $("#twoPP").text().trim();
    var threeStorage = $("#threePP").text().trim();
    var fourStorage = $("#fourPP").text().trim();
    var fiveStorage = $("#fivePP").text().trim();

    // save to object
    var tasks = {
        "nine": nineStorage,
        // count
        "nineCo": editCount1,
        "ten": tenStorage,
        "tenCo": editCount2,
        "eleven": elevenStorage,
        "elevenCo": editCount3,
        "twelve": twelveStorage,
        "twelveCo": editCount4,
        "one": oneStorage,
        "oneCo": editCount5,
        "two": twoStorage,
        "twoCo": editCount6,
        "three": threeStorage,
        "threeCo": editCount7,
        "four": fourStorage,
        "fourCo": editCount8,
        "five": fiveStorage,
        "fiveCo": editCount9
    }
    // store in local storage as string
    localStorage.setItem("tasks", JSON.stringify(tasks));

}


// tasks will be loaded from the point of entering/refreshing the page
var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing in localStorage, create tasks to occupy page
    if (!tasks) {
        tasks = {
            nine: "",
            nineCo: "",
            ten: "",
            tenCo: "",
            eleven: "",
            elevenCo: "",
            twelve: "",
            twelveCo: "",
            one: "",
            oneCo: "",
            two: "",
            twoCo: "",
            three: "",
            threeCo: "",
            four: "",
            fourCo: "",
            five: "",
            fiveCo: ""
        }
    } else {

        // load and append p's from the object which was parsed from LS
        var task9 = $("<p>").addClass("taskP d-flex").attr("id", "nineP");
        var nineAEl = $("#nineA");
        nineAEl.append(task9);
        $(task9).text(tasks.nine);


        var task10 = $("<p>").addClass("taskP d-flex").attr("id", "tenP");
        var tenAEl = $("#tenA");
        tenAEl.append(task10);
        $(task10).text(tasks.ten);

        var task11 = $("<p>").addClass("taskP d-flex").attr("id", "elevenP");
        var elevenAEl = $("#elevenA");
        elevenAEl.append(task11);
        $(task11).text(tasks.eleven);


        var task12 = $("<p>").addClass("taskP d-flex").attr("id", "twelvePP");
        var twelvePEl = $("#twelveP");
        twelvePEl.append(task12);
        $(task12).text(tasks.twelve);

        var task1 = $("<p>").addClass("taskP d-flex").attr("id", "onePP");
        var onePEl = $("#oneP");
        onePEl.append(task1);
        $(task1).text(tasks.one);


        var task2 = $("<p>").addClass("taskP d-flex").attr("id", "twoPP");
        var twoPEl = $("#twoP");
        twoPEl.append(task2);
        $(task2).text(tasks.two);

        var task3 = $("<p>").addClass("taskP d-flex").attr("id", "threePP");
        var threePEl = $("#threeP");
        threePEl.append(task3);
        $(task3).text(tasks.three);


        var task4 = $("<p>").addClass("taskP d-flex").attr("id", "fourPP");
        var fourPEl = $("#fourP");
        fourPEl.append(task4);
        $(task4).text(tasks.four);

        var task5 = $("<p>").addClass("taskP d-flex").attr("id", "fivePP");
        var fivePEl = $("#fiveP");
        fivePEl.append(task5);
        $(task5).text(tasks.five);

        //load from the object to identify if there is already a p in place (parsed from LS)
        editCount1 = tasks.nineCo;
        editCount2 = tasks.tenCo;
        editCount3 = tasks.elevenCo;
        editCount4 = tasks.twleveCo;
        editCount5 = tasks.oneCo;
        editCount6 = tasks.twoCo;
        editCount7 = tasks.threeCo;
        editCount8 = tasks.fourCo;
        editCount9 = tasks.fiveCo;
    }
}

// div area for timeslot - 9 -
$("#nineA").click(function() {
    // if nothing's been created there yet
    if (editCount1 === 0) { 

    editCount1 += 1;

    // create p and identify the div
    var taskP = $("<p>").addClass("taskP d-flex");

    var nineAEl = $("#nineA");

    nineAEl.append(taskP);

    // text of the new paragraph as a value, this is redundant but i don't want to change it, see else if 
    var text = $(taskP).text().trim();

    var textInput = $("<textarea maxlength='80'>").addClass("taskP d-flex").val(text);

    // replace the p with a textinput
    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");
    
    // add id and class to the new textbox to allow button to select it
    $(textInput).attr("id", "nineText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount1 > 0) {
        // text is in a P condition, already been edited once
        var text = $("#nineP").text().trim();

        var textInput = $("<textarea maxlength='80'>").val(text);

        $("#nineP").replaceWith(textInput);

        textInput.trigger("focus");

        // add id and class to the new textbox to allow button to select it
        $(textInput).attr("id", "nineText");

        $(textInput).addClass("taskP d-flex");
    }
});

// save the textarea into a new paragraph function, use the text from the box
$("#nineButton").on("click", function() {

    text = $("#nineText").val();

    $("#nineText").replaceWith("<p id='nineP' class='taskP d-flex'>");

    $("#nineP").text(text);

    saveTasks();

});

// div area for timeslot - 10 -
$("#tenA").click(function() {

    if (editCount2 === 0) { 

    editCount2 += 1;

    var taskP = $("<p>").addClass("taskP d-flex");

    var tenAEl = $("#tenA");

    tenAEl.append(taskP);

    var text = $(taskP).text().trim();

    var textInput = $("<textarea maxlength='80'>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "tenText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount2 > 0) {
    
        var text = $("#tenP").text().trim();

        var textInput = $("<textarea maxlength='80'>").val(text);

        $("#tenP").replaceWith(textInput);

        textInput.trigger("focus");

        $(textInput).attr("id", "tenText");

        $(textInput).addClass("taskP d-flex");
 
    }
});

$("#tenButton").on("click", function() {

    text = $("#tenText").val();

    $("#tenText").replaceWith("<p id='tenP' class='taskP d-flex'>");

    $("#tenP").text(text);

    saveTasks();
});

// div area for timeslot - 11 -
$("#elevenA").click(function() {
   
    if (editCount3 === 0) { 

    editCount3 += 1;

    var taskP = $("<p>").addClass("taskP d-flex");

    var elevenAEl = $("#elevenA");

    elevenAEl.append(taskP);

    var text = $(taskP).text().trim();

    var textInput = $("<textarea maxlength='80'>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "elevenText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount3 > 0) {
    
        var text = $("#elevenP").text().trim();

        var textInput = $("<textarea maxlength='80'>").val(text);

        $("#elevenP").replaceWith(textInput);

        textInput.trigger("focus");

        $(textInput).attr("id", "elevenText");

        $(textInput).addClass("taskP d-flex");
 
    }
});

$("#elevenButton").on("click", function() {

    text = $("#elevenText").val();

    $("#elevenText").replaceWith("<p id='elevenP' class='taskP d-flex'>");

    $("#elevenP").text(text);

    saveTasks();
});

// div area for timeslot - 12 -
$("#twelveP").click(function() {
   
    if (editCount4 === 0) { 

    editCount4 += 1;

    var taskP = $("<p>").addClass("taskP d-flex");

    var twelvePEl = $("#twelveP");

    twelvePEl.append(taskP);

    var text = $(taskP).text().trim();

    var textInput = $("<textarea maxlength='80'>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "twelveText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount4 > 0) {
        
        var text = $("#twelvePP").text().trim();

        var textInput = $("<textarea maxlength='80'>").val(text);

        $("#twelvePP").replaceWith(textInput);

        textInput.trigger("focus");

        $(textInput).attr("id", "twelveText");

        $(textInput).addClass("taskP d-flex");
 
    }
});

$("#twelveButton").on("click", function() {

    text = $("#twelveText").val();

    $("#twelveText").replaceWith("<p id='twelvePP' class='taskP d-flex'>");

    $("#twelvePP").text(text);

    saveTasks();
});

// div area for timeslot - 1 -
$("#oneP").click(function() {
   
    if (editCount5 === 0) { 

    editCount5 += 1;

    var taskP = $("<p>").addClass("taskP d-flex");

    var onePEl = $("#oneP");

    onePEl.append(taskP);

    var text = $(taskP).text().trim();

    var textInput = $("<textarea maxlength='80'>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "oneText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount5 > 0) {
        
        var text = $("#onePP").text().trim();

        var textInput = $("<textarea maxlength='80'>").val(text);

        $("#onePP").replaceWith(textInput);

        textInput.trigger("focus");

        $(textInput).attr("id", "oneText");

        $(textInput).addClass("taskP d-flex");
 
    }
});

$("#oneButton").on("click", function() {

    text = $("#oneText").val();

    $("#oneText").replaceWith("<p id='onePP' class='taskP d-flex'>");

    $("#onePP").text(text);

    saveTasks();
});

// div area for timeslot - 2 -
$("#twoP").click(function() {
    
    if (editCount6 === 0) { 

    editCount6 += 1;

    var taskP = $("<p>").addClass("taskP d-flex");

    var twoPEl = $("#twoP");

    twoPEl.append(taskP);

    var text = $(taskP).text().trim();

    var textInput = $("<textarea maxlength='80'>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "twoText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount6 > 0) {
        
        var text = $("#twoPP").text().trim();

        var textInput = $("<textarea maxlength='80'>").val(text);

        $("#twoPP").replaceWith(textInput);

        textInput.trigger("focus");

        $(textInput).attr("id", "twoText");

        $(textInput).addClass("taskP d-flex");
 
    }
});

$("#twoButton").on("click", function() {

    text = $("#twoText").val();

    $("#twoText").replaceWith("<p id='twoPP' class='taskP d-flex'>");

    $("#twoPP").text(text);

    saveTasks();
});

// div area for timeslot - 3 -
$("#threeP").click(function() {
   
    if (editCount7 === 0) { 

    editCount7 += 1;

    var taskP = $("<p>").addClass("taskP d-flex");

    var threePEl = $("#threeP");

    threePEl.append(taskP);

    var text = $(taskP).text().trim();

    var textInput = $("<textarea maxlength='80'>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "threeText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount7 > 0) {
        
        var text = $("#threePP").text().trim();

        var textInput = $("<textarea maxlength='80'>").val(text);

        $("#threePP").replaceWith(textInput);

        textInput.trigger("focus");

        $(textInput).attr("id", "threeText");

        $(textInput).addClass("taskP d-flex");
 
    }
});

$("#threeButton").on("click", function() {

    text = $("#threeText").val();

    $("#threeText").replaceWith("<p id='threePP' class='taskP d-flex'>");

    $("#threePP").text(text);
    
    saveTasks();
});

// div area for timeslot - 4 -
$("#fourP").click(function() {
    
    if (editCount8 === 0) { 

    editCount8 += 1;

    var taskP = $("<p>").addClass("taskP d-flex");

    var fourPEl = $("#fourP");

    fourPEl.append(taskP);

    var text = $(taskP).text().trim();

    var textInput = $("<textarea maxlength='80'>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "fourText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount8 > 0) {
        
        var text = $("#fourPP").text().trim();

        var textInput = $("<textarea maxlength='80'>").val(text);

        $("#fourPP").replaceWith(textInput);

        textInput.trigger("focus");

        $(textInput).attr("id", "fourText");

        $(textInput).addClass("taskP d-flex");
 
    }
});

$("#fourButton").on("click", function() {

    text = $("#fourText").val();

    $("#fourText").replaceWith("<p id='fourPP' class='taskP d-flex'>");

    $("#fourPP").text(text);

    saveTasks();
});

// div area for timeslot - 5 -
$("#fiveP").click(function() {
    
    if (editCount9 === 0) { 

    editCount9 += 1;

    var taskP = $("<p>").addClass("taskP d-flex");

    var fivePEl = $("#fiveP");

    fivePEl.append(taskP);

    var text = $(taskP).text().trim();

    var textInput = $("<textarea maxlength='80'>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "fiveText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount9 > 0) {
      
        var text = $("#fivePP").text().trim();

        var textInput = $("<textarea maxlength='80'>").val(text);

        $("#fivePP").replaceWith(textInput);

        textInput.trigger("focus");

        $(textInput).attr("id", "fiveText");

        $(textInput).addClass("taskP d-flex");
 
    }
});

$("#fiveButton").on("click", function() {

    text = $("#fiveText").val();

    $("#fiveText").replaceWith("<p id='fivePP' class='taskP d-flex'>");

    $("#fivePP").text(text);

    saveTasks();
});


var timeSlotsRefresh = function() {
    
    var today = new Date();
    var time = today.getHours();

    // select timeslots by class and remove the class before refreshing 
    var timeSlots = $(".col-8 border-gradient border-gradient-purple d-flex align-items-center")
    $(timeSlots).removeClass("present past future");

    nineEl = 9;

    // if number in hours is less than its in the past, if its greater than its in the future else present
    if (nineEl < time) {
       $("#nineA").addClass("past");
    } else if (nineEl > time) {
       $("#nineA").addClass("future");
    } else { 
       $("#nineA").addClass("present");
    }

    tenEl = 10;

    if (tenEl < time) {
       $("#tenA").addClass("past")
    } else if (tenEl > time) {
       $("#tenA").addClass("future");
    } else { 
       $("#tenA").addClass("present");
    }

    elevenEl = 11;

    if (elevenEl < time) {
       $("#elevenA").addClass("past");
    } else if (elevenEl > time) {
       $("#elevenA").addClass("future");
    } else { 
       $("#elevenA").addClass("present");
    }

    twelveEl = 12;

    if (twelveEl < time) {
       $("#twelveP").addClass("past")
    } else if (twelveEl > time) {
       $("#twelveP").addClass("future");
    } else { 
       $("#twelveP").addClass("present");
    }

    oneEl = 13;

    if (oneEl < time) {
       $("#oneP").addClass("past");
    } else if (oneEl > time) {
       $("#oneP").addClass("future");
    } else { 
       $("#oneP").addClass("present");
    }

    twoEl = 14;

    if (twoEl < time) {
       $("#twoP").addClass("past")
    } else if (twoEl > time) {
       $("#twoP").addClass("future");
    } else { 
       $("#twoP").addClass("present");
    }

    threeEl = 15;

    if (threeEl < time) {
       $("#threeP").addClass("past");
    } else if (threeEl > time) {
       $("#threeP").addClass("future");
    } else { 
       $("#threeP").addClass("present");
    }

    fourEl = 16;

    if (fourEl < time) {
       $("#fourP").addClass("past")
    } else if (fourEl > time) {
       $("#fourP").addClass("future");
    } else { 
       $("#fourP").addClass("present");
    }

    fiveEl = 17;

    if (fiveEl < time) {
       $("#fiveP").addClass("past")
    } else if (fiveEl > time) {
       $("#fiveP").addClass("future");
    } else { 
       $("#fiveP").addClass("present");
    }


}

loadTasks();

timeSlotsRefresh();

// refresh the page every 5 minutes 
setInterval(timeSlotsRefresh, 300000);