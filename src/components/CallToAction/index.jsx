import AppButton from "../AppButton";
const CallToAction = ({title, titleStyle, text, buttonText}) => {
    return (
        <section>
            <h2 className={`${titleStyle.typo} ${titleStyle.color}-text`}>
                {title}
            </h2>
            {text ? <p>{text}</p> : null}
            {buttonText ? <AppButton variant={"regular"} as={"link"} design={"primary"} text={"Volemos juntos"} /> : null}
        </section>
    )
}

export default CallToAction