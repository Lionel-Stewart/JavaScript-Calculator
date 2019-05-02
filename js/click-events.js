$("#clear").click(() => {
  clearDisplay();
});

$("#equals").click(() => {
  doMath();
});

$("#decimal").click(() => {
  disableDecimal();
});

$(".operator").click(() => {
  handleOperator();
});

$(".displayElement").click(() => {
  addToDisplay(event);
});