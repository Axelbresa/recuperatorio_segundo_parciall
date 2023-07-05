// Imports
const express = require("express");
const cors = require('cors');
const path = require('path');
// const helmet = require('helmet')
const morgan = require ('morgan')
require("dotenv").config();
require("ejs");
const { sequelize } = require("./database/database");

const app = express();

// Middlewares
// TODO: Implementar middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', require('./routes/reserva.routes'));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404

// Starting the server
app.listen(3000, () => console.log('Server on port xxxx'));

//conexion a la base de datos
sequelize
  .authenticate()
  .then(() => {
    console.log("nos hemos conectado a la base de datos");
  })
  .catch((error) => {
    console.log("se ha producido un error", error);
  });

