/*Antes de empezar a escribir código es importante identificar
los elementos con los que se va a interactuar*/

let post = document.getElementById("buttonPost")
let clear = document.getElementById("buttonClear")
let mark = document.getElementById("buttonMark")
let del = document.getElementById("buttonDelete")

// Prueba de funcionamiento del botón: console.log(post)

post.addEventListener("click",TodoPost)
clear.addEventListener("click",TodoClear)
mark.addEventListener("click",TodoMark)
del.addEventListener("click",TodoDel)

function TodoPost(e) {
    e.preventDefault()
    //1. Obtener el texto del text-area
    // Cuando se requiere un valor se agrega ".value"
    let todo = document.getElementById("todoText").value 
    
    //2. Colocar la referencia en el place holder
    let list = document.getElementById("todoList")

    // .innerHTML escribe directamente en HTML
    let currentList = list.innerHTML
    // Concatena lo que está previamente con el nuevo input
    list.innerHTML = currentList + `<input type = "checkbox" name="todo" /> ${todo} <br>`
    // Limpia el text area una vez se postea un task
    document.getElementById("todoText").value = ""
}

function TodoClear() {
    let todos = document.getElementsByName("todo")
    // Recorre todo el arreglo de task y desmarca el check
    for(let i=0; i<todos.length; i++){
        todos[i].checked = false;
    }
}

function TodoMark() {
    let todos = document.getElementsByName("todo")
    // Recorre todo el arreglo de task y marca el check
    for(let i=0; i<todos.length; i++){
        todos[i].checked = true;
    }
}

function TodoDel() {
    let list = document.getElementById("todoList")
    // Elimina todos los task
    list.innerHTML = "";
}