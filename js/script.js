let btnCheck = document.querySelector('#adicionar-tarefa');//usando a craze eu consigo colocar um texto grande que aceita a quebra de linha
let tarefa = document.querySelector('#tarefas');
let inputTarefa = document.querySelector('#tarefa-digitada');

// btnCheck.onclick = () => {
//     let valorDigitado = inputTarefa.value;

//     let tarefaNova = `<div class="col-md-4"> 
//     <div class="card-tarefa">
//     <div class="texto-tarefa">
//     ${valorDigitado}
//     </div>
//     <div class="botao-tarefa">
//     <img src="img/check.png" width="32" alt="botão finalizar" title="botão finalizar">
//     </div>
//     </div>
//     </div>`

//     tarefa.innerHTML += tarefaNova;
// }
// btnCheck.addEventListener('click', () => {

//     let valorDigitado = inputTarefa.value;

//     if (valorDigitado == "") {
//         alert("Digite uma Tarefa!")
//         return //o return para travar 
//     }

//     let tarefaNova = `<div class="col-md-4"> 
//     <div class="card-tarefa">
//     <div class="texto-tarefa">
//     ${valorDigitado}
//     </div>
//     <div class="botao-tarefa">
//     <img src="img/check.png" width="32" alt="botão finalizar" title="botão finalizar">
//     </div>
//     </div>
//     </div>`

//     tarefa.innerHTML += tarefaNova;

//     inputTarefa.value = ""

// })

const tarefaComEnter = (evento) => {

    if (evento.keyCode === 13 || event.type == 'click') {//podemos usar um return vazio deixando nossa condição assim evento.keyCode != 13 e ja limpamos nosso input

        let valorDigitado = inputTarefa.value;

        if (valorDigitado == "") {
            alert("Digite uma Tarefa!")
            return //o return para travar 
        }
        inputTarefa.value = ""
        let tarefaNova = `<div class="col-md-4"> 
        <div class="card-tarefa">
        <div class="texto-tarefa">
        ${valorDigitado}
        </div>
        <div class="botao-tarefa">
        <img src="img/check.png" width="32" alt="botão finalizar" title="botão finalizar">
        </div>
        </div>
        </div>`

        tarefa.insertAdjacentHTML('beforeend',tarefaNova)

        let objTarefaNova = tarefa.lastElementChild;//aq pego a caixa 
        let btnCheckTarefa = objTarefaNova.lastElementChild.lastElementChild//aq estou pegando o botao
        btnCheckTarefa.onclick = () =>{
            event.target.parentNode.parentNode.parentNode.remove();//aq removemos a tarefa usando o parent node conseguimos pegar o pai da função
            // tarefa.removeChild(event.target.parentNode.parentNode.parentNode)
            // aqui faremos a mesma coisa so que usando o removeChild
        }
    }

}
inputTarefa.addEventListener('keypress', tarefaComEnter)
btnCheck.addEventListener('click', tarefaComEnter)]

