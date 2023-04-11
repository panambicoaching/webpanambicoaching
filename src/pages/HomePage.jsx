import { Helmet } from 'react-helmet'

import HomeCover from "../components/HomeCover";
import PanambiFeatures from "../components/PanambiFeatures";
import Hello from "../components/Hello";
import CallToAction from "../components/CallToAction";
import AppButton from "../components/AppButton";

const HomePage = () => {
    const ctaTitle = "¿Te has puesto a pensar cuántas emociones te llevas a tu hogar luego de un día de trabajo?";
    const ctaButton = <AppButton variant={"regular"} as={"link"} design={"primary"} text={"Volemos juntos"} to={"/contact/#"} />;
    const ctaTitleStyle = { typo: "text-headline", color: "primary" }
    const featuresTitle = "Mis servicios";
    const featuresText = "Te ayudamos a superar aquellos obstáculos que parecen estancarte y potenciarte hacia un futuro prometedor.";
    const cardsNames = ["courses", "workshops", "conferences"];

    return (
        <>
            <Helmet>
                <title>Panambí coaching | El arte de volar juntos</title>
                <link href="https://panambicoaching.com/" rel="canonical" />
                <meta
                    content="Soy Coach profesional certificada. Brindo cursos, talleres y conferencias de coaching y coaching especializado en aviación para potenciar el crecimiento de las personas a través del desarrollo de soft skills. Mi metodología se basa en afrontar cada habilidad desde los cuatro cuerpos: mental, físico, emocional y espiritual. Responsabilidad, excelencia, confidencialidad, escucha activa, resolución y lealtad son los valores que me destacan."
                    name="description"
                />
                <meta
                    content="coaching profesional, coaching en aviación, cursos, talleres, conferencias, confidencialidad, crecimiento, habilidades blandas, softs skills, cuatro cuerpos, curso gratis, curso económico"
                    name="Keywords"
                />
            </Helmet>
            <HomeCover />
            <PanambiFeatures itemsNames={cardsNames} cardsAreLinks={true} sectionTitle={featuresTitle} text={featuresText}/>
            <Hello />
            <CallToAction title={ctaTitle} titleStyle={ctaTitleStyle} buttonComp={ctaButton} />
        </>
    );
}

export default HomePage;