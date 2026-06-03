# Inventory Manager

Sistema simples de gerenciamento de estoque desenvolvido com Laravel 13, React, TypeScript e Docker.

## Tecnologias

### Backend

* Laravel 13
* PHP 8.4
* MySQL 8.4

### Frontend

* React
* TypeScript
* Vite
* Tailwind CSS

### Infraestrutura

* Docker
* Docker Compose
* Nginx

---

## Estrutura do Projeto

```txt
Inventory-Manager/
│
├── backend/
│   └── Laravel
│
├── frontend/
│   └── React + Vite
│
├── docker/
│   └── nginx/
│
└── docker-compose.yml
```

---

## Pré-requisitos

* Docker
* Docker Compose

Verifique a instalação:

```bash
docker --version
docker compose version
```

---

## Configuração Inicial

Clone o repositório:

```bash
git clone https://github.com/maxwillias/Inventory-Manager.git
```

Entre na pasta:

```bash
cd Inventory-Manager
```

---

## Configurar o Backend

Copie o arquivo de ambiente:

```bash
cp backend/.env.example backend/.env
```

Verifique se as configurações do banco estão definidas:

```env
DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=estoque
DB_USERNAME=estoque
DB_PASSWORD=estoque123
```

---

## Subir os Containers

```bash
docker compose up -d --build
```

Verifique se os containers estão rodando:

```bash
docker compose ps
```

---

## Instalar Dependências do Laravel

```bash
docker compose run --rm composer install
```

---

## Gerar APP_KEY

```bash
docker compose exec app php artisan key:generate
```

---

## Executar Migrations

```bash
docker compose exec app php artisan migrate
```

---

## Acessar a Aplicação

### Backend Laravel

```txt
http://localhost:8000/api/products
```

### Frontend React

```txt
http://localhost:5173
```

---

## Comandos Úteis

### Parar containers

```bash
docker compose down
```

### Subir containers

```bash
docker compose up -d
```

### Reconstruir imagens

```bash
docker compose up -d --build
```

### Ver logs

```bash
docker compose logs app
```

```bash
docker compose logs nginx
```

```bash
docker compose logs frontend
```

```bash
docker compose logs mysql
```

### Acessar container Laravel

```bash
docker compose exec app bash
```

### Rodar migrations

```bash
docker compose exec app php artisan migrate
```

### Limpar cache Laravel

```bash
docker compose exec app php artisan optimize:clear
```

---

## Funcionalidades

* Cadastro de produtos
* Listagem de produtos
* Edição de produtos
* Exclusão de produtos
* Busca por nome ou SKU
* Paginação
* Interface responsiva

---

## Licença

Projeto desenvolvido para fins de estudo e aprendizado.
