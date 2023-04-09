import "./styles.scss"
import { Container } from "react-bootstrap";

// title and text take strings
// titleStyle prop format => {typo: text-headline, color: "primary"}
const CallToAction = ({title, titleStyle, text, buttonComp}) => {
    return (
        <section className="callToAction">
            <Container className="text-center">
                <h2 className={`text-center ${titleStyle.typo} ${titleStyle.color}-color-text`}>{title}</h2>
                {text ? <p className="text-body">{text}</p> : null}
                {buttonComp}
            </Container>
        </section>
    );
}

export default CallToAction