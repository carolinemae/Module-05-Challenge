$(document).ready(function () {

var currentDate = moment().format("dddd, MMMM Do YYYY");
var currentTime = moment().format('HH:00');
var timeBlocks = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','']
var desc = document.createElement('textarea');
var saveButton = document.createElement('button');
var iTag = document.createElement('i');
// iTag.setAttribute('class','fas');
iTag.setAttribute('class','fa-solid fa-floppy-disk');
$("#currentDay").text(currentDate);

function init() {
    for (var i = 0; i < timeBlocks.length; i++) {
        var times = timeBlocks[i];
        var row = document.createElement('div');

        $("div").attr("class","row");
        row.textContent = times;
        row.setAttribute("data-index", i);
        $("body").append(row);
    }

    desc.setAttribute("class","description");
    saveButton.setAttribute("class","saveBtn btn");
    // saveButton.setAttribute("class","saveBtn");
    saveButton.append(iTag);
    $(".row").append(desc);
    $(".row").append(saveButton);

    checkTime();

}

function checkTime() {
    for (var i = 0; i < timeBlocks.length; i++) {
        var times = timeBlocks[i];

        if (times < currentTime) {
            
            // console.log(timeBlocks[i] + ' is before current time');
            console.log(times + ' is in the past');
            desc.classList.add('past');

            // // FAILED CODE -----
            // var findParent = $(timeBlocks[i]).parent().textContent;
            // var findSecondChildOfParent = $(findParent).children(1).textContent;
            // var timePast = timeBlocks[i];
            // $('timePast').children(0).addClass("past");
            // timeBlocks[i].classList.add('past');
            // $(timeBlocks[i]).children(0).addClass("past");
            // $("timeBlocks[i]:first-child").addClass("past");
        } else if (times > currentTime) {


            console.log(times + ' is in the future');
            
        } else {


            console.log(times + ' is the current hour');
        }
    }

}


// FIX BUTTON CLICK EVENT?
function storeCalendar() {
    // var storeDescription = document.querySelector('.row').children[0];
    // var storeDescription = document.querySelector('div[data-id="0"]').value;

    // console.log(storeDescription);
    console.log('button was clicked');

    localStorage.setItem("calendar", JSON.stringify(timeBlocks));
    // localStorage.setItem("calendar", JSON.stringify(storeDescription));
}

// Checks -------------
console.log(currentTime);
console.log(timeBlocks);
// Checks -------------


// BUTTON FUNCTIONS NOT WORKING
console.log($('.saveBtn'));

$('.saveBtn').on('click', storeCalendar);

// $('.saveBtn').on('click', function() {
//     console.log('button clicked');
// });

// $(saveButton).click (function() {
//     console.log('button was clicked');
//   });

// saveButton.on('click', storeCalendar);

init();

// var nodes = document.getElementsByClassName('saveBtn');

// for (var j = 0; j < nodes.length; j++) {
//    nodes[j].addEventListener('click', function(jk) {
//       console.log('You clicked element #' + j);})}

});