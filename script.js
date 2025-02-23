// Manejo del formulario de calificaciones
const formularioCalificaciones = document.getElementById("formulario-calificaciones");

if (formularioCalificaciones) {
    formularioCalificaciones.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        // Validar que se haya seleccionado una calificación
        const inputCalificacion = document.getElementById("calificacion");
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

        // Obtener los datos del formulario
        const formData = new FormData(formularioCalificaciones);

        // Enviar los datos a Formspree
        fetch("https://formspree.io/f/xnnjyvzg", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert("¡Tu calificación y comentario han sido enviados con éxito!"); // Mensaje de éxito
                    formularioCalificaciones.reset(); // Limpiar el formulario
                    estrellas.forEach((e) => e.classList.remove("active")); // Reiniciar las estrellas
                    inputCalificacion.value = ""; // Reiniciar el valor de la calificación
                } else {
                    alert("Hubo un error al enviar la calificación. Inténtalo de nuevo.");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Hubo un error al enviar la calificación. Inténtalo de nuevo.");
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

// Manejo del modal de Subir CV
const btnSubirCV = document.getElementById("btn-subir-cv");
const modalSubirCV = document.getElementById("modal-subir-cv");
const closeModalSubirCV = modalSubirCV.querySelector(".close");

// Abrir el modal de Subir CV
if (btnSubirCV && modalSubirCV) {
    btnSubirCV.addEventListener("click", function () {
        modalSubirCV.style.display = "flex"; // Mostrar el modal
    });
}

// Cerrar el modal de Subir CV
if (closeModalSubirCV) {
    closeModalSubirCV.addEventListener("click", function () {
        modalSubirCV.style.display = "none"; // Ocultar el modal
    });
}

// Cerrar el modal de Subir CV al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
    if (event.target === modalSubirCV) {
        modalSubirCV.style.display = "none"; // Ocultar el modal
    }
});

// Manejo del modal de Crear CV
const btnCrearCV = document.getElementById("btn-crear-cv");
const modalCrearCV = document.getElementById("modal-crear-cv");
const closeModalCrearCV = modalCrearCV.querySelector(".close");

// Abrir el modal de Crear CV
if (btnCrearCV && modalCrearCV) {
    btnCrearCV.addEventListener("click", function () {
        modalCrearCV.style.display = "flex"; // Mostrar el modal
    });
}

// Cerrar el modal de Crear CV
if (closeModalCrearCV) {
    closeModalCrearCV.addEventListener("click", function () {
        modalCrearCV.style.display = "none"; // Ocultar el modal
    });
}

// Cerrar el modal de Crear CV al hacer clic fuera del contenido
window.addEventListener("click", function (event) {
    if (event.target === modalCrearCV) {
        modalCrearCV.style.display = "none"; // Ocultar el modal
    }
});
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
