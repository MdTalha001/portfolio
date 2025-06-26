const inputbox = document.getElementById("inputbox");
const addbtn = document.getElementById("addbtn");
const todoList = document.getElementById("todoList");

// Global variable for Editbtn
let edittodo = null;

const addtodo = () => {
    const inputText = inputbox.value.trim();
    if (inputText.length <= 0) {
        alert("You must Wright something in todo app ");
        return false;
    }
    if (addbtn.value === "Edit") {
        edittodo.target.previousElementSibling.innerHTML = inputText;
        addbtn.value = "Add";
        inputbox.value = "";
    }
    else{

    //   Create a p and li into ul tag and after that li tag insert into p tag
    
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerHTML = inputText;
    li.appendChild(p);
    // li.innerHTML = inputText;

    //  Edit btn code

    const Editbtn = document.createElement("button");
    Editbtn.innerText = "Edit";
    Editbtn.classList.add("btn", "Editbtn");
    li.appendChild(Editbtn);

    //  Delete Btn code

    const deletebtn = document.createElement("button");
    deletebtn.innerText = "Remove";
    deletebtn.classList.add("btn", "deletebtn");
    li.appendChild(deletebtn);

    todoList.appendChild(li);
    inputbox.value = "";
  }  
}

// Edit and Remove function code

const updateTodo = (e) => {
    //  console.log(e.target);
    if (e.target.innerHTML === "Remove") {
        console.log(e.target.parentElement);
        todoList.removeChild(e.target.parentElement);
    }
    if (e.target.innerHTML === "Edit") {
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addbtn.value = "Edit";
        edittodo = e;
    }
}


addbtn.addEventListener('click', addtodo);
todoList.addEventListener('click', updateTodo);