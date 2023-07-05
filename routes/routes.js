const ctrlReservas = {lista,
    crearreserva,
    crearUsuarios,
    listadoReserva,
    renderEditar,
    obtenerUnaReserva,
    actualizarReserva,
    EliminarReserva}= require("../controllers/use.controlers");

  const routes = require("express").Router();

//vistas
  routes.get("/crear", crearreserva);

routes.get("/", lista);

routes.get("/editar/:id", renderEditar);
// ==========================================
//         Rutas para CRUD de reservas
// ==========================================

// Obtener todas las reservas
routes.get('/api/', listadoReserva)
// Obtener una reserva
routes.get("/api/:id", obtenerUnaReserva);
// Crear una reserva
routes.post('/api', crearUsuarios)
// Actualizar una reserva
routes.put("/api/:id", actualizarReserva)
// Eliminar una reserva de forma lógica
routes.delete("/api/:id", EliminarReserva)
module.exports = ctrlReservas;