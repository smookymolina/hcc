// Declaración de variables (solo una vez)
const btnSubirCV = document.getElementById("btn-subir-cv");
const modalSubirCV = document.getElementById("modal-subir-cv");
const closeModalSubirCV = modalSubirCV ? modalSubirCV.querySelector(".close") : null;
const formularioSubirCV = document.getElementById("formulario-subir-cv");

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

// Manejo de la selección de estrellas
const estrellas = document.querySelectorAll(".estrellas .estrella");
const inputCalificacion = document.getElementById("calificacion");

if (estrellas && inputCalificacion) {
    estrellas.forEach((estrella) => {
        estrella.addEventListener("click", function () {
            const valor = this.getAttribute("data-value");
            inputCalificacion.value = valor;

            // Remover la clase 'active' de todas las estrellas
            estrellas.forEach((e) => e.classList.remove("active"));

            // Agregar la clase 'active' a las estrellas seleccionadas
            for (let i = 0; i < valor; i++) {
                estrellas[i].classList.add("active");
            }
        });
    });
}

// Manejo del formulario de calificaciones
const formularioCalificaciones = document.getElementById("formulario-calificaciones");
const mensajeExito = document.getElementById("mensaje-exito");

if (formularioCalificaciones) {
    formularioCalificaciones.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe

        // Validar que se haya seleccionado una calificación
        if (!inputCalificacion.value) {
            alert("Por favor, selecciona una calificación.");
            return;
        }

        // Validar el correo electrónico
        const emailInput = document.getElementById("email-calificacion");
        const email = emailInput.value.trim();
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) {
            alert("Por favor, ingresa un correo electrónico válido.");
            return;
        }

        // Mostrar mensaje de éxito
        mensajeExito.style.display = "block";

        // Limpiar el formulario después de 2 segundos
        setTimeout(() => {
            formularioCalificaciones.reset();
            estrellas.forEach((e) => e.classList.remove("active"));
            inputCalificacion.value = "";
            mensajeExito.style.display = "none";
        }, 2000);
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
