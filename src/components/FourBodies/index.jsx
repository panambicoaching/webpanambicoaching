import ItemsList from "../ItemsList";
import "./styles.scss";

const FourBodies = () => {
    const itemsNames = ["mental", "physical_therapy", "mood", "spiritual"];
    return (
        <section className="four-bodies">
            <div className="container-lg">
                <ItemsList itemsNames={itemsNames} design={"white-rounded"} cardsAreLinks={false} />
            </div>
        </section>
    );
}

export default FourBodies;