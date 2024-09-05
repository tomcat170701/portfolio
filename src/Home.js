import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {


  return (
    <>
    <div className='Home'>
    <h1 style={{fontSize:'4rem'}}>Hello! I'm Aman</h1>
    <h1 style={{fontSize:'4rem'}}>A Graduate Engineer</h1>
    <p style={{fontSize:'1.5rem'}}>I currently intern at Axtella Global</p>
    <Link to="/contact"><button type='submit' className='contact_btn'>Contact Me</button></Link>
    </div>
    
    </>
  )
}

export default Home