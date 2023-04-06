import ConferencesCover from "../components/ConferencesCover";
import ItemsList from "../components/ItemsList";
import ConferencesAboutMe from "../components/ConferencesAboutMe";
import AppButton from "../components/AppButton";
import CallToAction from "../components/CallToAction";

const ConferencesPage = () => {
    const ctaTitle = "¡Puedo estar en tu próximo evento!";
    const ctaStyle = {typo: "text-headline", color: "primary"};
    const ctaText = "Contactame para conocer más sobre tu evento y compartirte mi propuesta diferenciadora como speaker.";
    const ctaButton = <AppButton variant={"regular"} as={"link"} design={"primary"} text={"Volemos juntos"} />;
    return (
        <div>
            <ConferencesCover />
            <ItemsList cardsNames={["entrepreneur", "motivational", "author"]} cardsAreLinks={false} />
            <ConferencesAboutMe />
            <CallToAction title={ctaTitle} titleStyle={ctaStyle} text={ctaText} buttonComp={ctaButton} />
        </div>
    );
}

export default ConferencesPage;