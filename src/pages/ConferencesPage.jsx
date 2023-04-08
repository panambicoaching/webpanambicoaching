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
        <div>
            <ConferencesCover />
            <PanambiFeatures itemsNames={cardsNames} cardsAreLinks={false} sectionTitle={featuresTitle}/>
            <ConferencesAboutMe />
            <CallToAction title={ctaTitle} titleStyle={ctaStyle} text={ctaText} buttonComp={ctaButton} />
        </div>
    );
}

export default ConferencesPage;