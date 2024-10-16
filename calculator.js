function input(value){
    let inputfeild = document.getElementById('inputbtn');
    if(inputfeild.value === "0"){
        inputfeild.value = value

    }
    else{
        inputfeild.value += value
    }
    changeButtonColor(value);
}
function changeButtonColor(value) {
    // Get all buttons
    let buttons = document.querySelectorAll('.numberbtn');
  
    // Reset the background color for all buttons
    buttons.forEach(button => {
      button.style.backgroundColor = "";  // Reset to default background color
    });
  
    // Find the button that corresponds to the clicked value
    buttons.forEach(button => {
      if (button.innerText === value || button.innerText === '=') {
        button.style.backgroundColor = '#ebebeb';  // Set the background color of the clicked button
      }
    });
  }

function clearDisplay(){
    document.getElementById('inputbtn').value = "0";
    resetButtonColors();
   
}
    

function deleteLast(){
    let inputfeild = document.getElementById('inputbtn');
    inputfeild.value = inputfeild.value.slice(0,-1)
    if(inputfeild.value === ""){
        inputfeild.value = "0"
    }

}
function calculate() {
    const inputField = document.getElementById('inputbtn');
    try {
      inputField.value = eval(inputField.value.replace('x', '*').replace('%', '/100'));
    } catch {
      inputField.value = "Error";
    }
}

  
    
  

