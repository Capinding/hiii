const displayOutput = document.getElementById("displayResult");

function display(input){
  displayOutput.value += input;
}

function clearResult(){
  displayOutput.value = "";
}

function calculate(){
  
  if(displayOutput.value == "*143"){
    alert("I LOVE YANA!! --Iguzum")
  }
  else {
    displayOutput.value = eval(displayOutput.value);
  }
}
