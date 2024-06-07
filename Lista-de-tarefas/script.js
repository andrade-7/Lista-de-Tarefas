document.addEventListener('DOMContentLoaded', () =>{
    const novaTarefa = document.querySelector("#novaTarefa");
    const botaoAdicinorTarefa = document.querySelector("#botaoAdicionarTarefa");
    const listaDeTarefas = document.querySelector("#listaDeTarefas");

//Função para adicionar nova terefa
    const AdicionarTarefa = () => {
        const textoDaTarefa = novaTarefa.value.trim();
        if(textoDaTarefa === '') {
            alert("Insira uma tarefa")
            return;
        }
//Criação dos elementos
        const itemDaLista = document.createElement('li');
        const checkbox = document.createElement('input');
        const spanDaTarefa = document.createElement('span');
        const botaoRemover = document.createElement('button');
    
        
//Configuração dos elementos
        checkbox.type = 'checkbox';
        spanDaTarefa.textContent = textoDaTarefa;
        botaoRemover.textContent = 'Remover';


//Evento para marcar a tarefa como cocluída
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                itemDaLista.classList.add('concluida');
            } else {
                itemDaLista.classList.remove('concluida');
            }   
            
        });
//Evento para desmarcar tarefa concluída
        

        
//Evento para remover a tarefa
        botaoRemover.addEventListener('click', () => itemDaLista.remove());
        botaoRemover.style.textDecoration = 'none'



//Adiciona elementos na tarefa
        itemDaLista.append(checkbox, spanDaTarefa, botaoRemover);
        listaDeTarefas.appendChild(itemDaLista);
        
        
//Limpa o campo input
        novaTarefa.value = '';
            
        
    };

//Eventos para adicionar tarefa ao clicar no botão ou pressionar a tecla Enter
        botaoAdicinorTarefa.addEventListener('click', AdicionarTarefa);
        novaTarefa.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') {
                AdicionarTarefa();
            }

        });

});