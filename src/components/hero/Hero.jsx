import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from "./Hero.module.css";


export const Hero = () => {
  return (
    <div className={styles.hero}>
        <form>
            <div className={styles.texte}>
                <label>Where</label>
                <input type="text" placeholder='Search Location' className={styles.input_text}/>
            </div>
            <div className={styles.from}>
                <span className={styles.border}></span>
                <label>From</label>
                <input type="date" />
            </div>
            <div className={styles.until}>
                <span className={styles.border}></span>
                <label>Until</label>
                <input type="date"  />
            </div>
            <div className={styles.search_btn}>
                <AiOutlineSearch/>
                <button className={styles.btn}>Search for Cars</button>
            </div>
        </form>
    </div>
  )
}
