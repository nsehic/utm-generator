import React from 'react';
import styles from './InputField.module.css';


const InputField = ({label, value, onChange, required = true, type='text', ...props}) => {
    if(type === 'select') {
        return (
            <div className={styles.SelectField} key={props.key}>
                <select id={label} onChange={onChange} value={value}>
                    {props.list.map(listItem => (
                        <option key={listItem.handle} value={listItem.handle}>{listItem.name}</option>
                    ))}
                </select>
                <label htmlFor={label}>{label}</label>
            </div>
        );
    } else {
        return (
            <div className={styles.InputField} key={props.key}>
                <input type={type} id={label} value={value} onChange={onChange} required={required}/>
                <label htmlFor={label}>{label}</label>
            </div>
        );
    }
    
}

export default InputField;