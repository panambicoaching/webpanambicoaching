import AboutMe from "../components/AboutMe";
import AboutUsCover from "../components/AboutUsCover";
import Banner from "../components/Banner";
import FAQsList from "../components/FAQsList";
import Manual from "../components/Manual";
import MyValuesList from "../components/MyValuesList";
import FourBodies from "../components/FourBodies";

const AboutPage = () => {
		return (
			<> 
				<AboutUsCover />
                <FourBodies />
				<MyValuesList />
				<AboutMe />
				<Manual />
				<Banner variant="newsletter" component={""}/>
				<FAQsList />
			</>
		)
}

export default AboutPage;