import CoursesContactForm from '../CoursesContactForm';

const CoursesContact = () => {
    return(
        <section>
            <div>
                <h2>Seleccioná tu curso</h2>
                <p>
                    Seleccioná el curso que te interesa y estaré encantada de contactarme con vos para enviarte más información. También podés dejarme un comentario
                    con cualquier duda que tengas.
                </p>
            </div>
            <CoursesContactForm />
        </section>
    );
};

export default CoursesContact;
