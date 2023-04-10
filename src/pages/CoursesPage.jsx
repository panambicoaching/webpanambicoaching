import AppButton from "../components/AppButton";
import Banner from "../components/Banner";
import CoursesContainer from "../components/CoursesContainer";
import GradientCover from "../components/GradientCover";
import Icon from "../components/Icon";
import OpinionsContainer from "../components/OpinionsContainer";

const BannerBtn = (
  <AppButton
    variant={"regular"}
    as={"link"}
    design={"secondary"}
    to={"https://open.spotify.com/show/1dTEILdq7RUYMYeBoP8ek9"}
    text={"Escuchar ahora"}
    target={"_blank"}
    StartIcon={<Icon name={"spotify_a"} />}
  />
);

const CoursesPage = () => {
		return (
			<>
				<GradientCover variant={"courses"}/>
				<CoursesContainer status={"done"}/>
				<CoursesContainer status={"next"}/>
				<OpinionsContainer />
				<Banner variant="spotify" component={BannerBtn}/>
			</>
		)
}

export default CoursesPage;