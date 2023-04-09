import { useState } from "react";
import AppButton from "../AppButton";
import Icon from "../Icon";
import "./styles.scss";
import showAlert from "../../utils/alert";
import validator from "../../utils/validator";

const ContactUsForm = () => {
    const formID = "xdovwrwo";

    const [emailInputError, setEmailInputError] = useState(false);

    const [firstNameInputError, setFirstNameInputError] = useState(false);

    const [subjectInputError, setSubjectInputError] = useState(false);

    const [messageInputError, setMessageInputError] = useState(false);

    const validations = {
        email: validator.validateEmail,
        firstName: validator.validateFirstName,
        subject: validator.validateSubject,
        message: validator.validateMessage,
    };

    const handleChange = (e) => {
        if (e.target.parentNode.classList.contains("labelError")) {
            validations[e.target.id](e.target.value);
        }
    };

    const submitForm = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get("Email");
        const firstName = formData.get("Nombre");
        const message = formData.get("Mensaje");
        const subject = formData.get("Asunto");

        if (
            !validator.validateEmail(email, setEmailInputError) ||
            !validator.validateFirstName(firstName, setFirstNameInputError) ||
            !validator.validateSubject(subject, setSubjectInputError) ||
            !validator.validateMessage(message, setMessageInputError)
        ) {
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

            showAlert(true);
        } catch (error) {
            showAlert(false);
        }
    };

    return (
        <>
            <form onSubmit={submitForm} className="us-form d-flex flex-column col-12">
                <label htmlFor="firstName" className={`text-body ${firstNameInputError ? "labelError" : ""}`}>
                    <input id="firstName" type="text" name="Nombre" placeholder="Nombre" onChange={(e) => handleChange(e)} />
                    {`${firstNameInputError ? "Ingresa un nombre válido" : "Ingresá tu nombre"}`}
                </label>

                <label htmlFor="email" className={`text-body ${emailInputError ? "labelError" : ""}`}>
                    <input id="email" type="email" name="Email" placeholder="Email" onChange={(e) => handleChange(e)} />
                    {`${emailInputError ? "Ingresa un email válido" : "Ingresá tu email"}`}
                </label>

                <label htmlFor="subject" className={`text-body ${subjectInputError ? "labelError" : ""}`}>
                    <input id="subject" type="text" name="Asunto" placeholder="Asunto" onChange={(e) => handleChange(e)} />
                    {`${subjectInputError ? "Este campo es obligatorio" : "Ingresá un asunto"}`}
                </label>

                <input name="subject" type="hidden" value={"{{ Asunto }}"} />

                <label htmlFor="message" className={`text-body ${messageInputError ? "labelError" : ""}`}>
                    <textarea id="message" name="Mensaje" placeholder="Mensaje" onChange={(e) => handleChange(e)} />
                    {`${messageInputError ? "Este campo es obligatorio" : "Escribinos tu mensaje"}`}
                </label>
                <AppButton variant={"regular"} as={"handler"} design={"primary"} text={"Enviar"} EndIcon={<Icon name={"send"} />} type={"submit"} />
            </form>
        </>
    );
};

export default ContactUsForm;
