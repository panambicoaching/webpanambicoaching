import "./styles.scss";

import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

// variant prop available values -> "icon" ; "regular"
// as prop available values -> "link" ; "handler"
// design prop available values -> "primary" ; "secondary" ; "social"
const AppButton = ({ variant, as, design, to, text, StartIcon, EndIcon, target, onClickFn, type, form, disabled }) => {
    if (as === "link") {
        return (
            <Button as={Link} to={to} className={`panambi-btn ${design}-btn`} target={target ? target : "_self"} disabled={disabled}>
                {variant === "icon" && (StartIcon || EndIcon)}

                {variant === "regular" && (StartIcon || null)}
                {variant === "regular" && text ? <span className={`text-button ${StartIcon ? "ps-2" : ""} ${EndIcon ? "pe-2" : ""}`}>{text}</span> : null}
                {variant === "regular" && (EndIcon || null)}
            </Button>
        );
    }

    if (as === "handler") {
        return (
            <button className={`panambi-btn ${design}-btn`} onClick={onClickFn} form={form} type={type} disabled={disabled}>
                {variant === "icon" && (StartIcon || EndIcon)}

                {variant === "regular" && (StartIcon || null)}
                {variant === "regular" && text ? <span className={`text-button ${StartIcon ? "ps-2" : ""} ${EndIcon ? "pe-2" : ""}`}>{text}</span> : null}
                {variant === "regular" && (EndIcon || null)}
            </button>
        );
    }
};

export default AppButton;
