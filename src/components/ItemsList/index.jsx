import ListItem from "../ListItem";
import "./styles.scss"
import { useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

// cartTitles prop available values -> ["curses", "workshops", "conferences"], ["mental", "physical_therapy", ""mood"", "spiritual"], ["entrepreneur", "motivational", "author"]
// cardsAreLinks prop is boolean
// design prop available values -> "white-rounded", "transparent"
const ItemsList = ({ itemsNames, cardsAreLinks, design }) => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    if (design === "transparent") {
        return (
            <div className={`d-flex flex-column flex-sm-row item-list ${isHome ? "home-list" : "conferences-list"}}`}>
                {itemsNames.map((name) => {
                    return <ListItem design={design} name={name} cardsAreLinks={cardsAreLinks} key={`${name}-card`} />;
                })}
            </div>
        )
    }

    return (
        <Row>
            {itemsNames.map((name, index) => {
                return (
                    <Col className="col-6 col-sm-3" key={`column-${index}`}>
                        <ListItem design={design} name={name} cardsAreLinks={cardsAreLinks} key={`${name}-card`} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default ItemsList;