document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
const inputField = document.getElementById("new-task-description");
const formElement = document.querySelector('submit', (e) => {
let newTask = inputField.ariaValueMax

e.preventDefault();
if (newTask.length===0){
  alert ('Task cannot be empty')
}else{
  handleToDo(newTask);
}
formElement.reset()
});

function css(element, style) {
  for (const property in style)
  element.style[property] = style[property];
}

function handleToDo (newTask)
let listItem = document.createElement("li");
let btn = document.createElement('Button')

css(btn, {
  'background-color': 'blue',
  'color': 'red',
  'background' : 'red',
  'color' : '#B22222', 
  'padding' : '6px',
  'margin' : '4px',
  'font-size' : '14px',
});

btn.addEventListener('click',handleDelete)
btn.textContent='X Remove'
listItem.innerText = '${newtask}';
listItem.appendChild(btn)
document.querySelector("#tasks").appendChild(listItem);


function handleDelete(e){
  e.target.parentNode.remove()
}