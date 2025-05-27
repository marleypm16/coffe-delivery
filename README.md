# Coffee Delivery ☕🚚

Uma aplicação de e-commerce de cafés, super simples, criada com o objetivo principal de demonstrar a utilização do Docker Compose pela primeira vez.

## Visão Geral

Este projeto simula um pequeno e-commerce para venda de cafés. Seu propósito é servir como um exemplo prático de como configurar e executar uma aplicação web conteinerizada utilizando Docker Compose.

## Pré-requisitos

Antes de começar, garanta que você tenha as seguintes ferramentas instaladas em sua máquina:

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/) (Geralmente já vem com a instalação do Docker Desktop)

## Como Executar com Docker Compose

Siga os passos abaixo para executar a aplicação:

1.  **Clone o repositório (se aplicável):**
    Se o seu código estiver em um repositório Git, clone-o primeiro.
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO_GIT>
    cd nome-da-pasta-do-projeto
    ```
    Caso contrário, apenas navegue até o diretório raiz do seu projeto onde o arquivo `docker-compose.yml` está localizado.

2.  **Construa as imagens e suba os containers:**
    No diretório raiz do projeto (onde se encontra o arquivo `docker-compose.yml`), execute o seguinte comando:
    ```bash
    docker-compose up -d
    ```
    * O comando `up` constrói (se necessário), cria, inicia e anexa aos containers para cada serviço definido no seu `docker-compose.yml`.
    * A flag `-d` (detached mode) executa os containers em segundo plano, liberando seu terminal.

3.  **Acesse a aplicação:**
    Após os containers serem iniciados com sucesso, você poderá acessar a aplicação através do seu navegador.
    Verifique no seu arquivo `docker-compose.yml` qual porta foi mapeada para o serviço da sua aplicação. Geralmente, será algo como `http://localhost:PORTA` ou `http://127.0.0.1:PORTA`.

    Por exemplo, se sua aplicação estiver configurada para rodar na porta `8080`, acesse: `http://localhost:8080`





## Tecnologias Utilizadas (Exemplo)

* **Frontend:** (Ex: HTML, CSS, JavaScript, React, etc.)
* **Conteinerização:** Docker, Docker Compose



---

