![Logo](https://static.wixstatic.com/media/af86ec_5850213055aa4ae8a4ecd4195d65d08d~mv2.png/v1/fill/w_154,h_22,al_c,q_85,usm_0.66_1.00_0.01/logo.webp)

# Projeto Final Modulo4 - API REST Dentista

Uma api criada no curso da `Resilia`, para o final do módulo 4.

Esta `API REST` é referente a um `consultorio Dentista`, e seria parte de cadastro dos `Pacientes`.

# Ferramentas Utilizadas:

- VScode
- Insomnia


# Bibliotecas utilizadas:

- EXPRESS (criar server)
- SQLITE3 (banco de dados)
- MOMENT (datas)

# Bibliotecas utilizadas na parte dev:

- NODEMON (auxílio server)
- JEST (testes)
- SUPERTEST (testes servidor)

# Forma de utilizar:

Comenados que utilizei na parte do terminal:

```bash
  npm init
  npm install moment
  npm install express
  npm install sqlite3
```

# Bibliotecas utilizadas no dev - forma de utilizar:

Comenados que utilizei na parte do terminal:

```bash
  npm i nodemon -D
  npm i jest -D
  npm i supertest -D
```

## GET - All.

```http
  GET localhost:3050/paciente
```

## GET - Para achar pelo cpf.

Retorna somente um, associando que exista somente uma pessoa com aquele cpf.

```http
  GET localhost:3050/paciente/cpf
```

## POST - enviar dados.

```http
  POST localhost:3050/paciente
```

## DELETE - Deletar dados pelo CPF.

Deleta todos os CPF's que existem, tendo em vista que exista somente 1 pessoa com aquele CPF.

```http
  DELETE localhost:3050/paciente/cpf
```

## Autor 👋

- [@Daniel-Roch](https://github.com/Daniel-Roch)

