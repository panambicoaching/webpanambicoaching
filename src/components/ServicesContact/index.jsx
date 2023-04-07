import CheckboxContactForm from "../CheckboxContactForm";

// variant prop available values => "workshops" | "courses"

const ServicesContact = ({variant}) => {
    const title = {
        workshops: "Talleres 100% personalizables",
        courses: "Seleccioná tu curso",
    };

    const textBody = {
        workshops: "Elegí los temas que te gustaría que abordemos juntos y me pongo en contacto con vos para ayudarte a potenciar tu futuro y el de tu organización.",
        courses: "Seleccioná el curso que te interesa y estaré encantada de contactarme con vos para enviarte más información. También podés dejarme un comentario con cualquier duda que tengas.",
    }

    return (
        <section>
            <div>
                <h2>{title[variant]}</h2>
                <p>{textBody[variant]}</p>
            </div>
            <CheckboxContactForm variant={variant}/>
        </section>
    );
};

export default ServicesContact;
