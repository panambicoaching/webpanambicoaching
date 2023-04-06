import HomeCover from "../components/HomeCover";
import Services from "../components/Services";
import Hello from "../components/Hello";
import CallToAction from "../components/CallToAction";

const ctaTitle = "¿Te has puesto a pensar cuántas emociones te llevas a tu hogar luego de un día de trabajo?";

const HomePage = () => {

    return (
        <div>
            <HomeCover />
            <Services cardsNames={["courses", "workshops", "conferences"]} cardsAreLinks={true} />
            <Hello />
            <CallToAction title={ctaTitle} titleStyle={{typo:"text-headline", color: "primary"}} buttonText={"Volemos juntos"} />
        </div>
    );
}

export default HomePage;