let addToDobutton = document.getElementById('addToDo');
let todocontainer = document.getElementById('todocontainer');
let inputField = document.getElementById('entertask');

addToDobutton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    todocontainer.appendChild(paragraph);
    inputField.value = " ";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick',function(){
        todocontainer.removeChild(paragraph);
    })
})
