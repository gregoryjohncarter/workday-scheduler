// empty storage object
var tasks = {};

// only allow a single text element to be created, otherwise edit if counts are not at 0 still
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



var loadTasks = function() {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    // if nothing in localStorage, create tasks to occupy page
    if (!tasks) {
        tasks = {
            nine: "",
            ten: "",
            eleven: "",
            twelve: "",
            one: "",
            two: "",
            three: "",
            four: "",
            five: ""
        }
    };
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

    // text of the class which was 
    var text = $(taskP).text().trim();

    var textInput = $("<textarea>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "nineText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount1 > 0) {
        // text is in a P condition, already been edited once
        var text = $("#nineP").text().trim();
        var textInput = $("<textarea>").val(text);

        $("#nineP").replaceWith(textInput);

        textInput.trigger("focus");

        $(textInput).attr("id", "nineText");

        $(textInput).addClass("taskP d-flex");
 
    }
});

$("#nineButton").on("click", function() {

    text = $("#nineText").val();

    $("#nineText").replaceWith("<p id='nineP' class='taskP d-flex'>");

    $("#nineP").text(text);

});

// div area for timeslot - 10 -
$("#tenA").click(function() {
    // if nothing's been created there yet
    if (editCount2 === 0) { 

    editCount2 += 1;

    // create p and identify the div
    var taskP = $("<p>").addClass("taskP d-flex");

    var tenAEl = $("#tenA");

    tenAEl.append(taskP);

    // text of the class which was 
    var text = $(taskP).text().trim();

    var textInput = $("<textarea>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "tenText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount2 > 0) {
        // text is in a P condition, already been edited once
        var text = $("#tenP").text().trim();
        var textInput = $("<textarea>").val(text);

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

});

// div area for timeslot - 11 -
$("#elevenA").click(function() {
    // if nothing's been created there yet
    if (editCount3 === 0) { 

    editCount3 += 1;

    // create p and identify the div
    var taskP = $("<p>").addClass("taskP d-flex");

    var elevenAEl = $("#elevenA");

    elevenAEl.append(taskP);

    // text of the class which was 
    var text = $(taskP).text().trim();

    var textInput = $("<textarea>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "elevenText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount3 > 0) {
        // text is in a P condition, already been edited once
        var text = $("#elevenP").text().trim();
        var textInput = $("<textarea>").val(text);

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

});

// div area for timeslot - 12 -
$("#twelveP").click(function() {
    // if nothing's been created there yet
    if (editCount4 === 0) { 

    editCount4 += 1;

    // create p and identify the div
    var taskP = $("<p>").addClass("taskP d-flex");

    var twelvePEl = $("#twelveP");

    twelvePEl.append(taskP);

    // text of the class which was 
    var text = $(taskP).text().trim();

    var textInput = $("<textarea>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "twelveText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount4 > 0) {
        // text is in a P condition, already been edited once
        var text = $("#twelvePP").text().trim();
        var textInput = $("<textarea>").val(text);

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

});

// div area for timeslot - 1 -
$("#oneP").click(function() {
    // if nothing's been created there yet
    if (editCount5 === 0) { 

    editCount5 += 1;

    // create p and identify the div
    var taskP = $("<p>").addClass("taskP d-flex");

    var onePEl = $("#oneP");

    onePEl.append(taskP);

    // text of the class which was 
    var text = $(taskP).text().trim();

    var textInput = $("<textarea>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "oneText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount5 > 0) {
        // text is in a P condition, already been edited once
        var text = $("#onePP").text().trim();
        var textInput = $("<textarea>").val(text);

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

});

// div area for timeslot - 2 -
$("#twoP").click(function() {
    // if nothing's been created there yet
    if (editCount6 === 0) { 

    editCount6 += 1;

    // create p and identify the div
    var taskP = $("<p>").addClass("taskP d-flex");

    var twoPEl = $("#twoP");

    twoPEl.append(taskP);

    // text of the class which was 
    var text = $(taskP).text().trim();

    var textInput = $("<textarea>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "twoText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount6 > 0) {
        // text is in a P condition, already been edited once
        var text = $("#twoPP").text().trim();
        var textInput = $("<textarea>").val(text);

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

});

// div area for timeslot - 3 -
$("#threeP").click(function() {
    // if nothing's been created there yet
    if (editCount7 === 0) { 

    editCount7 += 1;

    // create p and identify the div
    var taskP = $("<p>").addClass("taskP d-flex");

    var threePEl = $("#threeP");

    threePEl.append(taskP);

    // text of the class which was 
    var text = $(taskP).text().trim();

    var textInput = $("<textarea>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "threeText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount7 > 0) {
        // text is in a P condition, already been edited once
        var text = $("#threePP").text().trim();
        var textInput = $("<textarea>").val(text);

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

});

// div area for timeslot - 4 -
$("#fourP").click(function() {
    // if nothing's been created there yet
    if (editCount8 === 0) { 

    editCount8 += 1;

    // create p and identify the div
    var taskP = $("<p>").addClass("taskP d-flex");

    var fourPEl = $("#fourP");

    fourPEl.append(taskP);

    // text of the class which was 
    var text = $(taskP).text().trim();

    var textInput = $("<textarea>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "fourText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount8 > 0) {
        // text is in a P condition, already been edited once
        var text = $("#fourPP").text().trim();
        var textInput = $("<textarea>").val(text);

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

});

// div area for timeslot - 5 -
$("#fiveP").click(function() {
    // if nothing's been created there yet
    if (editCount9 === 0) { 

    editCount9 += 1;

    // create p and identify the div
    var taskP = $("<p>").addClass("taskP d-flex");

    var fivePEl = $("#fiveP");

    fivePEl.append(taskP);

    // text of the class which was 
    var text = $(taskP).text().trim();

    var textInput = $("<textarea>").addClass("taskP d-flex").val(text);

    $(taskP).replaceWith(textInput);

    textInput.trigger("focus");

    $(textInput).attr("id", "fiveText");
    
    $(textInput).addClass("taskP d-flex");

    
    } else if (editCount9 > 0) {
        // text is in a P condition, already been edited once
        var text = $("#fivePP").text().trim();
        var textInput = $("<textarea>").val(text);

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

});


var timeSlotsRefresh = function() {
    
    var today = new Date();
    var time = today.getHours();

    var timeSlots = $(".col-8 border-gradient border-gradient-purple d-flex align-items-center")
    $(timeSlots).removeClass("present past future");

    nineEl = 9;

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

timeSlotsRefresh();

setInterval(timeSlotsRefresh, 300000);