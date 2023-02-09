import React from 'react';
import styles from './index.module.css';

function TitleGoogle({ children, title, titleConfig = '', paragraphConfig = '', spanClass = '' }) {
    return (
        <div>
            <h1 className={styles.title} style={titleConfig}>
                {title}
            </h1>
            <p className={styles.paragraph + ' ' + styles[spanClass]} style={paragraphConfig}>
                {children}
            </p>
        </div>
    );
}

export default TitleGoogle;