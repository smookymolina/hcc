// Funcionalidad para abrir y cerrar los modales
const modalSubirCV = document.getElementById('modal-subir-cv');
const modalCrearCV = document.getElementById('modal-crear-cv');
const btnSubirCV = document.getElementById('btn-subir-cv');
const btnCrearCV = document.getElementById('btn-crear-cv');
const closeModals = document.querySelectorAll('.modal .close');

btnSubirCV.addEventListener('click', () => {
    modalSubirCV.style.display = 'flex';
});

btnCrearCV.addEventListener('click', () => {
    modalCrearCV.style.display = 'flex';
});

closeModals.forEach(close => {
    close.addEventListener('click', () => {
        modalSubirCV.style.display = 'none';
        modalCrearCV.style.display = 'none';
    });
});

window.addEventListener('click', (event) => {
    if (event.target === modalSubirCV || event.target === modalCrearCV) {
        modalSubirCV.style.display = 'none';
        modalCrearCV.style.display = 'none';
    }
});

// Funcionalidad para enviar el formulario de Subir CV
document.getElementById('formulario-subir-cv').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener el archivo de CV
    const cvHecho = document.getElementById('cv-hecho').files[0];

    // Validar que se haya subido un archivo
    if (!cvHecho) {
        alert('Por favor, sube tu CV.');
        return;
    }

    // Mostrar la información en la consola (puedes enviarla a un servidor aquí)
    console.log('CV subido:', cvHecho.name);

    // Cerrar el modal
    modalSubirCV.style.display = 'none';

    // Mostrar mensaje de éxito
    alert('¡Tu CV ha sido enviado con éxito!');
});

// Funcionalidad para enviar el formulario de Crear CV
document.getElementById('formulario-crear-cv').addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const nombreCompleto = document.getElementById('nombre-completo').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const experiencia = document.getElementById('experiencia').value;
    const educacion = document.getElementById('educacion').value;
    const habilidades = document.getElementById('habilidades').value;
    const idiomas = document.getElementById('idiomas').value;

    // Crear un objeto con la información del usuario
    const aplicacion = {
        nombreCompleto,
        email,
        telefono,
        direccion,
        experiencia,
        educacion,
        habilidades,
        idiomas,
    };

    // Mostrar la información en la consola (puedes enviarla a un servidor aquí)
    console.log('Aplicación enviada:', aplicacion);

    // Cerrar el modal
    modalCrearCV.style.display = 'none';

    // Mostrar mensaje de éxito
    alert('¡Tu CV ha sido creado y enviado con éxito!');
});

// Funcionalidad para los botones de "Más información"
document.querySelectorAll('.btn-mas-info').forEach(button => {
    button.addEventListener('click', function () {
        alert('Mostrando más información sobre la vacante...');
        // Aquí puedes agregar la lógica para mostrar más detalles.
    });
});
