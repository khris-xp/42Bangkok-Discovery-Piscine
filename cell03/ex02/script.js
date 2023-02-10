const clear_func = () => {
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
};

const show_answer = () => {
  var input1 = Number(document.getElementById("input1").value);
  var input2 = Number(document.getElementById("input2").value);
  var operated = document.getElementById("operation");
  let operatedValue = operated.options[operated.selectedIndex].value;
  let input1Id = document.getElementById("input1").value;
  let input2Id = document.getElementById("input2").value;

  if (((operatedValue === 'divide') || (operatedValue === 'modulation')) || input2 === '0') {
    alert("It's Over 9000!");
    clear_func();
  } else if (parseInt(input1) === NaN || parseInt(input2) === NaN || (input1 < 0) || (input2) < 0) {
    alert("Error :(");
    console.log("Error :(")
    clear_func();
  } else {
    if (operatedValue === 'addition') {
      alert(input1 + input2);
      console.log(input1 + input2);
      clear_func();
    } else if (operatedValue == 'deletion') {
      alert(input1 - input2);
      console.log(input1 - input2);
      clear_func();
    } else if (operatedValue == 'multiplication') {
      alert(input1 * input2);
      console.log(input1 * input2);
      clear_func();
    } else if (operatedValue == 'divide') {
      alert(input1 / input2);
      console.log(input1 / input2);
      clear_func();
    } else if (operatedValue == 'modulation') {
      alert(input1 % input2);
      console.log(input1 % input2);
      clear_func();
    }
  }
}

document.getElementById('submit_button').addEventListener('click', show_answer);

setInterval(() => {
  alert("Please, use me...")
}, 30000);