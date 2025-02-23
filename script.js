// Manejo del modal Subir CV
const modalSubirCV = document.getElementById("modal-subir-cv");
const btnSubirCV = document.getElementById("btn-subir-cv");
const spanClose = document.getElementsByClassName("close")[0];

// Abrir modal al hacer clic en el botón
btnSubirCV.onclick = function() {
    modalSubirCV.style.display = "flex";
}

// Cerrar modal al hacer clic en la X
spanClose.onclick = function() {
    modalSubirCV.style.display = "none";
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modalSubirCV) {
        modalSubirCV.style.display = "none";
    }
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
});
