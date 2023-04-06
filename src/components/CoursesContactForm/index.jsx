import { useForm, ValidationError } from "@formspree/react";
import AppButton from "../AppButton";
import Icon from "../Icon";

const CoursesContactForm = () => {
    const formOptions = {
        data: {
            subject: "Consulta sobre cursos"
        }
    }
    const [state, handleSubmit] = useForm("xnqygkbe", formOptions);

    return (
        <>
            {/* {state.succeeded ? "throw alert" : null}*/}
            <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row justify-content-between">
                <div className="d-flex flex-column col-12 col-sm-6">
                    <label>
                        <input type="checkbox" name="Cuatro cuerpos" />
                        Descubre tus 4 cuerpos y empodérate
                    </label>
                    <label>
                        <input type="checkbox" name="Emoción consciente" />
                        Emoción consciente
                    </label>
                    <label>
                        <input type="checkbox" name="Vuelo emocional" />
                        Vuelo emocional
                    </label>
                    <label>
                        <input type="checkbox" name="Equilibrio personal" />
                        Equilibrio personal
                    </label>
                    <label>
                        <input type="checkbox" name="Meditar" />
                        Aprende a meditar
                    </label>
                    <label>
                        <input type="checkbox" name="Amor propio" />
                        Empodérate despertando tu amor propio
                    </label>
                </div>
                <div className="d-flex flex-column col-12 col-sm-6">
                    <input id="first-name" type="text" name="Nombre" placeholder="Nombre" />
                    <label htmlFor="first-name">Ingresá tu nombre</label>

                    <input id="email" type="email" name="Email" placeholder="Email" />
                    <label htmlFor="email">Ingresá tu email</label>
                    <ValidationError prefix="Email" field="email" errors={state.errors} />

                    <textarea id="message" name="Message" placeholder="Mensaje" />
                    <label htmlFor="message">Escribinos tu mensaje</label>
                    <ValidationError prefix="Message" field="message" errors={state.errors} />

                    <AppButton variant={"regular"} as={"handler"} design={"primary"} text={"Enviar"} EndIcon={<Icon name={"send"} />} type={"submit"} />
                </div>
            </form>
        </>
    );
};

export default CoursesContactForm;
