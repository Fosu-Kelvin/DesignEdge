import { Link,useLocation } from 'react-router-dom'
import './Nav.scss'
import logo from './images/logoD.png'
import { useEffect,useState } from 'react'
import { FaFacebook,FaInstagram,FaTiktok } from 'react-icons/fa'



const Nav = () => {

  const [toggleIcon, setToggleIcon] = useState(false);
  const location = useLocation();

  const today = new Date();
    const year = today.getFullYear();


  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  useEffect(() => {
    setToggleIcon(false);
  }, [location]);

  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      const section = document.querySelector(hash);
      if(section){
        section.scrollIntoView();
      }
    }
  },[])
 


  return (
    <div className={`${toggleIcon ? "active01" : ""}`}>
    <header className={`tile_container ${toggleIcon ?  "active" :""}`}>
      <nav className='logo'><Link to='/'><img src={logo} alt='logo' style={{width:'4.5rem',height:'auto'}} /></Link></nav>
      <nav className='non-toggle'><a href="/#classes">Classes</a></nav>
      <nav className='non-toggle'><Link  to="/company">Company</Link></nav>
      <nav className='non-toggle'><Link to="/">Media</Link></nav>
      <nav className="toggle_icon" onClick={handleToggleIcon}>
      {toggleIcon ? "Close" : "Menu" }</nav>
      
    
  
      
    </header>
    <ul className={ `active03 ${toggleIcon ? "active02":""}`}>
    <li><a href="/#classes">Classes</a></li>
    <li><Link  to="/company">Company</Link></li>
    <li><Link to="/">Media</Link></li>
  </ul>
  <div className={`social-icons ${toggleIcon ? "social-icon01":""}`}>
    <FaFacebook size={24}/>
    <FaInstagram size={24}/>
    <FaTiktok size={24}/>
  </div>
  <p className={` p-copyright ${toggleIcon?"p-copyright-nav":""}` }>DESIGN EDGE © {year} . ALL RIGHTS RESERVED.</p>
  
  </div>
    
  )
}

export default Nav