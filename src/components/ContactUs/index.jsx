import Icon from "../Icon";
import AppButton from "../AppButton";
import ContactUsForm from "../ContactUsForm";

const ContactUs = () => {
    return (
        <section className="d-flex flex-column flex-sm-row">
            <div className="col-12 col-sm-6">
                <h1>
                    Contactate
                    <br />
                    conmigo
                </h1>
                <p>Si querés saber más sobre alguno de mis servicios, dejame un mensaje, estaré encantada de contactarme con vos.</p>
                <div>
                    <h4>Seguime en</h4>
                    <AppButton as={"link"} design={"social"} to={"#"} variant={"icon"} StartIcon={<Icon name={"instagram"} />} />
                    <AppButton as={"link"} design={"social"} to={"#"} variant={"icon"} StartIcon={<Icon name={"spotify"} />} />
                    <AppButton as={"link"} design={"social"} to={"#"} variant={"icon"} StartIcon={<Icon name={"youtube"} />} />
                    <AppButton as={"link"} design={"social"} to={"#"} variant={"icon"} StartIcon={<Icon name={"tiktok"} />} />
                </div>
            </div>
            <ContactUsForm />
        </section>
    );
}
export default ContactUs;   