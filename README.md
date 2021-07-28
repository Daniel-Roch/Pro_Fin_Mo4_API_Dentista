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

# Bibliotecas utilizadas no dev - forma de utilizar

Comenados que utilizei na parte do terminal:

```bash
  npm i nodemon -D
  npm i jest -D
  npm i supertest -D
```

# Servidor

Comandos para rodar servidor e testes:

```bash
  npm run dev - Iniciar nodemon em modo desenvolvedor.
  npm start
  npm run test - Iniciar teste.
```

## GET - All.

```http
  GET localhost:3050/paciente
```

## GET - Para achar pelo `cpf`.

Retorna somente um, associando que exista somente uma pessoa com aquele cpf.

```http
  GET localhost:3050/paciente/cpf
```

## POST - enviar dados.

`Dados json esperados:` "nome" , "email", "idade" e "cpf".

`nome`: Maior ou igual 4 letras.

`email`:  Obrigatório ter `@` e `.com` (ou `.com.br`)

`idade`: Precisa ser int(number)

`cpf`: precisar ter os `2 ponto` e um `-`, além das sequencia de números, ex: 000.000.000-00

```http
  POST localhost:3050/paciente
```

## DELETE - Deletar dados pelo `cpf`.

Deleta todos os CPF's que existem, tendo em vista que exista somente 1 pessoa com aquele CPF.

```http
  DELETE localhost:3050/paciente/cpf
```

## PATCH - Modificar somente um dado por vez.

Ele altera 1 dado por vez, através do cpf que procura. também pode alterar o cpf aqui, mas segue o padrão de cpf correto.

```http
  PATCH localhost:3050/paciente/cpf
```

## PUT - Modificar todos os dados `(Menos cpf)`.

Consegue alterar todos os dados passados de uma vez, menos o CPF, através da pesquisa do CPF.

```http
  PUT localhost:3050/paciente/cpf
```

`OBS: Os seguintes comandos PUT e PATCH seguem os requisitos do POST para poder enviar os devidos dados`

# Screenshots - Insomnia

![App Screenshot](/img-Insomnia/Inso-1.PNG)
![App Screenshot](/img-Insomnia/Inso-2.PNG)
![App Screenshot](/img-Insomnia/Inso-3.PNG)
![App Screenshot](/img-Insomnia/Inso-4.PNG)

# Rodando Testes (test)

Foram aplicado testes nesta api, testes nas rotas:

`GET`

`POST`

`PATCH`

`DELETE`

```bash 
  npm run test
```

Obs: Também foi feito um teste na criação de Paciente, na models.

# Heroku
Enviei o banco de dados para o heroku.

`https://projeto-dentista-api-m4.herokuapp.com/paciente`

![logo](https://raw.githubusercontent.com/ivangabriele/vscode-heroku/master/res/icon.png)

## Autor 👋

- [@Daniel-Roch](https://github.com/Daniel-Roch)

