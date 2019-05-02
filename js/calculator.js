var answer = 0;
var newValue = false;

function preventDigitLimit() {
  if ($("#display").val().length >= 22) {
    $("#display").val("Digit Limit Has Been Reached");
  }
}

function preventLeadingWithZero() {
  let firstDigit = $("#display").val().slice(0, 1);
  if (firstDigit === "0") {
    removeFirstDigit();
  }
}

function handleOperator() {
  let lastDigit = $("#display").val().slice(-1);
  switch (lastDigit) {
    case "+":
    case "-":
    case "/":
    case "*":
      removeLastDigit();
  }

  enableDecimal();
}

function addToDisplay(e) {
  if (newValue) {
    clearDisplay();
  }

  let displayElement = e.target.textContent;
  let displayValue = $("#display").val() + displayElement;

  $("#display").val(displayValue); 

  preventLeadingWithZero();
  preventDigitLimit();
  newValue = false;
}

function clearDisplay() {
  $("#display").val("0");

  enableDecimal();
}

function removeFirstDigit() {
  let displayValue = $("#display").val().slice(1);
  $("#display").val(displayValue);
}

function removeLastDigit() {
	let displayValue = $("#display").val().slice(0, -1);
    $("#display").val(displayValue);
}

function disableDecimal() {
  $("#decimal").prop('disabled', true);
}

function enableDecimal() {
  $("#decimal").prop('disabled', false);
}

function handleBeginningWithOperator() {
	let firstDigit = $("#display").val().slice(0, 1);
	switch (firstDigit) {
    case "+":
    case "-":
    case "/":
    case "*":
      let displayValue = answer + $("#display").val();
      $("#display").val(displayValue); 
  }
}

function handleLongAnswer(){
  let answerString = answer.toString();
  if(answerString.length>7){
    answer = answer.toFixed(7);
  }
}

function preventEndingWithZero(){
  let lastDigit = $("#display").val().slice(-1);
  if(lastDigit==='0'){
    removeLastDigit();
    preventEndingWithZero();
  }
  answer = $("#display").val()
}

function doMath() {
  handleBeginningWithOperator();
  answer = eval($("#display").val());
  handleLongAnswer();

  $("#display").val(answer);
  preventEndingWithZero();
  $("#answer").text(`Ans: ${answer}`);

  newValue = true;
}