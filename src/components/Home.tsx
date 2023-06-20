// About.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <div>
            <h2>WELCOME TO K9GO.APP</h2>
            <p>K9Go is on the job!!</p>
            <Link className={styles.link} to="/rates" >LIVE FEED!</Link>
            <Link className={`${styles.link} ${styles.map}`} to="/rates" >MAP</Link>

            <hr></hr>
            <p><b>Welcome to K9GO.app</b> - NE Portland's premier LONG distance dog walking service.  THANK YOU for checking us out!  </p>
            <p><b>Q: What makes K9Go's dog-walking service stand out from the crowd?</b></p>
            <p><em>A: Designed for high-energy dogs that need <u>a lot</u> of exercise, K9Go offers super long walks for super fit dogs!
                We routinely walk up to 15 miles with our favorite furry friends. With K9Go.app, you can watch your dog step-by-step as they cover miles on a live video feed!
                You can see the route your dog took on a map and even track their workouts over time.</em></p>
            <p><b>Q: Why does K9Go charge by the mile instead of by the minute?</b></p>
            <p><em>A: When you go to the gym, is there any benefit from just standing around?
                Nope! You've got to move.  Your dog is the same way.
            </em></p>
            <p><b>Q: I have two dogs.  Can you walk them both?</b></p>
            <p><em>A: Yes we can!  We only walk dogs together (maximum 2 dogs) that know each other and that you have pre-approved.  Having K9Go walk a second dog (whether it's yours or a friends) 
                is a great way to save money.  See our rates page for more details. 
            </em></p>  
            <p><b>Q: Do you always just walk in the neighborhood?</b></p>
            <p><em>A: With your permission, we are happy to take your dogs on local trails such as Forest Park - it is a fantastic option especially on hotter days when the shade of a forest can be
                just what your dog needs to enjoy their walk to the fullest. 
            </em></p>         
            <p><b>Q: How do I get started?</b></p>
            <p><em>A: <a>Create</a> an account and then simply schedule a walk.  The first two-mile walk is on us!  For the first walk, a K9Go walker will meet you at your home and take a few
            minutes to ask a few questions and really get to know your dog.  Our two-mile walk will be in your neighborhood.  If you sign-up for subsequent walks, we will work with you
             to make pick-up and 
            drop-offs super easy, even if you aren't home!  Our live video feed will be rolling the whole time, so you will have peace of mind that your dog and your home are secure. 
            </em></p>
        </div>
    );
}

export default Home;