import ContactUs from "../components/ContactUs";
import CallToAction from "../components/CallToAction";

const ContactPage = () => {
    const ctaTitle = "Permíteme guiarte hacia tu destino, de manera segura, confiable y con excelencia.";
    const ctaStyle = {typo:"text-headline", color: "primary"};
    return (
        <div>
            <ContactUs />
            <CallToAction title={ctaTitle} titleStyle={ctaStyle} />
        </div>
    );
}

export default ContactPage;