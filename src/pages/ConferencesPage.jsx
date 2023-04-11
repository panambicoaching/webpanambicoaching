import { Helmet } from 'react-helmet'

import ConferencesCover from "../components/ConferencesCover";
import PanambiFeatures from "../components/PanambiFeatures";
import ConferencesAboutMe from "../components/ConferencesAboutMe";
import AppButton from "../components/AppButton";
import CallToAction from "../components/CallToAction";

const ConferencesPage = () => {
    const ctaTitle = "¡Puedo estar en tu próximo evento!";
    const ctaStyle = {typo: "text-headline", color: "primary"};
    const ctaText = "Contactame para conocer más sobre tu evento y compartirte mi propuesta diferenciadora como speaker.";
    const ctaButton = <AppButton variant={"regular"} as={"link"} design={"primary"} text={"Volemos juntos"} to={"/contact/#"}/>;
    const featuresTitle = "¿Por qué elegirme para tu próximo evento?";
    const cardsNames = ["entrepreneur", "motivational", "author"];

    return (
        <>
            <Helmet>
                <title>Panambí coaching | Conferencias de coaching</title>
                <link href="https://panambicoaching.com/" rel="canonical" />
                <meta
                    content="Conferencias de coaching profesional con presentaciones interactivas de 1 hora, 45 minutos de exposición y 15 minutos para dudas del público. Mi objetivo es ayudar a las personas a entender y gestionar sus emociones para aceptarse y aceptar su entorno. Les enseño a desarrollar técnicas de auto-control emocional y de manejo de estrés en situaciones críticas, a lograr objetivos realistas y alcanzables."
                    name="description"
                />
                <meta
                    content="coaching profesional, coaching en aviación, conferencias, confidencialidad, crecimiento, habilidades blandas, softs skills, cuatro cuerpos, económico, manejo de estrés, técnicas de auto-control"
                    name="Keywords"
                />
            </Helmet>
            <ConferencesCover />
            <PanambiFeatures itemsNames={cardsNames} cardsAreLinks={false} sectionTitle={featuresTitle}/>
            <ConferencesAboutMe />
            <CallToAction title={ctaTitle} titleStyle={ctaStyle} text={ctaText} buttonComp={ctaButton} />
        </>
    );
}

export default ConferencesPage;