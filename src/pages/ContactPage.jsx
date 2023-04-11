import { Helmet } from 'react-helmet'

import ContactUs from "../components/ContactUs";
import CallToAction from "../components/CallToAction";

const ContactPage = () => {
    const ctaTitle = "Permíteme guiarte hacia tu destino, de manera segura, confiable y con excelencia.";
    const ctaStyle = {typo:"text-headline", color: "primary"};
    return (
        <>
            <Helmet>
                <title>Panambí coaching | Contactame</title>
                <link href="https://panambicoaching.com/" rel="canonical" />
                <meta
                    content="Soy Coach profesional certificada. Brindo cursos, talleres y conferencias de coaching y coaching especializado en aviación para potenciar el crecimiento de las personas a través del desarrollo de soft skills. Mi metodología se basa en afrontar cada habilidad desde los cuatro cuerpos: mental, físico, emocional y espiritual. Responsabilidad, excelencia, confidencialidad, escucha activa, resolución y lealtad son los valores que me destacan."
                    name="description"
                />
                <meta
                    content="coaching profesional, coaching en aviación, cursos, talleres, conferencias, confidencialidad, crecimiento, habilidades blandas, soft skills, cuatro cuerpos, curso gratis, curso económico"
                    name="Keywords"
                />
            </Helmet>
            <ContactUs />
            <CallToAction title={ctaTitle} titleStyle={ctaStyle} />
        </>
    );
}

export default ContactPage;