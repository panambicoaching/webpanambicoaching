import ItemsList from '../ItemsList';
import './styles.scss';
import { Container } from 'react-bootstrap';

const PanambiFeatures = ({ itemsNames, cardsAreLinks, sectionTitle, text}) => {
    return (
        <section className={`features-section container-fluid`}>
            <Container>
                <h2 className="text-center text-headline">{sectionTitle}</h2>
                {text && <p className="text-body text-center">{text}</p>}
                <ItemsList itemsNames={itemsNames} cardsAreLinks={cardsAreLinks} design={"transparent"} />
            </Container>
        </section>
    );
};

export default PanambiFeatures;