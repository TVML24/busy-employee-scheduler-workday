//variables for page elements
var mainContainer = $("#main-container-custom");
var timeHolder = $('#currentDay');

// variables for event listeners
var nineamBtn = $("#button-nine-am");
var tenamBtn = $("#button-ten-am");
var elevenamBtn = $("#button-eleven-am");
var twelvepmBtn = $("#button-twelve-pm");
var onepmBtn = $("#button-one-pm");
var twopmBtn = $("#button-two-pm");
var threepmBtn = $("#button-three-pm");
var fourpmBtn = $("#button-four-pm");
var fivepmBtn = $("#button-five-pm");

//dayjs variables
var currentHour = dayjs().startOf('h').format("H");
var currentDate = dayjs().startOf('d').format("dddd, DD, MMMM, YYYY");

// variables to hold the items that will be printed in the scheduler
var itemsOne = JSON.parse(localStorage.getItem('itemsOne')) || [];
var itemsTwo = JSON.parse(localStorage.getItem("itemsTwo")) || [];
var itemsThree = JSON.parse(localStorage.getItem("itemsThree")) || [];
var itemsFour = JSON.parse(localStorage.getItem("itemsFour")) || [];
var itemsFive = JSON.parse(localStorage.getItem("itemsFive")) || [];
var itemsSix = JSON.parse(localStorage.getItem("itemsSix")) || [];
var itemsSeven = JSON.parse(localStorage.getItem("itemsSeven")) || [];
var itemsEight = JSON.parse(localStorage.getItem("itemsEight")) || [];
var itemsNine = JSON.parse(localStorage.getItem("itemsNine")) || [];

// variables that indicate which textarea value should be saved
var oneClicked = false;
var twoClicked = false;
var threeClicked = false;
var fourClicked = false;
var fiveClicked = false;
var sixClicked = false;
var sevenClicked = false;
var eightClicked = false;
var nineClicked = false;

$(function(){
// init function to prepare the page for action
  function init () {
    fetchcurrentDate();
    marktimeElements();
    printItems();
// event listeners for the buttons that save the text
    nineamBtn.on("click", handleprojectformSubmit);
    tenamBtn.on("click", handleprojectformSubmit);
    elevenamBtn.on("click", handleprojectformSubmit);
    twelvepmBtn.on("click", handleprojectformSubmit);
    onepmBtn.on("click", handleprojectformSubmit);
    twopmBtn.on("click", handleprojectformSubmit);
    threepmBtn.on("click", handleprojectformSubmit);
    fourpmBtn.on("click", handleprojectformSubmit);
    fivepmBtn.on("click", handleprojectformSubmit);
  } 
// updates the date at the top of the page
  function fetchcurrentDate () {
    timeHolder.text(currentDate);
  }
// grabs the text from the text area of the parent div of the event target
// pushes it into the appropriate array
// changes a variable so that the next function recognises which array to act on
// calls process form function 
  function handleprojectformSubmit(event) {
    event.preventDefault();
      var parentElement = $(this).parent();
      var parentIndex = $(this).parent().attr("data-index");
      var parenttextInput = parentElement.children('textarea').eq('0');
      var textInput = parenttextInput.val();
        if (parentIndex == 1) {
          itemsOne.push(textInput);
          oneClicked = true;
        } else if (parentIndex == 2) {
          itemsTwo.push(textInput);
          twoClicked = true;
        } else if (parentIndex == 3) {
          itemsThree.push(textInput);
          threeClicked = true;
        } else if (parentIndex == 4) {
          itemsFour.push(textInput);
          fourClicked = true;
        } else if (parentIndex == 5) {
          itemsFive.push(textInput);
          fiveClicked = true;
        } else if (parentIndex == 6) {
          itemsSix.push(textInput);
          sixClicked = true;
        } else if (parentIndex == 7) {
          itemsSeven.push(textInput);
          sevenClicked = true;
        } else if (parentIndex == 8) {
          itemsEight.push(textInput);
          eightClicked = true;
        } else if (parentIndex == 9) {
          itemsNine.push(textInput);
          nineClicked = true;
        } 
        processForm();
      }
// checks to see which array it should act on
// stringifies and sets the chosen array to local storage
// resets the value that indicates the array has been chosen
  function processForm() {
    if (oneClicked === true) {
      localStorage.setItem("itemsOne", JSON.stringify(itemsOne));
      oneClicked = false;
    } else if (twoClicked === true) {
      localStorage.setItem("itemsTwo", JSON.stringify(itemsTwo));
      twoClicked = false;
    } else if (threeClicked === true) {
      localStorage.setItem("itemsThree", JSON.stringify(itemsThree));
      threeClicked = false;
    } else if (fourClicked === true) {
      localStorage.setItem("itemsFour", JSON.stringify(itemsFour));
      fourClicked = false;
    } else if (fiveClicked === true) {
      localStorage.setItem("itemsFive", JSON.stringify(itemsFive));
      fiveClicked = false;
    } else if (sixClicked === true) {
      localStorage.setItem("itemsSix", JSON.stringify(itemsSix));
      sixClicked = false;
    } else if (sevenClicked === true) {
      localStorage.setItem("itemsSeven", JSON.stringify(itemsSeven));
      sevenClicked = false;
    } else if (eightClicked === true) {
      localStorage.setItem("itemsEight", JSON.stringify(itemsEight));
      eightClicked = false;
    } else if (nineClicked === true) {
      localStorage.setItem("itemsNine", JSON.stringify(itemsNine));
      nineClicked = false;
    }
  }
  // selects each text area and makes the value the text from the array associated with it
  function printItems() {
    if (itemsOne != null) {
      var possibleHours = $("#main-container-custom").children('div');
      var markedHour = possibleHours.eq(0);
      var selectedText = markedHour.children('textarea').eq('0');
        selectedText.val(itemsOne);
    }
    if (itemsTwo != null) {
      var possibleHours = $("#main-container-custom").children('div');
      var markedHour = possibleHours.eq(1);
      var selectedText = markedHour.children('textarea').eq('0');
        selectedText.val(itemsTwo);
    }
    if (itemsThree != null) {
      var possibleHours = $("#main-container-custom").children('div');
      var markedHour = possibleHours.eq(2);
      var selectedText = markedHour.children('textarea').eq('0');
        selectedText.val(itemsThree);
    }
    if (itemsFour != null) {
    var possibleHours = $("#main-container-custom").children('div');
    var markedHour = possibleHours.eq(3);
    var selectedText = markedHour.children('textarea').eq('0');
      selectedText.val(itemsFour);
    }
    if (itemsFive != null) {
      var possibleHours = $("#main-container-custom").children('div');
      var markedHour = possibleHours.eq(4);
      var selectedText = markedHour.children('textarea').eq('0');
        selectedText.val(itemsFive);
    }
    if (itemsSix != null) {
      var possibleHours = $("#main-container-custom").children('div');
      var markedHour = possibleHours.eq(5);
      var selectedText = markedHour.children('textarea').eq('0');
        selectedText.val(itemsSix);
    }
    if (itemsSeven != null) {
      var possibleHours = $("#main-container-custom").children('div');
      var markedHour = possibleHours.eq(6);
      var selectedText = markedHour.children('textarea').eq('0');
        selectedText.val(itemsSeven);
    }
    if (itemsEight != null) {
      var possibleHours = $("#main-container-custom").children('div');
      var markedHour = possibleHours.eq(7);
      var selectedText = markedHour.children('textarea').eq('0');
        selectedText.val(itemsEight);
    }
    if (itemsNine != null) {
      var possibleHours = $("#main-container-custom").children('div');
      var markedHour = possibleHours.eq(8);
      var selectedText = markedHour.children('textarea').eq('0');
        selectedText.val(itemsNine);
    }
  }

  // adds classes that change the background colours of the divs according to whether they are in the past, present or future
  function marktimeElements() {
    for (i=0; i < 9; i++) {
        var possibleHours = $("#main-container-custom").children('div');
        var markedHour = possibleHours.eq(i);
        var hourAttr = markedHour.attr("time-attribute");
           if ((hourAttr < currentHour)) {
            markedHour.addClass("past");
          } else if (hourAttr === currentHour){
            markedHour.addClass("present");
          } else if (hourAttr > currentHour){
            markedHour.addClass("future");
          }
        }
      } 
    init();
  }
);
 