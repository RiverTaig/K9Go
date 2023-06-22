import React from 'react';
import styles from './Schedule.module.css';

const Schedule: React.FC = () => {
    const rows = new Array(4).fill(null);
    const cols = new Array(7).fill(null);
    let currentDate = new Date(); // start from current date
    let isNextMonth = false;
    return (
        <>
            <div className="grid">
                {rows.map((_, rowIndex) =>
                    <div key={rowIndex} className={styles.row}>
                        {cols.map((_, colIndex) => {
                            const dayOfMonth = currentDate.getDate();
                            if (dayOfMonth === 1) isNextMonth = true;
                            currentDate.setDate(currentDate.getDate() + 1); // increment date by one day

                            return (
                                <div key={`${rowIndex}-${colIndex}`} className={`${styles.cell} ${isNextMonth ? styles.cellGreen : styles.cellBlue}`}>
                                    {dayOfMonth}
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
        </>
    );
}

export default Schedule;


{/* <div className={`${styles.day} ${styles.firstmonth}`}>29</div>
            <div className={`${styles.day} ${styles.firstmonth}`}>30</div>
            <div className={`${styles.day} ${styles.firstmonth}`}>31</div>
            <div className={`${styles.day} ${styles.secondmonth}  ${styles.soldout}`}>1</div>
            <div className={`${styles.day} ${styles.secondmonth}`}>2</div>
            <div className={`${styles.day} ${styles.secondmonth} ${styles.soldout}`}>3</div>
            <div className={`${styles.day} ${styles.secondmonth}`}>4</div> */}