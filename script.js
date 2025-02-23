// Manejo del modal de subir CV
const btnSubirCV = document.getElementById("btn-subir-cv");
const modalSubirCV = document.getElementById("modal-subir-cv");
const closeModalSubirCV = modalSubirCV ? modalSubirCV.querySelector(".close") : null;

// Abrir el modal al hacer clic en el botón "Subir CV"
if (btnSubirCV && modalSubirCV) {
    btnSubirCV.addEventListener("click", function () {
        modalSubirCV.style.display = "flex";
    });
}

// Cerrar el modal al hacer clic en la "X"
if (closeModalSubirCV) {
    closeModalSubirCV.addEventListener("click", function () {
        modalSubirCV.style.display = "none";
    });
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener("click", function (event) {
    if (modalSubirCV && event.target === modalSubirCV) {
        modalSubirCV.style.display = "none";
    }
});

// Manejo del formulario de subir CV
const formularioSubirCV = document.getElementById("formulario-subir-cv");
if (formularioSubirCV) {
    formularioSubirCV.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        // Validar el formato del archivo
        const fileInput = document.getElementById("archivo-cv");
        const file = fileInput.files[0];
        if (file && !file.type.includes('pdf')) {
            alert("Por favor, sube solo archivos PDF.");
            return;
        }

        // Validar el tamaño del archivo (máximo 5MB)
        if (file && file.size > 5 * 1024 * 1024) {
            alert("El archivo es demasiado grande. Por favor, sube un archivo menor a 5MB.");
            return;
        }

        // Obtener los datos del formulario
        const formData = new FormData(formularioSubirCV);

        // Enviar los datos a Formspree
        fetch("https://formspree.io/f/mkgoabpj", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert("¡CV enviado con éxito!");
                    formularioSubirCV.reset(); // Limpiar el formulario
                    modalSubirCV.style.display = "none"; // Cerrar el modal
                } else {
                    alert("Hubo un error al enviar el CV. Inténtalo de nuevo.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Hubo un error al enviar el CV. Inténtalo de nuevo.");
            });
    });
}

// Manejo del modal de Crear CV
const btnCrearCV = document.getElementById("btn-crear-cv");
const modalCrearCV = document.getElementById("modal-crear-cv");
const closeModalCrearCV = modalCrearCV ? modalCrearCV.querySelector(".close") : null;

// Abrir el modal al hacer clic en el botón "Crear CV"
if (btnCrearCV && modalCrearCV) {
    btnCrearCV.addEventListener("click", function () {
        modalCrearCV.style.display = "flex";
    });
}

// Cerrar el modal al hacer clic en la "X"
if (closeModalCrearCV) {
    closeModalCrearCV.addEventListener("click", function () {
        modalCrearCV.style.display = "none";
    });
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener("click", function (event) {
    if (modalCrearCV && event.target === modalCrearCV) {
        modalCrearCV.style.display = "none";
    }
});

// Manejo del formulario de Crear CV
const formularioCrearCV = document.getElementById("formulario-crear-cv");
if (formularioCrearCV) {
    formularioCrearCV.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        // Obtener los datos del formulario
        const formData = new FormData(formularioCrearCV);

        // Enviar los datos a Formspree
        fetch("https://formspree.io/f/{tu_endpoint_aqui}", {  // Reemplaza con tu endpoint de Formspree
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert("¡CV creado y enviado con éxito!");
                    formularioCrearCV.reset(); // Limpiar el formulario
                    modalCrearCV.style.display = "none"; // Cerrar el modal
                } else {
                    alert("Hubo un error al enviar el CV. Inténtalo de nuevo.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Hubo un error al enviar el CV. Inténtalo de nuevo.");
            });
    });
}

// Funcionalidad para los botones de "Más información"
const botonesMasInfo = document.querySelectorAll(".btn-mas-info");
if (botonesMasInfo) {
    botonesMasInfo.forEach((button) => {
        button.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que el clic se propague al documento
            const infoAdicional = button
                .closest(".vacante-item")
                .querySelector(".info-adicional");
            if (infoAdicional) {
                // Alternar la visibilidad del contenedor
                if (
                    infoAdicional.style.display === "none" ||
                    infoAdicional.style.display === ""
                ) {
                    infoAdicional.style.display = "block";
                } else {
                    infoAdicional.style.display = "none";
                }
            }
        });
    });
}

// Cerrar la información adicional al hacer clic fuera
document.addEventListener("click", function (event) {
    const infoAdicionales = document.querySelectorAll(".info-adicional");
    infoAdicionales.forEach((infoAdicional) => {
        if (
            infoAdicional.style.display === "block" &&
            !event.target.closest(".vacante-item")
        ) {
            infoAdicional.style.display = "none";
        }
    });
});

// Manejo del formulario de contacto
const formularioContacto = document.querySelector(".formulario-contacto");
if (formularioContacto) {
    formularioContacto.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        // Obtener los datos del formulario
        const formData = new FormData(formularioContacto);

        // Enviar los datos a Formspree usando Fetch API
        fetch("https://formspree.io/f/mbldeyka", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert("¡Mensaje enviado con éxito!");
                    formularioContacto.reset(); // Limpiar el formulario
                } else {
                    alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
            });
    });
}
