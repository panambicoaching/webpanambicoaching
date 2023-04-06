import ContactUs from "../components/ContactUs";
import CallToAction from "../components/CallToAction";

const ContactPage = () => {
    const ctaTitle = "Permíteme guiarte hacia tu destino, de manera segura, confiable y con excelencia.";
    return (
			<div>
                <ContactUs />
                <CallToAction title={ctaTitle} titleStyle={{typo:"text-display", color: "primary"}}/>
			</div>

    )
}

export default ContactPage;