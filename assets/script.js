var inputNine = $("#infoNineAm");
var inputTen = $("#infoTenAm");
var inputEleven = $("#infoElevenAm");
var inputTwelve = $("#infoTwelvePm");
var inputOne = $("#infoOnePm");
var inputTwo = $("#infoTwoPm");
var inputThree = $("#infoThreePm");
var inputFour = $("#infoFourPm");
var inputFive = $("#infoFivePm");

$(document).ready(function () {
  var curretnDate = moment().format("DD MMM YYYY, h:mm:ss a");
  $("#currentDate").text(curretnDate);
  var currentDay = moment().format("dddd");
  $("#currentDay").text(currentDay);
});

$(".saveBtn").click(function () {
  var userInputNine = inputNine.val();
  localStorage.setItem("userInputNine", userInputNine);
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
