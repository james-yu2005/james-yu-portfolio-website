import React from "react";

function Card(props) {
    return (
        <figure className="relative overflow-hidden bg-cover bg-no-repeat rounded-lg border-2 border-teal-300">
            <a href={props.link} className="relative block group ">
                <img 
                    className="rounded-lg transition duration-300 ease-in-out hover:scale-110 w-[46vh] h-[46vh] object-cover" 
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

export default Card