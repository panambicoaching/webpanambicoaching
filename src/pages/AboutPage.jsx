import AboutMe from "../components/AboutMe";
import AboutUsCover from "../components/AboutUsCover";
import Banner from "../components/Banner";
import FAQsList from "../components/FAQsList";
import Manual from "../components/Manual";
import MyValuesList from "../components/MyValuesList";
import FourBodies from "../components/FourBodies";
import NewsletterForm from "../components/NewsletterForm";

const AboutPage = () => {

        const newsnetterForm = <NewsletterForm />
		return (
            <>
                <AboutUsCover />
                <FourBodies />
                <MyValuesList />
                <AboutMe />
                <Manual />
                <Banner variant="newsletter" component={newsnetterForm} />
                <FAQsList />
            </>
        );
}

export default AboutPage;