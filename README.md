# nodequeue

Projeto com o intuito de aprender mais a respeito de processamento assíncrono de requisições, neste caso, utilizando envio de emails quando um usuário é cadastrado no sistema.
Toda vez que um usuário é cadastrado no sistema, adicionamos o envio de email de cadastro de usuários dentro de uma fila, com as informações daquele usuário, para que essa tarefa
de envio de email seja realizada em segundo plano, quando houver a possibilidade de processar esse dado. 

## 🚀 Tecnologias
* ⚡ Express — A web framework for Node.js
* 🐮 Bull — Premium Queue package for handling distributed jobs
