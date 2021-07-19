# 🎯 nestjs-task-management

<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>

## 📋 Description

Backend for task mangement app.

## ⬇ Installation

```bash
# Clone via SSH or any other method
$ git clone git@github.com:oussamabouchikhi/nestjs-task-management.git

# CD into the project
$ cd nestjs-task-management

# Install the dependencies
$ yarn install
```

## 🛠️ Configuration

You will find 3 config files `config/default.yml` `config/development.yml` `config/production.yml`, and you have to edit the **jwt secret** and the **database**. But first don't forget to create a database and run the pgAdmin.

```yml
# default.yml
jwt:
  secret: 'YOUR_JWT_SECRET_HERE'

# development.yml
db:
  username: 'YOUR_DB_USERNAME_HERE'
  password: 'YOUR_DB_PASSWORD_HERE'
```

## 🚀 Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## 🧪 Test

```bash
# unit tests (you can add the prefix --watch)
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```

## 📄 License

This project is open-sources under the [MIT](https://opensource.org/licenses/MIT) license.

## 📞 Stay in touch

- Author - Oussama Bouchikhi
- Website - [https://oussamabouchikhi.github.io](https://oussamabouchikhi.github.io/)
- Twitter - [@oussTh3boss](https://twitter.com/oussTh3boss)
