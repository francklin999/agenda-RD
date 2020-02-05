let btnCheck = document.querySelector('#adicionar-tarefa');//usando a craze eu consigo colocar um texto grande que aceita a quebra de linha
let tarefa = document.querySelector('#tarefas');
let inputTarefa = document.querySelector('#tarefa-digitada');
let btnFinaliza = document.querySelector('.botao-tarefa')

btnCheck.onclick = () => {
    let valorDigitado = inputTarefa.value;
    let tarefaNova = `<div class="col-md-4"> 
    <div class="card-tarefa">
        <div class="texto-tarefa">
        ${valorDigitado}
        </div>
        <div class="botao-tarefa">
            <img src="img/check.png" width="32" alt="botão finalizar" title="botão finalizar">
        </div>
    </div>
    </div>`;
    tarefa.innerHTML += tarefaNova;
}