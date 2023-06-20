// About.tsx
import React from 'react';

const Cancellation: React.FC = () => {
    return (
        <div>
            <h2>CANCELLATION & WEATHER</h2>
            <p>Weather is the primary reason that K9Go will occasionally need to modify or cancel your dog's walk.  The weather - in combination
                with your dog's "ASFB" (age, size, fitness, and breed) - is of uptmost importance for your dog's safety and their enjoyment of a walk.   
            </p>
            <ul>
                <li>If K9Go needs to cancel your dog's walk for any reason, you will not be charged.</li>
                <li>You may cancel your dog's walk with 24 hours notice for any reason at no charge. Please check the weather forecast!</li>
                <li>K9Go will only walk dogs when the temperature is between 25-85 fahrenheit.  If the temperature is outside of this window at the time of your dog's 
                    scheduled walk, we will notify you of the cancellation.</li>
                <li>K9Go will only walk dogs in the rain at temperatures above 45 degrees.</li>
                <li>If the weather at the time of your dog's scheduled walk is below freezing (25-32) or above 80 degrees (80-85),
                you will have the option of cancelling the walk or agreeing to a modified distance of five miles or less.</li>
                <li>K9Go always carries water and a clean bowl for your dog to drink from.  In warm weather, K9Go reserves the right to wet your dog's fur to help them stay cool.</li>
                <li>K9Go will require owners of small dogs to dress their dog appropriately (sweater / jacket).</li>
            </ul>

        </div>
    );
}

export default Cancellation;