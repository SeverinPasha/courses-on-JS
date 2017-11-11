function todoList() {
    var item = document.getElementById('todoInput').value;
    var text = document.createTextNode(item);
    var checkbox = document.createElement('input');
    var button = document.createElement('button');

    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    var newItem = document.createElement("div");
    
   

    if(item !== "" ){
        newItem.appendChild(checkbox);
        newItem.appendChild(text);
        newItem.appendChild(button);
        
        document.getElementById("todoList").appendChild(newItem)
        document.getElementById("todoInput").value = "";
    }
    else {
        alert ("Заполните поле");
    }


}