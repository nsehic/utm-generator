import React from 'react';
import styles from './SubmitButton.module.css';

const SubmitButton = ({value, disabled}) => {
    return disabled ? <button disabled type='submit' className={styles.SubmitButton}>{value}</button> : 
    <button type='submit' className={styles.SubmitButton}>{value}</button>;
}

export default SubmitButton;