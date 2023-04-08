import ItemsList from "../ItemsList";
import "./styles.scss";
import { Container } from "react-bootstrap";

const FourBodies = () => {
    const itemsNames = ["mental", "physical_therapy", "mood", "spiritual"];
    return (
        <section className="four-bodies">
            <Container>
                <ItemsList itemsNames={itemsNames} design={"white-rounded"} cardsAreLinks={false} />
            </Container>
        </section>
    );
}

export default FourBodies;