import Swal from "sweetalert2";
import panambiLogo from "../assets/icons/panambi-logo.svg";

const showAlert = (success) => {
    if (success) {
        Swal.fire({
            title: "¡Gracias por tu mensaje!",
            text: "En breve me contactaré con vos.",
            iconHtml: `<img src="${panambiLogo}" alt="Logo de panambí"/>`,
            confirmButtonText: "Cerrar",
            customClass: {
                container: "alert-container",
                icon: "alert-icon",
                confirmButton: "success-alert-button alert-button",
                text: "alert-text",
                title: "alert-title",
            },
        });
    } else {
        Swal.fire({
            title: "Oops...",
            text: "Algo salió mal. Por favor, intentá nuevamente.",
            icon: "error",
            confirmButtonText: "Cerrar",
            customClass: {
                container: "alert-container",
                icon: "alert-icon",
                confirmButton: "error-alert-button alert-button",
                text: "alert-text",
                title: "alert-title",
            },
        });
    }
};

export default showAlert;
