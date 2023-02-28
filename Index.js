var colorSelected = document.getElementById('colorSelected');
var result = document.getElementById('result');
var myForm = document.getElementById('myForm');
var textToColor = document.getElementById('textToColor');

colorSelected.addEventListener('change',colorPrintValue);
myForm.addEventListener('submit',(event)=> changeTextColor(event));

function colorPrintValue(){
    console.log(colorSelected);
    console.log("value is",colorSelected.value);
    window.alert("UpdateResultEnd of this fuction");

}
function changeTextColor(event){
    console.log(event);
    event.preventDefault();
    textToColor.style.color = colorSelected.value;
}

