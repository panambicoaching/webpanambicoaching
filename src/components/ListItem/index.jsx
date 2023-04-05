import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import "./styles.scss";

const cardInfo = {
    courses: { text: "100% online. Acceso 24/7, donde y cuando quieras.", title: "Cursos" },
    workshops: { text: "100% personalizados según tus necesidades.", title: "Talleres" },
    conferences: { text: "Te ayudamos a redescubrir y reinventarte.", title: "Conferencias" },
    mental: { text: "Está formado por las creencias, los deseos, actitudes, juicios, prejuicios, valores y metas.", title: "Mental" },
    physical: { text: "Es lo que consideramos la parte visible y todo lo que conforma su interior. Es nuestro «templo».", title: "Físico" },
    emotional: { text: "No lo podemos ver, pero sí sentirlo. Representa nuestras experiencias en el mundo y cómo lo interpretamos.", title: "Emocional" },
    spiritual: { text: "Es nuestra verdadera esencia, la reconexión con nosotros mismos y todo lo que nos rodea. ", title: "Espiritual" },
    entrepreneur: { text: "“Estoy siempre en constante movimiento, descubriendo nuevas etapas de mi vida”.", title: "Emprendedora" },
    motivational: { text: "“Desde pequeña me encanta escuchar a las personas y dar consejos positivos”.", title: "Motivadora" },
    author: { text: "“Una faceta de mí que está en pleno auge, y estoy ansiosa por dar más”.", title: "Autora" },
};

const ListItem = ({ design, name, cardsAreLinks }) => {
    if (cardsAreLinks) {
        return (
            <Link to={`/${name}`}>
                <Card>
                    <Icon design={design} name={name} />
                    <Card.Body className={design}>
                        <Card.Title>{cardInfo[name].title}</Card.Title>
                        <Card.Text>{cardInfo[name].text}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        );
    }

    return (
        <Card>
            <Icon design={design} name={name} />
            <Card.Body className={design}>
                <Card.Title>{cardInfo[name].title}</Card.Title>
                <Card.Text>{cardInfo[name].text}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ListItem;