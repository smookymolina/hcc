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
