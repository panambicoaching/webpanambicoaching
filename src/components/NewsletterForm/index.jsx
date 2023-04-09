import { useState } from "react";
import AppButton from "../AppButton";
import "./styles.scss";

const NewsletterForm = () => {

    const formID = "xayzpgpn";
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(false);

    const validateEmail = (email) => {
        if (!email) {
            setEmailError(true);
            return false;
        }
        // /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/ possible regex with no warnings
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{3,}$/g.test(email)) {
            setEmailError(true);
            return false;
        }

        setEmailError(false);
        return true;
    }

    const handleChange = (e, set) => {
        set(e.target.value);

        if (e.target.parentNode.classList.contains("labelError")) {
            validateEmail(e.target.value);
        }
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
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


            console.log("Form submitted successfully");
            // SHOW NOTIFICATIONS
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <form onSubmit={submitForm} className="d-flex flex-column flex-sm-row newsletter-form">
                <label htmlFor="email" className={`text-body ${emailError && "labelError"}`}>
                    <input id="email" type="email" name="Email" placeholder="Ingresá tu email" onChange={(e) => handleChange(e, setEmail)} />
                    <div>{`${emailError ? "Ingresá un email válido" : ""}`}</div>
                </label>
                <AppButton variant={"regular"} as={"handler"} design={"secondary"} text={"¡Lo quiero!"} type={"submit"} />
            </form>
        </>
    );
};

export default NewsletterForm;
