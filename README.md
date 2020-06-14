# :pushpin:  índice

1. [Objetivo do Projeto](#dart-objetivo-do-projeto)
2. [Sobre](#page_with_curl-sobre)
3. [Tecnologias Utilizadas](#rocket-tecnologias-utilizadas)
4. [Requisitos](#gear-requisitos)
5. [Rodar o Projeto](#arrow_forward-rodar-o-projeto)
6. [Resultado](#keyboard-resultado)
7. [Redes Sociais](#man_technologist-redes-sociais)

---

## :dart:   Objetivo do Projeto

Um robô que acessa a página do google e busca o valor atual do dólar para poder fazer uma conversão utilizando a técnica de web scraping (Raspagem da web).

## :page_with_curl: Sobre

Esse projeto foi feito atraves do video - [Como criar um robô que acessa sites com JavaScript .feat NodeJS | O que é Pupeteer?](https://www.youtube.com/watch?v=4W55nFDyIrc) do canal do [Dev Soutinho](https://www.youtube.com/channel/UCzR2u5RWXWjUh7CwLSvbitA), é um projeto bem pequeno e simples, a ideia é converter moedas fazendo web scraping, eu já havia visto esse termo mais nunca aplicado, existem varias maneira de se fazer o web scraping que em português seria algo como Raspagem da web, nesse projeto usamos a pacote puppeteer que é desenvolvido pelo Google e usa o chromium que é uma versão openSource do google chrome para poder acessar sites da web e coletar dados programaticamente, no caso foi feito um conversor de moeda, o que também pode ser feito consumindo uma API por exemplo, mas nesse caso o puppeteer abre uma pagina do google e faz uma pesquisa como: dólar para real, se você fizer isso no seu navegador vai ver o resultado, e então buscamos o valor do dólar que esta sendo exibido na tela, isso é muito interessante, te possibilita buscar informações de qualquer site através do seu código JS, já que são poucos os sites que tem uma API publica disponível, e de quebra transformamos isso em uma ferramenta de linha de comando usando o pacote readline-sync, que permite o usuário entrar com dados pelo terminal, então foi um projeto pequeno e simples mas que trouxe novos conhecimentos. 

## :rocket: Tecnologias Utilizadas

* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)

**Dependências**

* [puppeteer](https://github.com/puppeteer/puppeteer)
* [readline-sync](https://www.npmjs.com/package/readline-sync)

## :gear: Requisitos

* [Git](https://git-scm.com/) (Para clonar, opcional)
* [Node.js](https://nodejs.org/en/)
* [Npm](https://www.npmjs.com/) (É instalado junto com o Node)

## :arrow_forward: Rodar o Projeto

``` bash
# Primeiro passo, abra o console e clone o repositório ou 
# baixe o projeto em sua maquina
$ git clone git@github.com:devsp011/robo-conversor-moeda.git

# Segundo passo, com o console aberto, entre na pasta
$ cd robo-conversor-moeda

# Terceiro passo, instale as dependências com o comando
$ npm install ou npm i

# Quarto e ultimo passo, Rode a aplicação
$ npm start
```

## :keyboard: Resultado

![](https://raw.githubusercontent.com/devsp011/robo-conversor-moeda/master/images/print-conversor.png)

## :man_technologist: Redes Sociais

* [Instagram](https://www.instagram.com/devsp011/)
* [Linkedin](https://www.linkedin.com/in/vitor-sampaio-4532451a7/)

---

<h5 align='center' >Feito com :purple_heart: por <a href="https://github.com/devsp011" target="_blank">DevSp</a> </h5>
