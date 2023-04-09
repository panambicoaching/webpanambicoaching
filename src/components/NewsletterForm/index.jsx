import { useState } from "react";
import AppButton from "../AppButton";
import "./styles.scss";
import showAlert from "../../utils/alert";
import validator from "../../utils/validator";

const NewsletterForm = () => {

    const formID = "xayzpgpn";
    const [emailError, setEmailError] = useState(false);

    const handleChange = (e) => {
        if (e.target.parentNode.classList.contains("labelError")) {
            validator.validateEmail(e.target.value);
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get("Email");

        if (!validator.validateEmail(email, setEmailError)) {
            return;
        }

        try {

            const formData = {
                Email: email,
                subject: "Solicitud de newsletter",
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
    }

    return (
        <>
            <form onSubmit={submitForm} className="d-flex flex-column flex-sm-row newsletter-form">
                <label htmlFor="email" className={`d-flex flex-grow-1 text-body ${emailError? "labelError" : ""}`}>
                    <input id="email" type="email" name="Email" placeholder="Ingresá tu email" onChange={(e) => handleChange(e/* , setEmail */)} />
                    <div>{`${emailError ? "Ingresá un email válido" : ""}`}</div>
                </label>
                <AppButton variant={"regular"} as={"handler"} design={"secondary"} text={"¡Lo quiero!"} type={"submit"} />
            </form>
        </>
    );
};

export default NewsletterForm;
