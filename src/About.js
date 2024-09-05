import React, { useState } from 'react'
import me from './images/me.jpg';

const About = () => {
    const[showMore, setShowMore] = useState(false);
    const handleToggle = () => {setShowMore(!showMore)};
  return (
    <section className="about-section">
        <h1 className="about-title">About <span className="highlight">Me</span></h1>
        <div className="profile-container">
            <div className='profile-img-wrapper'>
            <img src={me} className='profile-img'/>
            </div>
            <p className='about-description'>I am a passionate Electronics and Communications Engineer with a strong interest in innovative technology and problem-solving. 
            My academic journey has led me to work on impactful projects such as the FIFO and DMA for Hardware Accelerator used in Anomaly Detection, 
            which was part of the C2S initiative funded by the Ministry of Electronics and IT and earned a spot in an IEEE international 
            conference.
            </p>
            <p className={`about-description ${showMore ? "show" : "hide"}`}>
            Additionally, I developed an ASCII to Braille conversion system using computer vision and Raspberry Pi, and created an Automated Pressure Release Chamber for a BioGas 
            Plant using Vega Processors during the Vegathon national hackathon by CDAC.    
            Beyond my technical projects, I am actively involved in volunteering,
            having served as the Vice-Chair of the IEEE SPS RSET Student Branch, 
            contributed to the IEEE MOVE India Council Marketing Team, and written
            content for the IEEE RAS Kerala Chapter. I am driven by a commitment 
            to innovation and a desire to contribute meaningfully to the tech 
            community.
            </p>
          <button className='read-more' onClick={handleToggle}>{showMore?'Read Less':'Read More'}</button>
        </div>
    </section>
  );
};

export default About;