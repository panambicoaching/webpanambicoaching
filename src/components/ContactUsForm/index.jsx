import { useForm, ValidationError } from "@formspree/react";
import AppButton from "../AppButton";
import Icon from "../Icon";

const ContactUsForm = () => {
    const [state, handleSubmit] = useForm("xdovwrwo");
    return (
        <>
            {/* {state.succeeded ? "throw alert" : null}*/}
            <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-between col-12 col-sm-6">
                <input id="first-name" type="text" name="Nombre" placeholder="Nombre" />
                <label htmlFor="first-name">Ingresá tu nombre</label>

                <input id="email" type="email" name="Email" placeholder="Email" />
                <label htmlFor="email">Ingresá tu email</label>
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <input id="subject" type="text" name="Asunto" placeholder="Asunto" />
                <label htmlFor="subject">Ingresá un asunto</label>

                <input name="subject" type="hidden" value={"{{ Asunto }}"} />

                <textarea id="message" name="Message" placeholder="Mensaje" />
                <label htmlFor="message">Escribinos tu mensaje</label>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <AppButton variant={"regular"} as={"handler"} design={"primary"} text={"Enviar"} EndIcon={<Icon name={"send"} />} type={"submit"} />
            </form>
        </>
    );
};

export default ContactUsForm;
