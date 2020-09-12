// Procurar o botão
document.querySelector("#add-time")

// Quando clicar no botão
.addEventListener("click", cloneField)

// Executar uma ação
function cloneField() {
    console.log("Cheguei aqui")

     // Duplicar os campos. Quais campos?
     const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) // boolean: true or false.

     // Pegar os campos. Que campos?
     const fields = newFieldContainer.querySelectorAll("input")

     // Para cada campo, limpar
     fields.forEach(function(field) {
         // pegar o field do momento e limpa ele
        field.value = ""
     } )

     fields[0].value = ""
     fields[1].value = ""

    // Colocar na página. Onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}

   