import ItemsList from '../ItemsList';


const Services = ({ cardsNames, cardsAreLinks }) => {
    return (
        <section>
            <h2>Mis servicios</h2>
            <p>Te ayudamos a superar aquellos obstáculos que parecen estancarte y potenciarte hacia un futuro prometedor.</p>
            <ItemsList cardsNames={cardsNames} cardsAreLinks={cardsAreLinks} />
        </section>
    );
};

export default Services;