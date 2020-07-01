# CoNews-POO

## Uso do git
Antes de tudo, instale o git <br>
  --> sudo apt-get update <br>
  --> sudo apt-get install git <br>
  Para sertificar que foi instalado rode um git --version <br>

Com o git instalado configure seus dados com os dados do GitHub <br>

  --> git config --global user.name "seuUserNameDoGitHub" <br>
  --> git config --global user.email seuEmailDoGitHub <br><br>

Clone o repositório<br>
  --> git clone https://github.com/leoaltemari/CoNews-POO.git <br><br>
  
Depois de ter clonado esse repositório com o comando git clone faça  o seguinte:<br>
Entre no repositorio clonado<br>
  --> cd CoNews/<br><br>
  
Atualize o repositório<br>
  --> git pull<br><br>
  
Feito isso, seu repositório tera todas as mudanças que foram feitas por outra pessoa<br>
Agora, sempre que vc fizer alterações no seu código e quiser enviar elas para o repositório remoto,<br>
utilize a seguinte sequência de comandos:<br>
  --> git add . <br>
  --> git commit -m "escreva uma mensagem aqui entre as aspas explicando o que vc esta enviando para o repositório" <br>
  --> git push <br><br>

Depois de ter dado push ele vai pedir seu usuário e sua senha, que nada mais é que o user e senha do GitHub. <br><br>

Pronto suas alterações foram enviadas para o repositório e todos tem acesso à elas através do comando git pull. <br><br>

OBS.: Sobre enviar alterações para o repositório, envie somente coisa que sejam funcionais, ou seja, se vc não terminou a <br>
implementação de determinada funcionalidade, não envie o código para o repositório remoto, pq vc n tem nem certeza de que o código <br>
está rodando e isso pode prejudicar as demais pessoas que estão trabalhando no seu projeto. <br>
FIM<br>
