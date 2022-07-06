//TODO:
//timeblocks change color according to time of day (past/present/future)
//refreshed page maintains saved events until intentionally cleared
//[extra] delete buttons for inputs on each row

var saveBtn = $('#svBtn');
var dateDisplayEl = document.querySelector('#currentDay');
var hourNineButton = document.querySelector('#hourNineButton');
var hourNineInput = document.querySelector('#hourNineInput');
var hourTenButton = document.querySelector('#hourTenButton');
var hourTenInput = document.querySelector('#hourTenInput');
var hourElevenButton = document.querySelector('#hourElevenButton');
var hourElevenInput = document.querySelector('#hourElevenInput');
var hourTwelveButton = document.querySelector('#hourTwelveButton');
var hourTwelveInput = document.querySelector('#hourTwelveInput');
var hourOneButton = document.querySelector('#hourOneButton');
var hourOneInput = document.querySelector('#hourOneInput');
var hourTwoButton = document.querySelector('#hourTwoButton');
var hourTwoInput = document.querySelector('#hourTwoInput');
var hourThreeButton = document.querySelector('#hourThreeButton');
var hourThreeInput = document.querySelector('#hourThreeInput');
var hourFourButton = document.querySelector('#hourFourButton');
var hourFourInput = document.querySelector('#hourFourInput');
var hourFiveButton = document.querySelector('#hourFiveButton');
var hourFiveInput = document.querySelector('#hourFiveInput');
var timeScale = [09, 10, 11, 12, 13, 14, 15, 16, 17];
var timeNow = moment().format("HH");
console.log(timeNow);
var hourEl = $(".time-block");

//current date in header
var date = moment().format("[Today is ] dddd, MMMM Do YYYY")
dateDisplayEl.textContent = date;

// var nineInput = document.querySelector('#hourNineInput');
//event listener for save button
hourNineButton.addEventListener("click", function(event) {
    event.preventDefault();
    var nineInput = hourNineInput.value;
    //input text saved to local storage
    localStorage.setItem("nineTodo", nineInput);
    // var storedNine = localStorage.getItem("nineTodo");
    // nineInput.textContent = storedNine;
})
// var storedNine = localStorage.getItem("nineTodo");
// nineInput.textContent = keepNine;


hourTenButton.addEventListener("click", function(event) {
    event.preventDefault();
    var tenInput = hourTenInput.value;
    //input text saved to local storage
    localStorage.setItem("10Todo", tenInput);
})
hourElevenButton.addEventListener("click", function(event) {
    event.preventDefault();
    var elevenInput = hourElevenInput.value;
    //input text saved to local storage
    localStorage.setItem("11Todo", elevenInput);
})
hourTwelveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var twelveInput = hourTwelveInput.value;
    //input text saved to local storage
    localStorage.setItem("12Todo", twelveInput);
})
hourOneButton.addEventListener("click", function(event) {
    event.preventDefault();
    var oneInput = hourOneInput.value;
    //input text saved to local storage
    localStorage.setItem("1Todo", oneInput);
})
hourTwoButton.addEventListener("click", function(event) {
    event.preventDefault();
    var twoInput = hourTwoInput.value;
    //input text saved to local storage
    localStorage.setItem("2Todo", twoInput);
})
hourThreeButton.addEventListener("click", function(event) {
    event.preventDefault();
    var threeInput = hourThreeInput.value;
    //input text saved to local storage
    localStorage.setItem("3Todo", threeInput);
})
hourFourButton.addEventListener("click", function(event) {
    event.preventDefault();
    var fourInput = hourFourInput.value;
    //input text saved to local storage
    localStorage.setItem("4Todo", fourInput);
})
hourFiveButton.addEventListener("click", function(event) {
    event.preventDefault();
    var fiveInput = hourFiveInput.value;
    //input text saved to local storage
    localStorage.setItem("5Todo", fiveInput);
})


//change color of current, past, and present time blocks
for (i = 0; i < timeScale.length; i++){
    // console.log(timeScale[i]);
    if (timeNow === timeScale[i]){
        $(hourEl[i]).addClass("present");
    } else if (timeNow > timeScale[i]){
        $(hourEl[i]).addClass("past");
    } else {
        $(hourEl[i]).addClass("future");
    }
}