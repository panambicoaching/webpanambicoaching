import HomeCover from "../components/HomeCover";
import PanambiServices from "../components/PanambiServices";
import Hello from "../components/Hello";
import CallToAction from "../components/CallToAction";
import AppButton from "../components/AppButton";

const HomePage = () => {
    const ctaTitle = "¿Te has puesto a pensar cuántas emociones te llevas a tu hogar luego de un día de trabajo?";
    const ctaButton = <AppButton variant={"regular"} as={"link"} design={"primary"} text={"Volemos juntos"} />;

    return (
        <div>
            <HomeCover />
            <PanambiServices cardsNames={["courses", "workshops", "conferences"]} cardsAreLinks={true} />
            <Hello />
            <CallToAction title={ctaTitle} titleStyle={{ typo: "text-headline", color: "primary" }} buttonComp={ctaButton} />
        </div>
    );
}

export default HomePage;