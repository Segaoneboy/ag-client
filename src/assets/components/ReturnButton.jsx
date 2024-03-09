import React from 'react'
import { useNavigate} from "react-router-dom";
import styles from "./ReturnButton.module.css"

function ReturnButton(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div className={styles.return_btn_block}>
            <button onClick={handleClick} className={styles.return_btn}>Return</button>
        </div>

    );
}

export default ReturnButton