import AppButton from "../components/AppButton";
import Banner from "../components/Banner";
import CoursesContainer from "../components/CoursesContainer";
import Icon from "../components/Icon";
import OpinionsContainer from "../components/OpinionsContainer";

const CoursesPage = () => {
		const SpotifyIcon = <Icon name={"spotify_a"} />

		const Btn = <AppButton 
						variant={"regular"}
						as={"link"}
						design={"secondary"}
						to={"https://spotify.com"}
						text={"Escuchar ahora"}
						target={"_blank"}
						StartIcon={SpotifyIcon}
		/>

		return (
			<>
				<CoursesContainer status={"done"}/>
				<CoursesContainer status={"next"}/>
				<OpinionsContainer />
				<Banner variant="spotify" component={Btn}/>
			</>
		)
}

export default CoursesPage;