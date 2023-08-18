import React from 'react';
import styles from "./Find.module.css";

export const Card = ({image, title}) => {
  return (
    <div className={styles.card}>
        <img src={image} alt="" />
        <p>{title}</p>    
    </div>
  )
}
