let button = document.getElementById('button');
let ul = document.getElementById("toDoList");
//use event handler property to trigger addToList when the button is created
button.onclick = addToList;

// error 1 let - let item = document.getElementById("toDo").value;
//    except - let button = document.getElementById('button');
// error 2 document - let checkBox = document.createElement("input"); 
// error 3 - change ' per ""
// error 4 - button.ontheclick = addToList;
// error 5 - button.onclick = "deleteItem"; 

//function to add items to the to do list
function addToList() {
  let item = document.getElementById("toDo").value;
  let li = document.createElement("li");
  li.textContent = item;
  let checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  let button = document.createElement("button");
  button.innerHTML = "Delete";
  button.setAttribute("class", "delete");
  li.appendChild(checkBox);
  li.appendChild(button);
  ul.appendChild(li);

  checkBox.onchange = checkItem;
  button.onclick = deleteItem;
}

function checkItem(e) {

  let addedItem = e.target.closest("li");
  let parentItem = addedItem.parentNode;
  addedItem.classList.toggle("checked");
  parentItem.appendChild(addedItem);
}

function deleteItem(e) {
  let deleted = e.target.closest("li");
  deleted.remove();
}