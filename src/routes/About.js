import React from "react";
import { useLocation } from "react-router-dom";
import './About.css';

function About() {
    const location = useLocation();
    console.log(location.state)
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus two make four.
                If tha is granted, all else follows."
            </span>
            <span>- Geroge 0rwell, 1984</span>
        </div>
    );
}

export default About;