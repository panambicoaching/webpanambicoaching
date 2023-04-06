import { useForm, ValidationError } from "@formspree/react";
import AppButton from "../AppButton";

const NewsletterForm = () => {
    const formOptions = {
        data: {
            subject: "Solicitud de adelanto",
        },
    };

    const [state, handleSubmit] = useForm("xayzpgpn", formOptions);

    return (
        <>
            {/* {state.succeeded ? "throw alert" : null}*/}
            <form onSubmit={handleSubmit} className="d-flex flex-column flex-sm-row">
                <input id="email" type="email" name="Email" placeholder="Ingresá tu email" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <AppButton variant={"regular"} as={"handler"} design={"secondary"} text={"¡Lo quiero!"} type={"submit"} />
            </form>
        </>
    );
};

export default NewsletterForm;
