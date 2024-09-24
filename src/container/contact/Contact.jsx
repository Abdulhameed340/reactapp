import React, {useState} from'react'
import './contact.css'

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('abdulsalamabdulhameed2@gmail.com');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);


  return (
    <div id='contact' className="section-padding">
      <h1>Contact</h1>
      <div className="contact__body">
        <div className="body__top">
          <p><b>Name</b><input
          type="text"
          value={name} 
          id='name'
          onChange={handleNameChange}
          placeholder='Name'
          required
          /></p>
          <p><b>Email</b><input
          type="email"
          value={email} 
          id='email'
          onChange={handleEmailChange}
          placeholder='Email Address'
          required
          /></p>
        </div>
        <div className="body__down">
          <p><b>Message</b>
          <textarea 
          value={message}
          id="tell"
          onChange={handleMessageChange}
          placeholder='Your Message'
          required 
          />
          </p>
        </div>
        <div className="ab">
        <a className='a' href={`mailto:${email}?subject=${encodeURIComponent(`Name: ${name} `)}&body=${encodeURIComponent(message)}`}>
          <button className="button"><p>Submit</p></button>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Contact