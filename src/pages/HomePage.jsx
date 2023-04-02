import AppButton from "../components/AppButton";
import Icon from "../components/Icon";

const HomePage = () => {
		const instagramIcon = <Icon name={"instagram"} />	
		const sendIcon = <Icon name={"send"} />
	
		return (
			<div>
				HomePage components

				<Icon design={"blue-rounded"} name={"responsability"} />
				<Icon design={"blue-rounded"} name={"confidentiality"} />
				<Icon design={"transparent"} name={"workshop"} />
				<Icon name={"spotify_a"} />

				<AppButton 
					variant={"regular"}
					as={"link"}
					design={"primary"}
					to={"https://google.com.ar"}
					text={"Comencemos"}
				/>

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