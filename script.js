// Funcionalidad para abrir y cerrar los modales
document.addEventListener('DOMContentLoaded', function () {
    const modalSubirCV = document.getElementById('modal-subir-cv');
    const modalCrearCV = document.getElementById('modal-crear-cv');
    const btnSubirCV = document.getElementById('btn-subir-cv');
    const btnCrearCV = document.getElementById('btn-crear-cv');
    const closeModals = document.querySelectorAll('.modal .close');

    // Abrir modal de Subir CV
    if (btnSubirCV && modalSubirCV) {
        btnSubirCV.addEventListener('click', () => {
            modalSubirCV.style.display = 'flex';
        });
    }

    // Abrir modal de Crear CV
    if (btnCrearCV && modalCrearCV) {
        btnCrearCV.addEventListener('click', () => {
            modalCrearCV.style.display = 'flex';
        });
    }

    // Cerrar modales
    closeModals.forEach(close => {
        close.addEventListener('click', () => {
            if (modalSubirCV) modalSubirCV.style.display = 'none';
            if (modalCrearCV) modalCrearCV.style.display = 'none';
        });
    });

    // Cerrar modales al hacer clic fuera
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
            const cvHecho = document.getElementById('cv-hecho').files[0];
            if (!cvHecho) {
                alert('Por favor, sube tu CV.');
                return;
            }
            console.log('CV subido:', cvHecho.name);
            modalSubirCV.style.display = 'none';
            alert('¡Tu CV ha sido enviado con éxito!');
        });
    }

    // Funcionalidad para enviar el formulario de Crear CV
    const formularioCrearCV = document.getElementById('formulario-crear-cv');
    if (formularioCrearCV) {
        formularioCrearCV.addEventListener('submit', function (event) {
            event.preventDefault();
            const aplicacion = {
                nombreCompleto: document.getElementById('nombre-completo').value,
                email: document.getElementById('email').value,
                telefono: document.getElementById('telefono').value,
                direccion: document.getElementById('direccion').value,
                experiencia: document.getElementById('experiencia').value,
                educacion: document.getElementById('educacion').value,
                habilidades: document.getElementById('habilidades').value,
                idiomas: document.getElementById('idiomas').value,
            };
            console.log('Aplicación enviada:', aplicacion);
            modalCrearCV.style.display = 'none';
            alert('¡Tu CV ha sido creado y enviado con éxito!');
        });
    }

    // Funcionalidad para los botones de "Más información"
    const botonesMasInfo = document.querySelectorAll('.btn-mas-info');
    if (botonesMasInfo) {
        botonesMasInfo.forEach(button => {
            button.addEventListener('click', function () {
                alert('Mostrando más información sobre la vacante...');
            });
        });
    }
});
