import "./AboutContentStyles.css";

import React from 'react';
import { Link } from "react-router-dom";
import portrait from "../assets/portrait.jpg";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>I am Samuel Nelson, an aspiring developer with a love for leveraging technology to drive business success.</p>
            <p>I am an undergratuate teaching asssitant for the Computer Systems class at the University of Minnesota, College of Science and Engineering. Here, I instruct 2 lab sections of 30 students, aiding in the development of students' programming skills in C.</p>
            <p>I have also spent 5 years working in landscape construction. The labor intensive process of building resilient structures with my bare hands has equipped me with an unbounded work ethic, adaptability, and ability to overcome challenge.</p>
            <p>In addition to my work and studies, I am an expert in physical training, a competitive golfer, and striving to improve my personal finance skills.</p>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={portrait} className="img" alt="A picture of myself"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent