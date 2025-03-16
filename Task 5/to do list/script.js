var ul = document.getElementById("list-container");
var input = document.getElementById("input");

function add() {
    if (input.value.trim() !== "") {  
        var listitem = document.createElement("li");
        listitem.innerHTML = input.value + " <button onclick='deleteitem(event)'>Delete</button>";
        ul.appendChild(listitem); 
        input.value = ""; 
    } else {
        alert("Please enter a task!"); 
    }
}

function deleteitem(event) {
    event.target.parentElement.remove(); 
}
