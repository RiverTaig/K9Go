// About.tsx
import React from 'react';
import styles from './ServiceArea.module.css';
const ServiceArea: React.FC = () => {
    return (
        <div>
            <h2>SERVICE AREA</h2>
            <p>K9Go primarily walks dogs in NE Portland, but will travel most anywhere in the Portland
                metro area.
            </p>
            <div className={styles.serviceArea}>
                <img className={styles.serviceAreaImg} src="/serviceArea.png"></img>
            </div>
           <div className={styles.noFee}></div><div className={styles.feeAreaText}>No Additional Fee</div><br></br>
           <div className={styles.yellowFee}></div><div className={styles.feeAreaText}>$7 Service Area Fee</div><br></br>
           <div className={styles.redFee}></div><div className={styles.feeAreaText}>$14 Service Area Fee</div>
        </div>
    );
}

export default ServiceArea;