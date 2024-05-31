// ExperienceCard.js
import React from 'react';
import rocketry from '../images/Rocketry.png'
import biotron from '../images/biotron.png'
import adaptivepulse from '../images/Adaptive_Pulse.png'
import truenorth from '../images/truenorth.png'
import Card from './Card';

export default function Experience() {
    return (
        <div id='experience'>
            <h1 className='text-indigo-300 text-5xl text-center mt-20'>Experience</h1>
            <div className="flex flex-row justify-center space-x-4 mt-10">
                <Card name="Frontend Dev @ TrueNorth TTC" description="Designed dynamic webpages with HTML/CSS for table tennis club" img={truenorth}/>
                <Card name="Full-stack Dev @ Adaptive Pulse" description="Developed components for full-stack app with React and Supabase to manage projects scanned for SR&ED analysis" img={adaptivepulse} link={"http://adaptivepulse.com"} /> {/*291*/}
            </div>
            <div className="flex flex-row justify-center space-x-4 mt-6">
                <Card name="Payload Team @ UW Rocketry" description="Designed SolidWorks tubing for rocket for efficiency" img={rocketry} link={"https://www.waterloorocketry.com/subsystems"}/>
                <Card name="Enable Team @ UW Biotron" description="Built prosthetic arm with 3D printed parts" img={biotron} link={"https://www.facebook.com/UWBioTron/"}/>
            </div>
        </div>
    );
}
