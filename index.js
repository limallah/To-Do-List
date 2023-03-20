let input = document.getElementById('txttodo');
let ul = document.getElementById('list_todos');
const dataBase = localStorage.getItem('item-list');
// create an empty array
let mainData = [];
// check if Database is not empty? convert the list items of an array into an object.
if(dataBase !== null){
    mainData = JSON.parse(localStorage.getItem('item-list'));
}
// if inputfield is empty, display alert message
function saveTodo(){
    if(input.value === ''){
        alert('Textfield is empty please add your todo');
    }
    else{
        //add item at the begining of an array
        mainData.unshift(input.value);
        //save/add the entire array as object to the local storage and convert it to string
        localStorage.setItem('item-list', JSON.stringify(mainData));
    // display alert message of saved
    alert('Saved');
    // clear the previous value when add button is clicked
    document.getElementById('txttodo').value = "";
    window.location.reload();
    }
    
}

loadData();


function loadData(){
    //bind display div to variable disp_list
    let ul = document.getElementById('list_todos');
    //loop through the data array
    for(let i = 0; i < mainData.length; i++){
// create a new Element for display items from loop
    let li = document.createElement('li');
    li.style = "color: #00001f; font-size: 14px; border-radius: 4px; margin: 8px 16px; padding: 6px 8px; background-color: #fff; height: 2.2rem ";
    li.innerHTML = mainData[i];

    ul.appendChild(li);

    let deleteBtn = document.createElement('button');
    deleteBtn.style = "float:right; padding 0px 16px; border: none; border-radius: 2px; color: white; background-color: rgb(46, 74, 200);"
    deleteBtn.setAttribute('id', 'deleteBtn');
    deleteBtn.setAttribute('onclick', `DeleteToDo(${i})`)
    deleteBtn.innerHTML = 'Delete';
    li.appendChild(deleteBtn);

    let editBtn = document.createElement('button');
    editBtn.style = "float: right; margin-right: 10px; padding: 0px 4px; border: none; border-radius: 2px; color: white; background-color: rgb(46, 74, 200);"
    editBtn.setAttribute('id', 'editBtn');
    editBtn.setAttribute('onclick', `EditToDo(${i})`)
    editBtn.innerHTML = 'Edit';
    li.appendChild(editBtn);

    }
    }

function DeleteToDo(index){
mainData.splice(index,1)
localStorage.setItem("item-list", JSON.stringify(mainData));
window.location.reload();

    }

function editBtn(index){
    let update = prompt("Change Data")
    mainData.splice.setItem("list-item", JSON.stringify(mainData));
    window.location.reload();
}


