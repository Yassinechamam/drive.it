import React from 'react';
import styles from "./Footer.module.css";


export const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <p>Drive.it</p>
            <button>Share a Car</button>    
        </div>
    </div>
  )
}
