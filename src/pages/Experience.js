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
            <h1 className='lg:text-5xl text-4xl text-indigo-300 text-center mt-20'>Experience</h1>
            <div className="flex flex-row justify-center space-x-4 mt-10">
                <Card name="Full-stack Dev @ Adaptive Pulse" date="May 2024 - present" description="Developed components with React and Supabase to manage projects scanned for SR&ED analysis" img={adaptivepulse} link={"http://adaptivepulse.com"} /> {/*291*/}
                <Card name="Enable Team @ UW Biotron" date="Sep 2023 - Dec 2023" description="Built prosthetic arm with 3D printed parts" img={biotron} link={"https://www.facebook.com/UWBioTron/"}/>
            </div>
            <div className="flex flex-row justify-center space-x-4 mt-6">
                <Card name="Payload Team @ UW Rocketry" date="Sep 2023 - Jan 2024" description="Designed SolidWorks tubing for rocket payload" img={rocketry} link={"https://www.waterloorocketry.com/subsystems"}/>
                <Card name="Frontend Dev @ TrueNorth" date="May 2022 - August 2022" description="Designed dynamic webpages with HTML/CSS for table tennis club" img={truenorth}/>
            </div>
        </div>
    );
}
