$(document).ready(function () {
  function clear_func() {
    $("#input1").val("");
    $("#input2").val("");
  }

  function show_answer() {
    var input1 = Number($("#input1").val());
    var input2 = Number($("#input2").val());
    var operatedValue = $("#operation").val();
    if (
      operatedValue === "divide" ||
      operatedValue === "modulation" ||
      input2 === "0"
    ) {
      alert("It's Over 9000!");
      console.log("It's Over 9000!");
      clear_func();
    } else if (isNaN(input1) || isNaN(input2) || input1 < 0 || input2 < 0) {
      alert("Error :(");
      console.log("Error :(");
      clear_func();
    } else {
      if (operatedValue === "addition") {
        alert(input1 + input2);
        console.log(input1 + input2);
        clear_func();
      } else if (operatedValue == "deletion") {
        alert(input1 - input2);
        console.log(input1 - input2);
        clear_func();
      } else if (operatedValue == "multiplication") {
        alert(input1 * input2);
        console.log(input1 * input2);
        clear_func();
      } else if (operatedValue == "divide") {
        alert(input1 / input2);
        console.log(input1 / input2);
        clear_func();
      } else if (operatedValue == "modulation") {
        alert(input1 % input2);
        console.log(input1 % input2);
        clear_func();
      }
    }
  }

  $("#submit_button").click(show_answer);

  setInterval(function () {
    alert("Please, use me...");
  }, 30000);
});
