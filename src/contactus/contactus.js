import React, { useState } from 'react';
import './contactus.css';

const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Message submitted:', { name, email, contactNo, message });
    setName('');
    setEmail('');
    setContactNo('');
    setMessage('');
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="feedback-form">
      <h2>Contact us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Contact Number:</label>
          <input type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && (
        <div className="popup">
          <p>Thank you for your submission!</p>
          <button onClick={resetForm}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Contactus;
