import { useState } from "react";
import AppButton from "../AppButton";
import Icon from "../Icon";
import "./styles.scss";
import showAlert from "../../utils/alert";
import validator from "../../utils/validator";

// variant prop available values => "workshops" | "courses"
const CheckboxContactForm = ({ variant }) => {
    const checkboxes = {
        workshops: [
            "Liderazgo",
            "Motivación",
            "Influencia - persuasión",
            "Negociación",
            "Trabajo en equipo",
            "Comunicación efectiva",
            "Toma de decisiones",
            "Inteligencia emocional",
            "Gestión del tiempo",
            "Gestión del estrés",
            "Actitud mental positiva",
            "Sensibilización y conscientización",
            "Gestión de conflictos",
        ],
        courses: [
            "Descubre tus 4 cuerpos y empodérate",
            "Emoción consciente",
            "Vuelo emocional",
            "Equilibrio personal",
            "Aprende a meditar",
            "Empodérate despertando tu amor propio",
        ],
    };

    const subjects = {
        workshops: "Consulta sobre talleres",
        courses: "Consulta sobre cursos",
    };

    const formIDs = {
        workshops: "mwkjrggo",
        courses: "xnqygkbe",
    };

    const [emailInputError, setEmailInputError] = useState(false);

    const [firstNameInputError, setFirstNameInputError] = useState(false);

    const [messageInputError, setMessageInputError] = useState(false);

    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    const validations = {
        email: validator.validateEmail,
        firstName: validator.validateFirstName,
        message: validator.validateMessage,
    };

    const handleChange = (e) => {
        if (e.target.parentNode.classList.contains("labelError")) {
            validations[e.target.id](e.target.value);
        }
    };

    const handleCheckboxChange = (e) => {
        const checkboxValue = e.target.name;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSelectedCheckboxes([...selectedCheckboxes, checkboxValue]);
        } else {
            setSelectedCheckboxes(selectedCheckboxes.filter((value) => value !== checkboxValue));
        }
    };

    const submitForm = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get("Email");
        const firstName = formData.get("Nombre");
        const message = formData.get("Mensaje");

        if (
            !validator.validateEmail(email, setEmailInputError) ||
            !validator.validateFirstName(firstName, setFirstNameInputError) ||
            !validator.validateMessage(message, setMessageInputError)
        ) {
            return;
        }

        try {
            const formData = {
                Email: email,
                Nombre: firstName,
                Mensaje: message,
                Seleccionados: selectedCheckboxes,
                subject: subjects[variant],
            };

            const response = await fetch(`https://formspree.io/f/${formIDs[variant]}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            e.target.reset();

            if (!response.ok) {
                throw new Error("Failed to submit form");
            }

            showAlert(true);
        } catch (error) {
            showAlert(false);
        }
    };

    return (
        <form onSubmit={submitForm} className="check-form d-flex flex-column flex-sm-row">
            <div className="d-flex flex-column col-12 col-sm-6">
                {checkboxes[variant].map((checkbox, index) => {
                    return (
                        <label key={`label-${index}`} className="checkboxLabel text-body">
                            <input type="checkbox" name={checkbox} key={`input-${index}`} onChange={handleCheckboxChange} />
                            {checkbox}
                        </label>
                    );
                })}
            </div>
            <div className="d-flex flex-column col-12 col-sm-6">
                <label htmlFor="firstName" className={`text-body2 ${firstNameInputError ? "labelError" : ""}`}>
                    <input id="firstName" type="text" name="Nombre" placeholder="Nombre" onChange={(e) => handleChange(e)} className="text-body" />
                    {`${firstNameInputError ? "Ingresa un nombre válido" : "Ingresá tu nombre"}`}
                </label>

                <label htmlFor="email" className={`text-body2 ${emailInputError ? "labelError" : ""}`}>
                    <input id="email" type="email" name="Email" placeholder="Email" onChange={(e) => handleChange(e)} className="text-body" />
                    {`${emailInputError ? "Ingresa un email válido" : "Ingresá tu email"}`}
                </label>

                <label htmlFor="message" className={`text-body2 ${messageInputError ? "labelError" : ""}`}>
                    <textarea id="message" name="Message" placeholder="Mensaje" onChange={(e) => handleChange(e)} className="text-body" />
                    {`${messageInputError ? "Este campo es obligatorio" : "Escribinos tu mensaje"}`}
                </label>

                <AppButton variant={"regular"} as={"handler"} design={"primary"} text={"Enviar"} EndIcon={<Icon name={"send"} />} type={"submit"} />
            </div>
        </form>
    );
};

export default CheckboxContactForm;
