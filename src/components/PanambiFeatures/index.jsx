import ItemsList from '../ItemsList';
import './styles.scss';

const PanambiFeatures = ({ itemsNames, cardsAreLinks, sectionTitle, text}) => {
    const isHomePage = cardsAreLinks? true : false;

    return (
        <section className={`features-section container-fluid`} id={isHomePage ? "features-home" : "features-conferences"}>
            <div className='container-lg'>
                <h2 className="text-center text-headline">{sectionTitle}</h2>
                {text && <p className="text-body text-center">{text}</p>}
                <ItemsList itemsNames={itemsNames} cardsAreLinks={cardsAreLinks} design={"transparent"} />
            </div>
        </section>
    );
};

export default PanambiFeatures;