import "./Footer.scss";
import logo from "./images/logoD.jpg";
import { Link } from "react-router-dom";
import {  scroller } from 'react-scroll';
import { useNavigate,useLocation } from "react-router-dom";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const handleClassesClick = () => {
    if (location.pathname !== "/") {
      // If not on home, go there first
      navigate("/");
      setTimeout(() => {
        scroller.scrollTo("classes", {
          smooth: true,
          duration: 500,
          offset: -50, // adjust if you have a fixed header
        });
      }, 200); // wait for home to render
    } else {
      // Already on home → just scroll
      scroller.scrollTo("classes", {
        smooth: true,
        duration: 500,
        offset: -50,
      });
    }
  };

  return (
    <footer>
      <div className="foot-container1">
        <div className="foot-container2">
          <div className="footbox-1">
            <img
              className="logo-icon"
              src={logo}
              alt="logo"
              style={{ width: "5rem", height: "auto" }}
            />

            <p>
              Our mission is simple: to make Graphic Design accessible to
              everyone. Whether you're just starting out or looking to refine
              your skills, we provide hands-on, practical training designed to
              deliver real results.
            </p>
          </div>
          <div className="footbox-2">
            <h4>QUICK LINKS</h4>
            <ul>
              <li style={{ cursor: "pointer" }} onClick={handleClassesClick}>
                
                  Classes
                
              </li>
              <li> 
                <Link to="/company">Company</Link>
              </li>
              <li>
                <Link to="/">Media</Link>
              </li>
            </ul>
          </div>
          <div className="footbox-3">
            <h4>ADDRESS</h4>
            <ul>
              <li>Ghana</li>
              <li className="info">
                <a href="tel:+233531533328,tel:+233554322580">
                  Phone:0531533328/0554322580
                </a>
              </li>
              <li className="info mail">
                <a href="mailto:kelfosu@gmail.com">
                  Email: info@joindesignedge.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footbox4">
          <p className="finance-copyright">
            DESIGN EDGE © {year}. ALL RIGHTS RESERVED
          </p>
          <p>
            <i>
              <span>Disclaimer</span>: Graphic design results may vary based on
              individual effort and creativity. Success is not guaranteed, and
              outcomes depend on practice and skill development.
            </i>
          </p>
        </div>

        <p className="back-to-top">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
