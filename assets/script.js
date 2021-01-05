var inputNine = $("#09");
var inputTen = $("#10");
var inputEleven = $("#11");
var inputTwelve = $("#12");
var inputOne = $("#13");
var inputTwo = $("#14");
var inputThree = $("#15");
var inputFour = $("#16");
var inputFive = $("#17");

$(document).ready(function () {
  var curretnDate = moment().format("MMMM Do YYYY, h:mm:ss a");
  $("#currentDate").text(curretnDate);
  var currentDay = moment().format("dddd");
  $("#currentDay").text(currentDay);
});

function displayColor() {
  let currentHour = moment().format("HH");
  $(".form-control").each(function () {
    let coloredBlock = $(this).attr("id");
    if (currentHour > coloredBlock) {
      $(this).removeClass("present");
      $(this).removeClass("future");
      $(this).addClass("past");
    }

    if (currentHour === coloredBlock) {
      $(this).removeClass("past");
      $(this).addClass("present");
    }

    if (currentHour < coloredBlock) {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

displayColor();

setInterval(function () {
  displayColor();
}, 1000 * 60);

$(".saveBtn").click(function () {
  var userInputNine = inputNine.val();
  localStorage.setItem("userInputNine", userInputNine);
  console.log("userInputNine:", userInputNine);
  var userInputTen = inputTen.val();
  localStorage.setItem("userInputTen", userInputTen);
  var userInputEleven = inputEleven.val();
  localStorage.setItem("userInputEleven", userInputEleven);
  var userInputTwelve = inputTwelve.val();
  localStorage.setItem("userInputTwelve", userInputTwelve);
  var userInputOne = inputOne.val();
  localStorage.setItem("userInputOne", userInputOne);
  var userInputTwo = inputTwo.val();
  localStorage.setItem("userInputTwo", userInputTwo);
  var userInputThree = inputThree.val();
  localStorage.setItem("userInputThree", userInputThree);
  var userInputFour = inputFour.val();
  localStorage.setItem("userInputFour", userInputFour);
  var userInputFive = inputFive.val();
  localStorage.setItem("userInputFive", userInputFive);
});

function displayUserInput() {
  var savedInputNine = localStorage.getItem("userInputNine");
  inputNine.text(savedInputNine);
  var savedInputTen = localStorage.getItem("userInputTen");
  inputTen.text(savedInputTen);
  var savedInputEleven = localStorage.getItem("userInputEleven");
  inputEleven.text(savedInputEleven);
  var savedInputTwelve = localStorage.getItem("userInputTwelve");
  inputTwelve.text(savedInputTwelve);
  var savedInputOne = localStorage.getItem("userInputOne");
  inputOne.text(savedInputOne);
  var savedInputTwo = localStorage.getItem("userInputTwo");
  inputTwo.text(savedInputTwo);
  var savedInputThree = localStorage.getItem("userInputThree");
  inputThree.text(savedInputThree);
  var savedInputFour = localStorage.getItem("userInputFour");
  inputFour.text(savedInputFour);
  var savedInputFive = localStorage.getItem("userInputFive");
  inputFive.text(savedInputFive);
}

displayUserInput();
