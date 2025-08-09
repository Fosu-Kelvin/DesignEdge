import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Enroll.scss'
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Enroll = () => {
    const [name, setName] = useState('')
    const [email, SetEmail]  = useState('')
    const [number, setNumber] = useState('')
    const [message, SetMessage] = useState('')
    const [address,setAddress] = useState('')
    const [selectItem,setSelectItem] = useState('')

    const navigate = useNavigate()
const handleSubmit = async (e) => {
  e.preventDefault();
  
  const formData = {
    name,
    email,
    number,
    address,
    message,
    source: selectItem,
    timestamp: new Date()
  };

  try {
    await addDoc(collection(db, "enrollments"), formData);
    alert("Enrollment submitted successfully!");
    setName("")
    setNumber("")
    SetMessage("")
    setAddress("")
    setSelectItem("")
    SetEmail("")
    navigate('/')
  } catch (err) {
    console.error("Error submitting form:", err);
    alert("Submission failed. Please try again.");
  }
};


  return (
    <section className='enroll-container'>
        <div className='non-form-box'>
          <h1>
  Beginner<br />
  Graphic Design Class
</h1>

          <h3>GHC100.00</h3>
          <p>With just GHC100, learn the basics of Graphic Design, including how to use essential tools, understand design principles, and create your first project.</p>
        </div>
        <div className='form-box'>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" value={name}  placeholder='Your full name' required 
            onChange={(e)=> setName(e.target.value)} />
            <label htmlFor="email">Email address</label>
            <input type="email" value={email} placeholder='Your email address' required
            onChange={(e)=> SetEmail(e.target.value)} />
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" value={number} placeholder='Your phone number' required onChange={(e)=>setNumber(e.target.value)}/>
            <label htmlFor="address">Address(Optional)</label>
            <input type="text" value={address} placeholder='Your address' onChange={(e)=>setAddress(e.target.value)}/>
            <label htmlFor="">How did you hear about us?</label>
            <select value={selectItem} onChange={(e)=>setSelectItem(e.target.value)}>
              <option className="disable-option" value="" disabled selected   >Select one</option>
              <option value="website">website</option>
              <option value="social media">social media</option>
              <option value="friends/family">friends/famly</option>
              <option value="others">others</option>
            </select>
            <label htmlFor="">Any specific goals or expectations for the class?</label>
            <textarea name="message" value={message} onChange={(e)=>SetMessage(e.target.value)} id="message"  placeholder='Type here...'></textarea>
            <p className='below-p'>Please note that your spot in the masterclass is only confirmed upon successful payment</p>
            <button type='submit'>Enroll</button>
          </form>
        </div>
       </section>
  )
}

export default Enroll