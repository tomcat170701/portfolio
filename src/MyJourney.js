import React from 'react';

const MyJourney = () => {
  return (
    <section className="journey-section">
      <h1 className="journey-title">My <span className="highlight">Journey</span></h1>
      <div className="journey-container">
        <div className="education">
          <h2>Education</h2>
          <div className="journey-card">
            <p className="degree">B.Tech - Rajagiri School Of Engineering and Technology</p>
            <p className='year'>(2020-2024)</p>
            <p className="details">
              Graduated Bachelors in Technology in Electronics and Communication stream with 7.5 CGPA
            </p>
          </div>
          <div className="journey-card">
            <p className="degree">Higher Secondary - St. George's HSS Kothamangalam</p>
            <p className='year'>(2018-2020)</p>
            <p className="details">
               Graduated Higher Secondary in Computer Science stream scoring 94%
            </p>
          </div>
          <div className="journey-card">
            <p className="degree">High School - Irshadiyya Public School</p>
            <p className='year'></p>
            <p className="details">
               Graduated High School with a GPA of 3.7 out of 4.0 
            </p>
          </div>
        </div>

        <div className="experience">
          <h2>Experience</h2>
          <div className="journey-card">
            <p className="job-title">SDE Intern - Axtella Global</p>
            <p className="details">
              Currently working as a Software Development Engineer intern. 
              Collaborating with a cross-functional team to design and implement
              a next generation Automated Vehicle Localization software for fleet management.
            </p>
          </div>
          <div className="journey-card">
            <p className="job-title">Research Student - RSET</p>
            <p className="details">
              Oversaw the development of FIFO and DMA of RISC-V based hardware accelerator for Video Anomaly Detection 
            </p>
          </div>
          {/* <div className="journey-card">
            <p className="job-title">Web Developer - Company</p>
            <p className="details">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi ut quo dignissimos 
              autem fuga expedita qui qui distinctio.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
