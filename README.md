# CoNews-POO

## Uso do git
Antes de tudo, instale o git
  --> sudo apt-get update 
  --> sudo apt-get install git
  Para sertificar que foi instalado rode um git --version

Com o git instalado configure seus dados com os dados do GitHub

  --> git config --global user.name "seuUserNameDoGitHub"
  --> git config --global user.email seuEmailDoGitHub

Clone o repositório
  --> git clone https://github.com/leoaltemari/CoNews-POO.git
  
Depois de ter clonado esse repositório com o comando git clone faça  o seguinte:
Entre no repositorio clonado
  --> cd CoNews/
  
Atualize o repositório
  --> git pull
  
Feito isso, seu repositório tera todas as mudanças que foram feitas por outra pessoa
Agora, sempre que vc fizer alterações no seu código e quiser enviar elas para o repositório remoto,
utilize a seguinte sequência de comandos:
  --> git add .
  --> git commit -m "escreva uma mensagem aqui entre as aspas explicando o que vc esta enviando para o repositório"
  --> git push

Depois de ter dado push ele vai pedir seu usuário e sua senha, que nada mais é que o user e senha do GitHub.

Pronto suas alterações foram enviadas para o repositório e todos tem acesso à elas através do comando git pull.

OBS.: Sobre enviar alterações para o repositório, envie somente coisa que sejam funcionais, ou seja, se vc não terminou a
implementação de determinada funcionalidade, não envie o código para o repositório remoto, pq vc n tem nem certeza de que o código
está rodando e isso pode prejudicar as demais pessoas que estão trabalhando no seu projeto.
FIM
