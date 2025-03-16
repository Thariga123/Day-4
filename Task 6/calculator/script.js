
const display = document.getElementById("display")
function appendToDisplay(input){
     display.value += input;
}
function clearDisplay(){
    display.value = "";
}
function calculate(){
    try{
        const expression = display.value;
        const result = eval(expression);
        display.value = expression +"="+result;
    }
    catch(error){
        display.value ="Error"
    }
}
