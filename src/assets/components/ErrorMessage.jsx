// Определение компонента ErrorMessage
import React from 'react';
import styles from './ErrorMessage.module.css';

function ErrorMessage({ message }) {
    return (
        <div className={styles.error_message}>
            {message}
        </div>
    );
}

export default ErrorMessage;
