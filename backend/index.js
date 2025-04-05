//index.js
const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const cors = require('cors');

const routes = require("./routes/route")

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// List of allowed origins
const allowedOrigins = [
  // 'http://localhost:${port}',
  'https://https://Aravind-Murugan.github.io/resume'
  // Add more URLs as needed
];

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the request's origin is in the allowedOrigins array
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200 // Some legacy browsers choke on status 204
};

app.use(cors(corsOptions)); // Use CORS with specified options

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Aravind-Murugan Node.js Backend Application...',
    version: '1.0.0',
    description: 'This project is been developed to host my-resume website backend sever with ExpressJS API application decorated with Swagger-UI',
  },
  servers: [
    {
      url: `http://localhost:${port}`,
    },
  ],
  contact: {
    name: "Aravind-Murugan",
    url: "https://Aravind-Murugan.github.io/resume",
    email: "aravind.m.mail@gmail.com"
  },
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['./routes/route.js', './controllers/backendController.js'], // Include your routing and controller files
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Serve the static HTML file on the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});

app.use("/api/", routes);

// app.get('/api/hello', (req, res) => {
//   res.send({ message: 'Hello World!' });
// });

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Backend Server is started at http://localhost:${port}/`);
    })
  } catch (error) {
    console.log(error);
  }
};

start();
