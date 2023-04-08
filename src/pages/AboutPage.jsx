import AboutMe from "../components/AboutMe";
import Manual from "../components/Manual";
import MyValuesList from "../components/MyValuesList";
import FourBodies from "../components/FourBodies";

const AboutPage = () => {
		return (
			<> 
                <FourBodies />
				<MyValuesList />
				<AboutMe />
				<Manual />
			</>
		)
}

export default AboutPage;