# Lista de Tarefas

Este é um simples aplicativo web para gerenciar uma lista de tarefas. Ele permite adicionar novas tarefas e marcar tarefas como concluídas.

## Tecnologias Utilizadas

- HTML: Para a estrutura básica da página.
- CSS: Para a estilização do aplicativo.
- jQuery: Para manipulação do DOM e interação com o usuário.

## Pré-requisitos

Para executar este aplicativo localmente, você precisará de um navegador da web. Não é necessário configurar um servidor web.

## Instruções de Uso

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em seu navegador.

## Como Funciona

- O cabeçalho da página exibe o título "Lista de Tarefas".
- Abaixo do título, há um formulário com um campo de entrada de texto e um botão "ADD TAREFA".
- Quando você preenche o campo de entrada de texto e clica no botão "ADD TAREFA", a tarefa é adicionada à lista.
- Cada tarefa é representada por um elemento `<li>` em uma lista não ordenada `<ul>`.
- Você pode clicar em uma tarefa na lista para marcá-la como concluída. A tarefa marcada terá uma linha através do texto e a cor do texto será alterada para vermelho.

## Código JavaScript

O código JavaScript no arquivo `main.js` é responsável pela funcionalidade do aplicativo. Ele utiliza jQuery para facilitar a manipulação do DOM. O código faz o seguinte:

1. Aguarda o carregamento do documento HTML usando `$(document).ready(...)`.
2. Manipula o envio do formulário para adicionar novas tarefas à lista.
3. Manipula cliques em elementos `<li>` na lista para marcar tarefas como concluídas.
