import React from "react"
import styles from "./NotFoundPage.module.css"
import ReturnButton from "../assets/components/ReturnButton.jsx";

function NotFoundPage(){
    return(
        <>
                <div className={styles.error_block}>
                    <h1> Not Found</h1>
                    <h2>Error, wrong page, click to return</h2>
                    <ReturnButton/>
                </div>
        </>
    );
}

export default NotFoundPage