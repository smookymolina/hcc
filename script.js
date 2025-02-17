// Funcionalidad para abrir y cerrar los modales
document.addEventListener('DOMContentLoaded', function () {
    const modalSubirCV = document.getElementById('modal-subir-cv');
    const modalCrearCV = document.getElementById('modal-crear-cv');
    const btnSubirCV = document.getElementById('btn-subir-cv');
    const btnCrearCV = document.getElementById('btn-crear-cv');
    const closeModals = document.querySelectorAll('.modal .close');

    // Verifica si los elementos existen antes de agregar eventos
    if (btnSubirCV && modalSubirCV) {
        btnSubirCV.addEventListener('click', () => {
            modalSubirCV.style.display = 'flex';
        });
    }

    if (btnCrearCV && modalCrearCV) {
        btnCrearCV.addEventListener('click', () => {
            modalCrearCV.style.display = 'flex';
        });
    }

    closeModals.forEach(close => {
        close.addEventListener('click', () => {
            if (modalSubirCV) modalSubirCV.style.display = 'none';
            if (modalCrearCV) modalCrearCV.style.display = 'none';
        });
    });

    window.addEventListener('click', (event) => {
        if (event.target === modalSubirCV || event.target === modalCrearCV) {
            if (modalSubirCV) modalSubirCV.style.display = 'none';
            if (modalCrearCV) modalCrearCV.style.display = 'none';
        }
    });

    // Funcionalidad para enviar el formulario de Subir CV
    const formularioSubirCV = document.getElementById('formulario-subir-cv');
    if (formularioSubirCV) {
        formularioSubirCV.addEventListener('submit', function (event) {
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
            if (modalSubirCV) modalSubirCV.style.display = 'none';

            // Mostrar mensaje de éxito
            alert('¡Tu CV ha sido enviado con éxito!');
        });
    }

    // Funcionalidad para enviar el formulario de Crear CV
    const formularioCrearCV = document.getElementById('formulario-crear-cv');
    if (formularioCrearCV) {
        formularioCrearCV.addEventListener('submit', function (event) {
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
            if (modalCrearCV) modalCrearCV.style.display = 'none';

            // Mostrar mensaje de éxito
            alert('¡Tu CV ha sido creado y enviado con éxito!');
        });
    }

    // Funcionalidad para los botones de "Más información"
    const botonesMasInfo = document.querySelectorAll('.btn-mas-info');
    if (botonesMasInfo) {
        botonesMasInfo.forEach(button => {
            button.addEventListener('click', function () {
                alert('Mostrando más información sobre la vacante...');
                // Aquí puedes agregar la lógica para mostrar más detalles.
            });
        });
    }
});
