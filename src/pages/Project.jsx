// Import necessary files and components
import React from 'react';
import todo from '../images/todo.png'
import students from '../images/students.png'
import glove from '../images/glove.png'
import cursor from '../images/cursor_escape.png'
import ultrasound from '../images/ultrasound.png'
import uwrez from '../images/uwrez.png'
import Card from "./Card";

export default function Project() {
    return (
        <div id='projects'>
            <h1 className='text-indigo-300 lg:text-5xl text-4xl text-center mt-20'>Projects</h1>
            <div className="flex flex-row justify-center space-x-4 justify-center mt-10">
                <Card name="UW Rez" description="Dorm-rating system for first-year Waterloo students created with React, Typescript, Firebase, and PostgreSQL" img={uwrez} link={"http://uwrez.com"}/> {/*291*/}
                <Card name="Student Database" description="API with Spring Boot that performs CRUD functions into SQL database" img={students} link={"https://github.com/james-yu2005/SpringBoot-student-backend"}/>
            </div>
            <div className="flex flex-row justify-center space-x-4 justify-center mt-6">
                <Card name="Ultrasound Beamforming" description="C++ function that parses echo data and transforms points into ultrasound graph data" img={ultrasound} link={"https://github.com/james-yu2005/Ultrasound-Amode-Beamforming"}/>
                <Card name="To-Do List" description="To-Do List made with MERN (MongoDB, Express, Node, React) stack with added sorting functionalities for tasks" img={todo} link={"https://github.com/james-yu2005/MERN-todo"}/>
            </div>
            <div className="flex flex-row justify-center space-x-4 justify-center mt-6">
                <Card name="ThermAlert" description="Low-fidelty glove prototype that alerts patients with hypoesthesia of critical temperatures" img={glove} link={"https://github.com/james-yu2005/Biothermal-Gloves"}/>
                <Card name="Cursor Escape" description="Cursor game with custom maze levels for users to escape from and game timer" img={cursor} link={"https://cursor-escape.vercel.app/"}/>
            </div>
        </div>
    );
}
