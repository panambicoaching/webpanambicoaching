import AboutMe from "../components/AboutMe";
import AboutUsCover from "../components/AboutUsCover";
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
			</>
		)
}

export default AboutPage;