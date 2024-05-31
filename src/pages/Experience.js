// ExperienceCard.js
import React from 'react';
import meg from '../images/meg.png';
import adaptivepulse from '../images/Adaptive_Pulse.png'
import truenorth from '../images/truenorth.png'

function ExperienceCard(props) {
    return (
        <figure className="max-w-sm relative overflow-hidden bg-cover bg-no-repeat rounded-lg ml-6 mr-6 border-2 border-teal-300 mt-12">
            <a href={props.link} className="relative block group">
                <img 
                    className="rounded-lg transition duration-300 ease-in-out hover:scale-110 w-full h-full object-cover" 
                    src={props.img} 
                    alt="description of experience"
                />
                <figcaption className="absolute inset-0 flex flex-col justify-end p-4 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-lg text-white text-md">{props.name}</p>
                    <p className="text-lg text-white text-sm">{props.description}</p>
                </figcaption>
            </a>
        </figure>
    );
}

export default function Experience() {
    return (
        <div id='experience'>
            <h1 className='text-indigo-300 text-5xl text-center'>Experience</h1>
            <div className="flex flex-row justify-center">
                <ExperienceCard name="Project Manager @ MegCloud Technologies Inc." description="hi" img={meg}/>
                <ExperienceCard name="Software Engineer @ Adaptive Pulse" description="hi" img={adaptivepulse} /> {/*291*/}
                <ExperienceCard name="Frontend Dev @ TrueNorth TTC" description="Designed dynamic webpages with HTML/CSS for table tennis club" img={truenorth} />
            </div>
        </div>
    );
}
