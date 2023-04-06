import CoursesContainer from "../components/CoursesContainer";
import OpinionsContainer from "../components/OpinionsContainer";

const CoursesPage = () => {
		return (
			<>
				<CoursesContainer status={"done"}/>
				<CoursesContainer status={"next"}/>
				<OpinionsContainer />
			</>
		)
}

export default CoursesPage;