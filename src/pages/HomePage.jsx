import AppButton from "../components/AppButton";
import Icon from "../components/Icon";
import HomeCover from "../components/HomeCover";
import Services from "../components/Services";

const HomePage = () => {
		const instagramIcon = <Icon name={"instagram"} />	
		const sendIcon = <Icon name={"send"} />
	
		return (
			<div>
                <HomeCover />
                <Services cardsNames={["courses", "workshops", "conferences"]} cardsAreLinks={true}/>

				<Icon design={"blue-rounded"} name={"responsability"} />
				<Icon design={"blue-rounded"} name={"confidentiality"} />
				<Icon design={"transparent"} name={"workshops"} />
				<Icon name={"spotify_a"} />



				<AppButton 
					variant={"regular"}
					as={"link"}
					design={"primary"}
					to={"https://google.com.ar"}
					text={"Disabled"}
					disabled={true}
				/>

				<AppButton 
					variant={"regular"}
					as={"handler"}
					design={"primary"}
					text={"Enviar"}
					EndIcon={sendIcon}
					onClickFn={()=>{}}
				/>

				<AppButton 
					variant={"icon"}
					as={"link"}
					design={"social"}
					to={"https://instagram.com"}
					target={"_blank"}
					StartIcon={instagramIcon}
				/>
			</div>
		)
}

export default HomePage;