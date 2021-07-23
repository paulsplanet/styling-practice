import styles from "./CSSModule.module.css";
import React from "react";

const CSSModule = () => {
    return(
        <div className={`${styles.wrapper} ${styles.inverted}`}>
            Hello, I'm <span className="something">CSS Module!</span>
        </div>
    )
};

export default CSSModule;