const formReserva = document.querySelector('#formNuevaReserva');
const reservaId = formReserva.dataset.id;

// Aleternativa utilizando la captura del pathname
// const reservaId = window.location.pathname.split('/').pop();

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const fecha_ingreso = document.querySelector('#fecha_ingreso');
const fecha_salida = document.querySelector('#fecha_salida');
const nro_asiento = document.querySelector("#nro_asiento").value;
const destino = document.querySelector("#destino").value;
const clase = document.querySelector("#clase").value;
const cantidad_personas = document.querySelector('#cantidad_personas');
const telefono = document.querySelector('#telefono');
const email = document.querySelector('#email');

document.addEventListener('DOMContentLoaded', async () => {
  // Traemos la reserva que se va a editar
  const response = await fetch(`/api/${reservaId}`);
  const data = await response.json();

  // Mostrar en el formulario los datos de la reserva que se quiere actualizar
  nombre.value = data.nombre;
  apellido.value = data.apellido;
  fecha_ingreso.value = data.fecha_ingreso;
  fecha_salida.value = data.fecha_salida;
  habitacion.value = data.habitacion;
  cantidad_personas.value = data.cantidad_personas;
  telefono.value = data.telefono;
  email.value = data.email;
});

formReserva.addEventListener('submit', async (e) => {
  e.preventDefault();

  reservaActualizada = {
    nombre: nombre.value,
    apellido: apellido.value,
    fecha_ingreso: fecha_ingreso.value,
    fecha_salida: fecha_salida.value,
    destino,
    clase,
    habitacion,
    cantidad_personas: cantidad_personas.value,
    telefono: telefono.value,
    email: email.value,
  };

  // Se envÃ­an los nuevos datos al servidor express
  const response = await fetch(`/api/${reservaId}`, {
    method: 'PUT',
    body: JSON.stringify(reservaActualizada),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const respToJson = await response.json();

  if (response.status !== 200) {
    return Swal.fire({
      title: 'Error',
      text: respToJson.message,
      icon: 'error',
      confirmButtonText: 'Aceptar',
    });
  }

  setTimeout(() => {
    // Redireccionar al usuario
    window.location.href = '/';
  }, 1000);
})