import { useForm, ValidationError } from "@formspree/react";
import AppButton from "../AppButton";
import Icon from "../Icon";

// variant prop available values => "workshops" | "courses"
const CheckboxContactForm = ({variant}) => {

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
    }

    const formIDs = {
        workshops: "mwkjrggo",
        courses: "xnqygkbe",
    };

    const formOptions = {
        data: {
            subject: `${subjects[variant]}`,
        },
    };

    const [state, handleSubmit] = useForm(`${formIDs[variant]}`, formOptions);

    return(
        <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row justify-content-between">
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
    );
};

export default CheckboxContactForm;
