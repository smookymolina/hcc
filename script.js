// Manejo del formulario de subir CV
const formularioSubirCV = document.getElementById("formulario-subir-cv");
const modalSubirCV = document.getElementById("modal-subir-cv");

if (formularioSubirCV) {
    formularioSubirCV.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        // Obtener los datos del formulario
        const formData = new FormData(formularioSubirCV);

        // Enviar los datos a Formspree usando Fetch API
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

// Manejo del formulario de subir CV
const formularioSubirCV = document.getElementById("formulario-subir-cv");
if (formularioSubirCV) {
    formularioSubirCV.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        // Obtener los datos del formulario
        const formData = new FormData(formularioSubirCV);

        // Enviar los datos a Formspree usando Fetch API
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

// Manejo del formulario de calificaciones
const formularioCalificacion = document.getElementById("formulario-calificacion");
if (formularioCalificacion) {
    formularioCalificacion.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de forma tradicional

        // Obtener los datos del formulario
        const formData = new FormData(formularioCalificacion);

        // Enviar los datos a Formspree usando Fetch API
        fetch("https://formspree.io/f/xnnjyvzg", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    alert("¡Calificación enviada con éxito!");
                    formularioCalificacion.reset(); // Limpiar el formulario
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
