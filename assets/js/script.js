var mainContainer = $("#main-container-custom");
var timeHolder = $('#currentDay');

var currentHour = dayjs().startOf('h').format("H");
var currentDate = dayjs().startOf('d').format("dddd, DD, MMMM, YYYY");

console.log(currentHour);
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function(){
  function init () {
    fetchcurrentDate()
    fetchData();
  } 
  function fetchcurrentDate () {
    timeHolder.text(currentDate);
  }

  function fetchData() {
    var items = localStorage.getItem("items");
    if (items) {
        items = JSON.parse(items);
    } else {
        items = [];
    }
    return items;
  }
  
  function marktimeElements() {
    for (i=0; i < 9; i++) {
        var possibleHours = $("#main-container-custom").children('div');
        var markedHour = possibleHours.eq(i);
        var hourAttr = markedHour.attr("time-attribute");
           if ((hourAttr < currentHour)) {
            console.log(hourAttr + "working");
            markedHour.addClass("past");
          } else if (hourAttr === currentHour){
            markedHour.addClass("present");
          } else if (hourAttr > currentHour){
            markedHour.addClass("future");
          }
        }
      } 
    init();
    marktimeElements();
  }
);
 


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
