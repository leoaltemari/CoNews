# CoNews-POO

## Uso do git
<h4>Antes de tudo, instale o git </h4>
  --> sudo apt-get update <br>
  --> sudo apt-get install git <br>
  Para certificar que foi instalado rode um git --version <br>

<h4>Com o git instalado configure seus dados com os dados do GitHub </h4><br>

  --> git config --global user.name "seuUserNameDoGitHub" <br>
  --> git config --global user.email seuEmailDoGitHub <br><br>

<h4> Clone o repositório </h4><br>
  --> git clone https://github.com/leoaltemari/CoNews-POO.git <br><br>
  
<h3> Depois de ter clonado esse repositório com o comando git clone faça  o seguinte: </h3><br>
<h4> Entre no repositorio clonado </h4><br>
  --> cd CoNews/<br><br>
  
<h4> Atualize o repositório </h4><br>
  --> git pull<br><br>
  
<h3>Feito isso, seu repositório tera todas as mudanças que foram feitas por outra pessoa</h3><br>
<h4>Agora, sempre que vc fizer alterações no seu código e quiser enviar elas para o repositório remoto,<br>
utilize a seguinte sequência de comandos: </h4><br>
  --> git add . <br>
  --> git commit -m "escreva uma mensagem aqui entre as aspas explicando o que vc esta enviando para o repositório" <br>
  --> git push <br><br>

<h4>Depois de ter dado push ele vai pedir seu usuário e sua senha, que nada mais é que o user e senha do GitHub. </h4><br><br>

<h4>Pronto suas alterações foram enviadas para o repositório e todos tem acesso à elas através do comando git pull. </h4><br><br>

<h2>OBS.: Sobre enviar alterações para o repositório, envie somente coisa que sejam funcionais, ou seja, se vc não terminou a <br>
implementação de determinada funcionalidade, não envie o código para o repositório remoto, pq vc n tem nem certeza de que o código <br>
está rodando e isso pode prejudicar as demais pessoas que estão trabalhando no seu projeto. </h2><br>
FIM<br>
