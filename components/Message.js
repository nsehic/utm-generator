import React, { useEffect } from 'react';
import styles from './Message.module.css';

const Message = ({text, id, onExpire}) => {

    useEffect(() => {
        const timeoutId = setTimeout(() => onExpire(id), 5000);

        return () => clearTimeout(timeoutId);
    }, []);
    
    return (
           <div className={styles.Message}>{text}</div>
    );
}

export default Message;