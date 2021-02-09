import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = ({value}) => {
    return (
        <button type='submit' className={styles.SubmitButton}>{value}</button>
    );
}

export default SubmitButton;