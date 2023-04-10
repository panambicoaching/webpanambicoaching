import AppButton from "../AppButton";
import Icon from "../Icon";
import "./styles.scss";
import showAlert from "../../utils/alert";
import validator from "../../utils/validator";
import getDocsFirestore from '../../services/getDocsFirestore'
import { useCallback, useEffect, useState } from 'react'

// variant prop available values => "workshops" | "courses"
const CheckboxContactForm = ({ variant }) => {
    const [items, setItems] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const fetchItems = useCallback(async (variant) => {  
        let items = await getDocsFirestore(variant);
        setItems(items);
        setLoaded(true);
    }, []);

    useEffect(() => {
        setLoaded(false);
        fetchItems(variant);
    }, [variant, fetchItems]);

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

    const sendIcon = <Icon name={"send"} design="transparent"/>;

    return loaded ? (
        <form onSubmit={submitForm} className="check-form d-flex flex-column flex-sm-row">
            <div className="d-flex flex-column col-12 col-sm-6">
                {items.map((checkbox, index) => {
                    if (variant === "courses" && checkbox.id === 1) return null;
            
                    return (
                        <label key={`label-${index}`} className="checkboxLabel text-body">
                            <input type="checkbox" name={checkbox.name} key={`input-${index}`} onChange={handleCheckboxChange} />
                            {checkbox.name}
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

                <AppButton variant={"regular"} as={"handler"} design={"primary"} text={"Enviar"} EndIcon={sendIcon} type={"submit"} />
            </div>
        </form>
    ) : (
        "Cargando..."
    );
};

export default CheckboxContactForm;
