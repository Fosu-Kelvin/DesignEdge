import { Link } from 'react-router-dom'
import './company.scss'

const company = () => {
  return (
    <section className='container_100'>
      <div className="head-100">
        <h1 className='trade100'>Don't just design,</h1>
        <h1 className='conquer100'>create.</h1>
      </div>

      <div>
        <p className="parag100">
          Transform from a complete beginner to a design expert with our step-by-step, hands-on Graphic Design classes. Learn the techniques used by top designers, gain real-world experience, and unlock your creative potential — no prior knowledge needed.
        </p>
      </div>

      <div className="bottom-100">
        <h3>JOIN OUR UPCOMING CLASS</h3>
        
          <Link className='custom-link100' to="/enroll"><button className='company-enroll-button'>Enroll Now </button></Link>
       
      </div>
    </section>
  )
}

export default company
