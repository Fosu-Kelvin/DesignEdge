import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom'

const menu = () => {
  return (
    <>
    <section id='company' className='container_1'>
        <div className="head-1">
        <h1 className='trade'>Don't just design, </h1>
        <h1 className='conquer'>create.</h1>
        </div>
       <div >
        <p className="parag">
        Transform from a complete beginner to a design expert with our step-by-step, hands-on Graphic Design classes.
Learn the techniques used by top designers, build real-world projects, and unlock your creative potential, no prior experience needed.
        </p>
        </div>
       
        <div className="bottom-1">
            <h3>JOIN OUR UPCOMING CLASS</h3>
            <button><Link className='custom-link' to="/enroll">Enroll Now</Link></button>
        </div>
    </section>
    <section id='classes' className='container-2'>
            <h1>CHOOSE YOUR PATH</h1>
            <div className="box">
            <p>Whether you're just starting out or aiming to master design, we've got you covered.</p>
            <div className="box1-2">
            <div className="box1">
                <h2>BEGINNERS <br/> GRAPHIC DESIGN ClASS </h2>
                <p>Learn the basics of Graphic Design, including how to use design tools, understand key principles like layout and color theory, and create your first project.</p>
                <p><Link to="/enroll">Enroll Now</Link></p>
            </div>
            <div className="box2">
            <h2>ADVANCE <br/>GRAPHIC DESIGN CLASS</h2>
                <p>Unlock advanced design techniques, master creative workflows, and work on real-world design projects to refine your skills and build a standout portfolio.</p>
                <p><Link to="/enroll">Enroll Now</Link></p>
            </div>
            </div>
            </div>
    </section>
    <section id='media' className='container-3'>
  <h2>WHAT MAKES US DIFFERENT?</h2>
  <div className="container-3-box">
    <div>
      <h3>PRACTICAL TRAINING</h3>
      <p>Learn by doing with real-world design projects.</p>
    </div>
    <div>
      <h3>EXPERIENCED INSTRUCTORS</h3>
      <p>Gain insights from professional graphic designers.</p>
    </div>
    <div>
      <h3>SMALL CLASS SIZE</h3>
      <p>Enjoy personalized guidance and feedback.</p>
    </div>
    <div>
      <h3>POST-CLASS SUPPORT</h3>
      <p>Access ongoing mentorship and design resources.</p>
    </div>
  </div>
</section>

    <section className="container-4">
      <div className="head-4">
      <h1>READY TO <br/><span className='conquer'>UNLEASH</span> YOUR CREATIVITY?</h1>

      </div>
      <div className="bottom-4">
            <h3>JOIN OUR UPCOMING CLASS</h3>
           <Link className='custom-link' to="/enroll"> <button className='company-enroll-button1'>Enroll Now</button></Link>
        </div>
    </section>
    </> 
  )
}

export default menu