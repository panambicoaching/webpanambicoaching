// title and text take strings
// titleStyle prop format => {typo: text-headline, color: "primary"}
const CallToAction = ({title, titleStyle, text, buttonComp}) => {
    return (
        <section>
            <h2 className={`${titleStyle.typo} ${titleStyle.color}-text`}>
                {title}
            </h2>
            {text ? <p>{text}</p> : null}
            {buttonComp}
        </section>
    )
}

export default CallToAction