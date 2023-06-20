// About.tsx
import React from 'react';
import styles from './Rates.module.css';
const Rates: React.FC = () => {
    return (
        <div>
            <h2>RATES</h2>
            <p>K9Go can walk your dog as far as 15 miles in a single day!  But before we go <i>quite that far</i>, we want to make sure your pooch is up to the task :-).
                For that reason, we
                ask that you schedule a two mile walk with us first.  Subsequent walks can be 2 miles further than the longest previous walk (up to 15 miles). 
            </p>
            <table>
                <th>Miles</th>
                <th>Price</th>
                <tr>
                    <td>2 miles</td>
                    <td>$30 ($15/mile)</td>
                </tr>
                <tr>
                    <td>3 miles</td>
                    <td>${3*14} ($14/mile)</td>
                </tr>
                <tr>
                    <td>4 miles</td>
                    <td>${4*13} ($13/mile)</td>
                </tr>
                <tr>
                    <td>5 miles</td>
                    <td>${5*12} ($12/mile)</td>
                </tr>
                <tr>
                    <td>6-10 miles</td>
                    <td>$66 - $110 ($11/mile)</td>
                </tr>
                <tr>
                    <td>11-15 miles</td>
                    <td>$110 - $150 ($10/mile)</td>
                </tr>
            </table>
            <ul>
                <li>Your dog's first two-mile walk with K9Go is absolutely free!  The second walk includes a K9Go T-shirt for both you AND your dog! </li>
                <li>If you have a second dog that you would like us to walk at the same time, we are happy to do that for $5/mile. K9Go will only walk your
                dog with other dogs that you know and trust. </li>
                <li> In the event that we need to cut the walk short, you will only be charged for the miles we walked. </li>
                <li>K9Go accepts Venmo and PayPal.  You are billed at the completion of your dog's walk.</li>
            </ul>

            <img className={styles.venmo} src="/venmo_logo.png" />
            <img className={styles.paypal} src="/paypal.png" />
        </div>
    );
}

export default Rates;