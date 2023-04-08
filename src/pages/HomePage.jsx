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
        <div>
            <HomeCover />
            <PanambiFeatures itemsNames={cardsNames} cardsAreLinks={true} sectionTitle={featuresTitle} text={featuresText}/>
            <Hello />
            <CallToAction title={ctaTitle} titleStyle={ctaTitleStyle} buttonComp={ctaButton} />
        </div>
    );
}

export default HomePage;