import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Nav.scss";
import logo from "./images/logoD.png";
import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok,FaYoutube } from "react-icons/fa";
import { scroller } from "react-scroll";

const Nav = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const today = new Date();
  const year = today.getFullYear();

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  useEffect(() => {
    setToggleIcon(false);
  }, [location]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && !hash.includes("/")) {
      // ignore routes like #/enroll
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleClassesClick = () => {
    setToggleIcon(false);
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
    <div className={`${toggleIcon ? "active01" : ""}`}>
      <header className={`tile_container ${toggleIcon ? "active" : ""}`}>
        <nav className="logo">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              style={{ width: "4.5rem", height: "auto" }}
            />
          </Link>
        </nav>
        <nav className="non-toggle">
          <div
            onClick={handleClassesClick}
            style={{ cursor: "pointer", marginTop: "0.8em" }}
          >
            {" "}
            Classes
          </div>
        </nav>
        <nav className="non-toggle">
          <Link to="/company">Company</Link>
        </nav>
        <nav className="non-toggle">
          <Link to="/">Media</Link>
        </nav>
        <nav className="toggle_icon" onClick={handleToggleIcon}>
          {toggleIcon ? "Close" : "Menu"}
        </nav>
      </header>
      <ul className={`active03 ${toggleIcon ? "active02" : ""}`}>
        <li style={{ marginTop: "2rem" }}>
          <span onClick={handleClassesClick} style={{ cursor: "pointer" }}>
            {" "}
            Classes
          </span>
        </li>
        <li>
          <Link to="/company">Company</Link>
        </li>
        <li>
          <Link to="/">Media</Link>
        </li>
      </ul>
      <div className={`social-icons ${toggleIcon ? "social-icon01" : ""}`}>
        <a
          href="https://tiktok.com/@joindesignedge"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          <FaTiktok size={24} />
        </a>
        <a
          href="https://www.instagram.com/joindesignedge"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          <FaInstagram size={24} />
        </a>

        <a
          href="https://m.youtube.com/@joindesignedge1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#fff" }}
        >
          <FaYoutube size={24} />
        </a>
      </div>
      <p className={` p-copyright ${toggleIcon ? "p-copyright-nav" : ""}`}>
        DESIGN EDGE © {year} . ALL RIGHTS RESERVED.
      </p>
    </div>
  );
};

export default Nav;
