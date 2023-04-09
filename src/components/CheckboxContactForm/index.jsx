import { useState } from "react";
import AppButton from "../AppButton";
import Icon from "../Icon";
import "./styles.scss";

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

    const [email, setEmail] = useState("");
    const [emailInputError, setEmailInputError] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [firstNameInputError, setFirstNameInputError] = useState(false);

    const [message, setMessage] = useState("");
    const [messageInputError, setMessageInputError] = useState(false);

    const validateEmail = (email) => {
        if (!email) {
            setEmailInputError(true);
            return false;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{3,}$/g.test(email)) {
            setEmailInputError(true);
            return false;
        }

        setEmailInputError(false); // sobra?
        return true;
    };

    const validateFirstName = (firstName) => {
        if (!firstName) {
            setFirstNameInputError(true);
            return false;
        }

        if (!/^[a-zA-Z]+$/g.test(firstName)) {
            setFirstNameInputError(true);
            return false;
        }

        return true;
    };

    const validateMessage = (message) => {
        if (!message) {
            setMessageInputError(true);
            return false;
        }

        return true;
    };

    const validations = {
        email: validateEmail,
        firstName: validateFirstName,
        message: validateMessage,
    };

    const handleChange = (e, set) => {
        set(e.target.value);

        if (e.target.parentNode.classList.contains("labelError")) {
            validations[e.target.id](e.target.value);
        }
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !validateFirstName(firstName) || !validateMessage(message)) {
            return;
        }

        try {
            const formData = {
                Email: email,
                Nombre: firstName,
                Mensaje: message,
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

            console.log("Form submitted successfully");
            // SHOW NOTIFICATIONS
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={submitForm} className="d-flex flex-column flex-sm-row justify-content-between">
            <div className="d-flex flex-column col-12 col-sm-6">
                {checkboxes[variant].map((checkbox, index) => {
                    return (
                        <label key={`label-${index}`}>
                            <input type="checkbox" name={checkbox} key={`input-${index}`} />
                            {checkbox}
                        </label>
                    );
                })}
            </div>
            <div className="d-flex flex-column col-12 col-sm-6">
                <label htmlFor="firstName" className={`text-body ${firstNameInputError && "labelError"}`}>
                    <input id="firstName" type="text" name="Nombre" placeholder="Nombre" onChange={(e) => handleChange(e, setFirstName)} />
                    {`${firstNameInputError ? "Ingresa un nombre válido" : "Ingresá tu nombre"}`}
                </label>

                <label htmlFor="email" className={`text-body ${emailInputError && "labelError"}`}>
                    <input id="email" type="email" name="Email" placeholder="Email" onChange={(e) => handleChange(e, setEmail)} />
                    {`${emailInputError ? "Ingresa un email válido" : "Ingresá tu email"}`}
                </label>

                <label htmlFor="message" className={`text-body ${messageInputError && "labelError"}`}>
                    <textarea id="message" name="Message" placeholder="Mensaje" onChange={(e) => handleChange(e, setMessage)} />
                    {`${messageInputError ? "Este campo es obligatorio" : "Escribinos tu mensaje"}`}
                </label>

                <AppButton variant={"regular"} as={"handler"} design={"primary"} text={"Enviar"} EndIcon={<Icon name={"send"} />} type={"submit"} />
            </div>
        </form>
    );
};

export default CheckboxContactForm;
