import AboutMe from "../components/AboutMe";
import AboutUsCover from "../components/AboutUsCover";
import Manual from "../components/Manual";
import MyValuesList from "../components/MyValuesList";

const AboutPage = () => {
		return (
			<>
				<AboutUsCover />
				<MyValuesList />
				<AboutMe />
				<Manual />
			</>
		)
}

export default AboutPage;