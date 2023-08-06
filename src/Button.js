import PromTYpes from "prop-types"
import styles from  "./Button.module.css"

function Button({text}){
    return <button className={styles.btn}>{text}</button>;
}

Button.prototypes = {
    text : PromTYpes.string.isRequired
}

export default Button;