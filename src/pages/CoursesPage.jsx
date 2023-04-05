import CoursesContainer from "../components/CoursesContainer";
import OpinionsList from "../components/OpinionsList";

const CoursesPage = () => {
		return (
			<>
				<CoursesContainer status={"done"}/>
				<CoursesContainer status={"next"}/>
				<OpinionsList />
			</>
		)
}

export default CoursesPage;