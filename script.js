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

            // Obtén los datos del formulario
            const formData = new FormData(formularioCrearCV);

            // Envía los datos a Formspree usando Fetch API
            fetch('https://formspree.io/f/mjkgdrop', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            })
            .then(response => response.json())
            .then(data => {
                alert('¡Tu CV ha sido enviado con éxito!');
                formularioCrearCV.reset(); // Limpia el formulario
                modalCrearCV.style.display = 'none'; // Cierra el modal
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Hubo un error al enviar tu CV. Por favor, inténtalo de nuevo.');
            });
        });
    }

    // Funcionalidad para los botones de "Más información"
    const botonesMasInfo = document.querySelectorAll('.btn-mas-info');
    if (botonesMasInfo) {
        botonesMasInfo.forEach(button => {
            button.addEventListener('click', function (event) {
                event.stopPropagation(); // Evita que el clic se propague al documento
                const infoAdicional = button.closest('.vacante-item').querySelector('.info-adicional');
                if (infoAdicional) {
                    // Alternar la visibilidad del contenedor
                    if (infoAdicional.style.display === 'none' || infoAdicional.style.display === '') {
                        infoAdicional.style.display = 'block';
                    } else {
                        infoAdicional.style.display = 'none';
                    }
                }
            });
        });
    }

    // Cerrar la información adicional al hacer clic fuera
    document.addEventListener('click', function (event) {
        const infoAdicionales = document.querySelectorAll('.info-adicional');
        infoAdicionales.forEach(infoAdicional => {
            if (infoAdicional.style.display === 'block' && !event.target.closest('.vacante-item')) {
                infoAdicional.style.display = 'none';
            }
        });
    });

    // Funcionalidad para enviar el formulario de Calificaciones y Comentarios
    const formularioCalificacion = document.getElementById('formulario-calificacion');
    if (formularioCalificacion) {
        formularioCalificacion.addEventListener('submit', function (event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const calificacion = document.getElementById('calificacion').value;
            const comentario = document.getElementById('comentario').value;

            // Crear un nuevo elemento de calificación
            const nuevaCalificacion = document.createElement('div');
            nuevaCalificacion.classList.add('calificacion-item');

            const calificacionHeader = document.createElement('div');
            calificacionHeader.classList.add('calificacion-header');
            calificacionHeader.innerHTML = `
                <h3>${nombre}</h3>
                <span class="calificacion-estrellas">${'★'.repeat(calificacion)}${'☆'.repeat(5 - calificacion)}</span>
            `;

            const calificacionInfo = document.createElement('div');
            calificacionInfo.classList.add('calificacion-info');
            calificacionInfo.innerHTML = `<p>"${comentario}"</p>`;

            nuevaCalificacion.appendChild(calificacionHeader);
            nuevaCalificacion.appendChild(calificacionInfo);

            // Agregar la nueva calificación a la lista
            const calificacionesList = document.querySelector('.calificaciones-list');
            calificacionesList.prepend(nuevaCalificacion);

            // Limpiar el formulario
            formularioCalificacion.reset();
            alert('¡Gracias por tu calificación y comentario!');
        });
    }
});
