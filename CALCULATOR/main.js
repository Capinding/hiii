const displayOutput = document.getElementById("displayResult");

function display(input){
  displayOutput.value += input;
}

function clearResult(){
  displayOutput.value = "";
}

function calculate(){
  
  if(displayOutput.value == "*143"){
    alert("I LOVE YANA!! --Mark C.")

  }
  else {
    displayOutput.value = eval(displayOutput.value);
  }
}
