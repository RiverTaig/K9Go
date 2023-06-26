import React, { MouseEventHandler } from 'react';
import styles from './Schedule.module.css';
import { useEffect, useState, useRef } from 'react';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';

interface Appointment {
    x: string
}
interface Dog {
    name: string,
    breed: string,
    age: number,
    lastWalkDate: Date,
    lastWalkDistance: number,
}
const Schedule: React.FC = () => {
    const rows = new Array(4).fill(null);
    const cols = new Array(7).fill(null);
    let [dogs, setDogs] = useState<Dog[]>([])
    let [schedule, setSchedule] = useState<Appointment[]>([])
    const [activeIndex, setActiveIndex] = useState(15);
    let currentDate = new Date(); // start from current date
    let currentDay = currentDate.getDay();
    let precedingSunday = new Date()
    let tomorrow = currentDate.setDate(currentDate.getDate() + 1)
    precedingSunday.setDate(precedingSunday.getDate() - currentDay)
    let isNextMonth = false;
    const [value, setValue] = useState<number>();
    const distanceRef = useRef<HTMLInputElement>(null);

    function createTimeSlots(startHour: number, endHour: number, incrementMinutes: number) {
        const times = [];
        for (let i = startHour; i < endHour; i++) {
            const suffix = i >= 12 ? 'PM' : 'AM';
            let displayHour = i > 12 ? i - 12 : i;
            if (displayHour === 0) displayHour = 12; // handle midnight
            times.push(`${displayHour}:00 ${suffix}`);
            times.push(`${displayHour}:${incrementMinutes} ${suffix}`);
        }
        return times;
    }

    const times = createTimeSlots(7, 19, 30);

    const onClickCell = (event: any) => {
        document.querySelectorAll('div.selectedDate').forEach(div => {
            div.classList.remove('selectedDate');
        });
        // Add the 'selectedDate' class to the first div with innerHTML of '4'
        const pel = event.target.parentElement;
        if (pel.classList.contains("cell")) {
            pel.classList.add('selectedDate')
        }
    }
    const handleChange = (event: any) => {

        updateAvailableTime(event.target.value)

    }

    const updateAvailableTime = (miles: number) => {
        setValue(miles);
        const divs = Array.from(document.querySelectorAll('div[data-index]'));
        let selectedDivs = divs.filter(div => Number(div.getAttribute('data-index')) > 0);
        selectedDivs.forEach(div => div.classList.remove('notAvailable'));
        selectedDivs = divs.filter(div => Number(div.getAttribute('data-index')) > + (25 - miles));
        selectedDivs.forEach(div => div.classList.add('notAvailable'));
    }

    useEffect(() => {
        setDogs([{ name: "Fido", breed: "Mutt", age: 8, lastWalkDate: new Date(), lastWalkDistance: 3 },{ name: "Opus", breed: "Mutt", age: 8, lastWalkDate: new Date(), lastWalkDistance: 3 }])
        const fetchSchedules = async () => {
            const db = getFirestore();
            const today = new Date();
            const futureDate = new Date();
            futureDate.setDate(today.getDate() + 28);

            const q = query(
                collection(db, 'Schedule'),
                where('StartTime', '>=', today),
                where('StartTime', '<=', futureDate),
                orderBy('StartTime')
            );

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                const timestampInMilliseconds = doc.data().StartTime * 1;
                const date = new Date(timestampInMilliseconds);
                console.log(date);  // outputs the date
                const dayOfMonth = date.getDate();
                console.log(dayOfMonth);  // outputs the day of the month
                let appt = { x: "10+ left" }
                let appts = [appt]
                setSchedule(appts)
            });
            distanceRef!.current!.value = '6';
            updateAvailableTime(6)
        };

        fetchSchedules();
    }, []);
    return (
        <>
            <h2>SCHEDULE</h2>
            <p>Select a date from the calendar below and sign your dog up for a walk!</p>
            <div>Please walk <select>
                {dogs.map((dog, index) => (
                    <option key={index}>
                        {dog.name}
                    </option>
                ))}

            </select></div>
            <div className="grid">
                <div className='dayNames'><div className={`${styles.dayName} ${styles.cell}`}>SUN</div><div className={`${styles.dayName} ${styles.cell}`}>MON</div><div className={`${styles.dayName} ${styles.cell}`}>TUE</div><div className={`${styles.dayName} ${styles.cell}`}>WED</div><div className={`${styles.dayName} ${styles.cell}`}>THU</div><div className={`${styles.dayName} ${styles.cell}`}>FRI</div><div className={`${styles.dayName} ${styles.cell}`}>SAT</div></div>

                {rows.map((_, rowIndex) =>
                    <div key={rowIndex} className={styles.row}>
                        {cols.map((_, colIndex) => {
                            const dayOfMonth = precedingSunday.getDate();
                            if (dayOfMonth === 1) isNextMonth = true;
                            precedingSunday.setDate(precedingSunday.getDate() + 1); // increment date by one day

                            return (
                                <div key={`${rowIndex}-${colIndex}`} className={`${styles.cell} ${isNextMonth ? styles.firstmonth : styles.secondmonth}  ${precedingSunday <= currentDate ? styles.expiredDate : styles.validDate}
                                ${1 == 1 ? styles.selected : styles.notSelected}
                                cell




                                `} onClick={onClickCell}>
                                    {dayOfMonth === 1 ? <div className={styles.month}>{['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'][new Date().getMonth() + 1]}</div> : <div className={styles.month}> </div>}
                                    <div className={styles.dayOfMonth}>{dayOfMonth}</div>
                                    <div className={styles.apptsLeft}>{schedule.length > 0 ? schedule[0].x : "x"}</div>
                                </div>
                            )
                        })}
                    </div>

                )}
                <hr></hr>
                <div className={styles.miles}>
                    <span>Please Walk my Dog </span>

                    <span> {value} Miles</span>
                </div>
                <input ref={distanceRef}
                    type="range"
                    min="2"
                    max="15"
                    value={value}
                    onChange={handleChange}
                />

            </div>
            <h5>Select a Time</h5>
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        {times.slice(0, times.length / 3).map((time, index) => (
                            <div key={time} data-index={index}>{time}</div>
                        ))}
                    </div>
                    <div className="col-4">
                        {times.slice(times.length / 3, 2 * times.length / 3).map((time, index) => (
                            <div key={time} data-index={index + times.length / 3}>{time}</div>
                        ))}
                    </div>
                    <div className="col-4">
                        {times.slice(2 * times.length / 3).map((time, index) => (
                            <div key={time} data-index={index + 2 * times.length / 3}>{time}</div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Schedule;

