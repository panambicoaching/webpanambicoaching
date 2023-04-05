import { useLocation } from "react-router-dom";
import ListItem from "../ListItem";
import "./styles.scss"

// cartTitles prop available values -> ["curses", "workshops", "conferences"], ["mental", "physical", "emotional", "spiritual"], ["entrepreneur", "motivational", "author"]
// cardsAreLinks prop is boolean
const ItemsList = ({ cardsNames, cardsAreLinks }) => {
    
    let location = useLocation().pathname.split("/");
    let path = location[location.length - 1];

    if (path === "" || path === "conferences") {
        return (
            <section className="d-flex flex-column flex-sm-row">
                {cardsNames.map((name) => {
                    return <ListItem design="transparent" name={name} cardsAreLinks={cardsAreLinks} key={`${name}-card`} />;
                })}
            </section>
        );
    }

    if (path === "about") {
        return (
            <section className="d-flex flex-column flex-sm-row"> {/* MARGENES Y DISPOSICIÓN DIFERENTE */}
                {cardsNames.map((name) => {
                    return <ListItem design="white-rounded" name={name} cardsAreLinks={cardsAreLinks} key={`${name}-card`} />;
                })}
            </section>
        );
    }
};

export default ItemsList;