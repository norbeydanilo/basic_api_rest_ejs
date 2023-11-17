# Basic API REST

Node.js, Express.js, MongoDB and EJS Basic REST API.

You can clone this repo as starter project for your Express, MongoDB API server

## Features and Functionalities 😃

- Node, Express, EJS, MongoDB, Mongoose as ODM Basic REST API
- CRUD Operations (A Controller for this)
- NoSQL for database: Document-oriented MongoDB

## Tech Stack 💻

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MongoDB - Cloud](https://www.mongodb.com/cloud)
- [Mongoose](https://mongoosejs.com)
- [EJS](https://ejs.co)

## Installation and Running App :zap:

**1. Clone this repo by running the following command :-**

```bash
 git clone https://github.com/norbeydanilo/basic_api_rest_ejs.git
 cd basic_api_rest_ejs
```

**2. Install the required package :-**

```bash
 npm install
```

**3. Now run the npm command to start the project :-**

```bash
 npm run dev
```

**4.** **🎉 Open your browser and test the rest api on this url `https://127.0.0.1:3800`**

Remember that the .env file must be created for the API to work.

Additionally this project uses: 

- [Nodemon](https://nodemon.io)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Eslint](https://eslint.org)
- [Swagger](https://swagger.io)

### Uso de Swagger

Para utilizar el archivo `swagger.json` en tu aplicación, necesitarás instalar el paquete `swagger-ui-express`. Este paquete te permitirá servir la documentación de Swagger directamente desde tu aplicación Express.

Primero, instala `swagger-ui-express` con el siguiente comando:

```bash
npm install swagger-ui-express
```

Luego, en tu archivo `app.js`, necesitarás requerir `swagger-ui-express` y tu archivo `swagger.json`. Asegúrate de ajustar la ruta a `swagger.json` según sea necesario. Aquí hay un ejemplo de cómo hacerlo:

```javascript
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

Con esto, podrás acceder a la documentación de Swagger en la ruta `/api-docs` de tu aplicación.

Por favor, ten en cuenta que este es un ejemplo básico y puedes necesitar ajustarlo según tus necesidades. Por ejemplo, puedes querer agregar autenticación a la ruta de la documentación de Swagger, o puedes tener otros middlewares que necesiten ser configurados. Te recomiendo que consultes la [documentación de `swagger-ui-express`](https://www.npmjs.com/package/swagger-ui-express) para obtener más detalles.