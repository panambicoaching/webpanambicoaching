import { useState } from "react"; 
import AppButton from "../AppButton";
import Icon from "../Icon";
import "./styles.scss";

const ContactUsForm = () => {
    const formID = "xdovwrwo";

    const [email, setEmail] = useState("");
    const [emailInputError, setEmailInputError] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [firstNameInputError, setFirstNameInputError] = useState(false);

    const [subject, setSubject] = useState("");
    const [subjectInputError, setSubjectInputError] = useState(false);

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

        setEmailInputError(false);
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

        setFirstNameInputError(false);
        return true;
    }

    const validateSubject = (subject) => {
        if (!subject) {
            setSubjectInputError(true);
            return false;
        }

        setSubjectInputError(true);
        return true;
    }

    const validateMessage = (message) => {
        if (!message) {
            setMessageInputError(true);
            return false;
        }

        setMessageInputError(false);
        return true;
    }

    const validations = {
        email: validateEmail,
        firstName: validateFirstName,
        subject: validateSubject,
        message: validateMessage,
    }

    const handleChange = (e, set) => {
        set(e.target.value);

        if (e.target.parentNode.classList.contains("labelError")) {
            validations[e.target.id](e.target.value);
        }
    };

    const submitForm = async (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !validateFirstName(firstName) || !validateSubject(subject) || !validateMessage(message)) {
            return;
        }

        try {
            const formData = {
                Email: email,
                Nombre: firstName,
                Mensaje: message,
                subject: subject,
            };

            const response = await fetch(`https://formspree.io/f/${formID}`, {
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

            console.log("Form submitted successfully")
            // SHOW NOTIFICATIONS
        } catch (error) {
            console.error(error);
        }
    };

    
    return (
        <>
            <form onSubmit={submitForm} className="us-form d-flex flex-column col-12">
                <label htmlFor="firstName" className={`text-body ${firstNameInputError? "labelError": ""}`}>
                    <input id="firstName" type="text" name="Nombre" placeholder="Nombre" onChange={(e) => handleChange(e, setFirstName)} />
                    {`${firstNameInputError ? "Ingresa un nombre válido" : "Ingresá tu nombre"}`}
                </label>

                <label htmlFor="email" className={`text-body ${emailInputError? "labelError": ""}`}>
                    <input id="email" type="email" name="Email" placeholder="Email" onChange={(e) => handleChange(e, setEmail)} />
                    {`${emailInputError ? "Ingresa un email válido" : "Ingresá tu email"}`}
                </label>

                <label htmlFor="subject" className={`text-body ${subjectInputError? "labelError": ""}`}>
                    <input id="subject" type="text" name="Asunto" placeholder="Asunto" onChange={(e) => handleChange(e, setSubject)} />
                    {`${subjectInputError ? "Este campo es obligatorio" : "Ingresá un asunto"}`}
                </label>

                <input name="subject" type="hidden" value={"{{ Asunto }}"} />

                <label htmlFor="message" className={`text-body ${messageInputError? "labelError": ""}`}>
                    <textarea id="message" name="Message" placeholder="Mensaje" onChange={(e) => handleChange(e, setMessage)} />
                    {`${messageInputError ? "Este campo es obligatorio" : "Escribinos tu mensaje"}`}
                </label>
                <AppButton variant={"regular"} as={"handler"} design={"primary"} text={"Enviar"} EndIcon={<Icon name={"send"} />} type={"submit"} />
            </form>
        </>
    );
};

export default ContactUsForm;
