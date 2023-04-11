import AppButton from "../AppButton";
import Banner from "../Banner";
import Icon from "../Icon";
import NewsletterForm from "../NewsletterForm";

const bannerType = {
	newsletter: {
    component: <NewsletterForm />,
    text: "Recibí un adelanto GRATIS"
	},
	spotify: {
		component:  <AppButton
                  variant={"regular"}
                  as={"link"}
                  design={"secondary"}
                  to={"https://open.spotify.com/show/1dTEILdq7RUYMYeBoP8ek9"}
                  text={"Escuchar ahora"}
                  target={"_blank"}
                  StartIcon={<Icon name={"spotify_a"} />}
                />,
    text: "Escuchá gratis mi Podcast en Spotify"
	}
}

// variant prop available values -> "newsletter" ; "spotify"
const BannerContainer = ({ variant }) => {
  return (
    <Banner variant={variant} text={bannerType[variant].text} component={bannerType[variant].component} />
  );
};

export default BannerContainer;